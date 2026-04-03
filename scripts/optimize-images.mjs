/**
 * Image Optimization Script — Floating Paradise
 * Compresses and converts large JPG/PNG images to optimized WebP
 * Backups original files to public/_backups/
 *
 * Usage: node scripts/optimize-images.mjs
 */

import sharp from 'sharp'
import { readdir, stat, mkdir, copyFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PUBLIC_DIR = path.join(__dirname, '..', 'public')
const BACKUP_DIR = path.join(PUBLIC_DIR, '_backups')

// Settings
const SIZE_THRESHOLD_KB = 300   // Only compress files larger than this (KB)
const WEBP_QUALITY = 80         // WebP quality (0-100), 80 is great quality/size balance
const JPEG_QUALITY = 82         // JPEG re-compress quality
const MAX_WIDTH = 2400          // Max width in pixels (downscale if larger)
const MAX_HEIGHT = 1800         // Max height in pixels

const stats = { processed: 0, skipped: 0, savedKB: 0, errors: 0 }

/** Recursively get all image files */
async function getImageFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    // Skip backup dir and .next
    if (entry.name === '_backups' || entry.name === '.next') continue

    if (entry.isDirectory()) {
      files.push(...(await getImageFiles(fullPath)))
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      files.push(fullPath)
    }
  }
  return files
}

/** Convert bytes to KB */
const toKB = (bytes) => Math.round(bytes / 1024)

async function processImage(filePath) {
  const fileInfo = await stat(filePath)
  const originalKB = toKB(fileInfo.size)

  // Skip small files
  if (originalKB < SIZE_THRESHOLD_KB) {
    console.log(`  ⏭  ${path.basename(filePath)} (${originalKB} KB) — skipped, under threshold`)
    stats.skipped++
    return
  }

  const ext = path.extname(filePath).toLowerCase()
  const nameWithoutExt = filePath.slice(0, -ext.length)

  // Determine output path
  // If it's already a .png or .jpg, convert to .webp
  const outputPath = nameWithoutExt + '.webp'

  // Backup original
  const relPath = path.relative(PUBLIC_DIR, filePath)
  const backupPath = path.join(BACKUP_DIR, relPath)
  await mkdir(path.dirname(backupPath), { recursive: true })

  if (!existsSync(backupPath)) {
    await copyFile(filePath, backupPath)
  }

  try {
    const image = sharp(filePath)
    const metadata = await image.metadata()

    // Resize if needed (maintain aspect ratio)
    let pipeline = image.resize(MAX_WIDTH, MAX_HEIGHT, {
      fit: 'inside',
      withoutEnlargement: true,
    })

    // Convert to WebP
    pipeline = pipeline.webp({ quality: WEBP_QUALITY })

    await pipeline.toFile(outputPath)

    const newInfo = await stat(outputPath)
    const newKB = toKB(newInfo.size)
    const savedKB = originalKB - newKB
    const pct = Math.round((savedKB / originalKB) * 100)

    console.log(`  ✅ ${path.basename(filePath)} ${originalKB} KB → ${path.basename(outputPath)} ${newKB} KB (−${pct}%)`)
    stats.processed++
    stats.savedKB += savedKB
  } catch (err) {
    console.error(`  ❌ Error processing ${path.basename(filePath)}: ${err.message}`)
    stats.errors++
  }
}

async function main() {
  console.log('\n🚀 Floating Paradise — Image Optimization\n')
  console.log(`📁 Scanning: ${PUBLIC_DIR}`)
  console.log(`📦 Backup:   ${BACKUP_DIR}`)
  console.log(`⚙️  Threshold: >${SIZE_THRESHOLD_KB} KB | Quality: ${WEBP_QUALITY} | Max: ${MAX_WIDTH}×${MAX_HEIGHT}px\n`)

  await mkdir(BACKUP_DIR, { recursive: true })

  const imageFiles = await getImageFiles(PUBLIC_DIR)
  console.log(`📷 Found ${imageFiles.length} JPG/PNG files\n`)

  for (const file of imageFiles) {
    await processImage(file)
  }

  console.log('\n' + '─'.repeat(60))
  console.log(`✅ Done!`)
  console.log(`   Processed : ${stats.processed} files`)
  console.log(`   Skipped   : ${stats.skipped} files (under ${SIZE_THRESHOLD_KB} KB)`)
  console.log(`   Errors    : ${stats.errors}`)
  console.log(`   Saved     : ${Math.round(stats.savedKB / 1024 * 10) / 10} MB total`)
  console.log('─'.repeat(60))
  console.log('\n⚠️  PENTING: Update semua referensi ke file .jpg/.png yang dikonversi ke .webp di kode!')
  console.log('   File asli tersimpan di public/_backups/\n')
}

main().catch(console.error)
