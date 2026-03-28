# Floating Paradise — Project Rules

> Rules ini WAJIB dibaca dan diikuti oleh AI assistant sebelum menulis, mengedit, atau mereview kode apa pun dalam proyek ini.

---

## 1. Identitas Proyek

| Item               | Detail                                           |
| ------------------- | ------------------------------------------------ |
| **Nama**            | Floating Paradise Website                        |
| **Framework**       | Next.js 16 (App Router, Turbopack)               |
| **Bahasa**          | TypeScript (strict mode)                         |
| **Styling**         | Tailwind CSS v4 + CSS Variables                  |
| **UI Library**      | shadcn/ui (New York style) + Radix UI primitives |
| **Icon Library**    | Lucide React                                     |
| **Deployment**      | Vercel                                           |
| **Package Manager** | npm                                              |

---

## 2. Struktur Folder

```
floating-paradise-website-1/
├── app/                    # Next.js App Router (pages & layouts)
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles + Tailwind + CSS variables
│   ├── about/              # /about page
│   ├── bungalows/          # /bungalows page
│   ├── explore/            # /explore page
│   ├── getting-here/       # /getting-here page
│   └── yoga-retreat/       # /yoga-retreat page
├── components/             # Reusable React components
│   ├── ui/                 # shadcn/ui primitives (Button, Dialog, etc.)
│   ├── navigation.tsx      # Navbar
│   ├── hero-section.tsx    # Hero section
│   ├── features-section.tsx
│   ├── highlights-section.tsx
│   ├── cta-section.tsx
│   ├── footer.tsx
│   └── ...                 # Section-level components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions (cn(), etc.)
├── public/                 # Static assets (images, icons, fonts)
├── styles/                 # Additional global CSS
├── components.json         # shadcn/ui configuration
├── next.config.mjs         # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.mjs      # PostCSS configuration
└── package.json
```

### Aturan Folder

- **JANGAN** membuat folder `src/`. Proyek ini menggunakan root-level `app/`.
- Setiap halaman baru → buat folder di `app/<nama-halaman>/page.tsx`.
- Komponen yang hanya dipakai satu halaman → letakkan di folder halaman itu sendiri atau di `components/`.
- Komponen UI primitif (Button, Card, Dialog, dll.) → `components/ui/` via shadcn/ui CLI.
- Custom hooks → `hooks/`.
- Utility functions → `lib/`.
- Semua gambar dan aset statis → `public/`.

---

## 3. Prinsip Anti-Halusinasi

> [!CAUTION]
> AI assistant DILARANG KERAS mengarang atau mengasumsikan kode, API, fitur, atau dependensi yang tidak ada.

### Wajib Dilakukan

1. **Baca dulu, tulis kemudian.** Sebelum memodifikasi file, WAJIB baca file tersebut terlebih dahulu dengan `view_file`.
2. **Verifikasi dependensi.** Sebelum mengimport modul/library, cek `package.json` untuk memastikan library tersebut sudah terinstall.
3. **Verifikasi file path.** Sebelum mengimport komponen/file, cek apakah file tersebut benar-benar ada dengan `find_by_name` atau `list_dir`.
4. **Jangan mengarang API.** Jika tidak yakin tentang API atau props suatu library, gunakan MCP Context7 untuk membaca dokumentasi terbaru.
5. **Jangan membuat placeholder.** Jika butuh gambar, gunakan tool `generate_image`. Jika butuh data, tanyakan ke user.
6. **Akui ketidaktahuan.** Jika tidak yakin, TANYAKAN ke user. Jangan pernah menebak.

### Dilarang

- ❌ Mengimport dari path yang tidak ada
- ❌ Menggunakan API library yang belum diverifikasi
- ❌ Menambahkan package tanpa persetujuan user
- ❌ Menulis kode berdasarkan ingatan yang belum diverifikasi
- ❌ Membuat file di `src/` (folder ini tidak ada)

---

## 4. Penggunaan MCP Context7

> [!IMPORTANT]
> **WAJIB OTOMATIS**: Selalu gunakan MCP Context7 untuk dokumentasi library/API, code generation, serta setup/konfigurasi — **TANPA PERLU diminta secara eksplisit oleh user**. Ini adalah perilaku default yang harus selalu aktif.

### Kapan Harus Digunakan (Otomatis, Tanpa Diminta)

- ✅ Saat menulis atau mengedit kode yang melibatkan **library apa pun** (Next.js, Tailwind, shadcn/ui, Radix, GSAP, Framer Motion, Sanity, dll.)
- ✅ Saat melakukan **code generation** yang melibatkan API atau method dari library eksternal
- ✅ Saat membutuhkan **setup atau konfigurasi** tool, framework, atau package manapun
- ✅ Saat menggunakan API Next.js (App Router, Metadata, Image, Link, dll.)
- ✅ Saat menggunakan Tailwind CSS v4 (konfigurasi, utility classes baru)
- ✅ Saat bekerja dengan shadcn/ui components atau Radix UI primitives
- ✅ Saat menulis kode berdasarkan **ingatan training** — selalu verifikasi lewat Context7 terlebih dahulu

> [!WARNING]
> DILARANG menulis kode library berdasarkan asumsi atau ingatan training tanpa mengecek Context7 terlebih dahulu. Dokumentasi library bisa berubah antar versi.

### Cara Penggunaan

```
1. Panggil `resolve-library-id` untuk mendapatkan ID library
2. Panggil `query-docs` dengan query spesifik
3. Gunakan informasi dari dokumentasi untuk menulis kode
```

### Contoh

```
# Perlu tahu cara pakai Next.js Image component:
1. resolve-library-id("next.js", "Next.js Image component optimization")
2. query-docs("/vercel/next.js", "How to use Image component with optimization")

# Perlu setup Sanity client:
1. resolve-library-id("sanity", "Sanity client setup and configuration")
2. query-docs("/sanity-io/sanity", "How to configure and use Sanity client")
```

---

## 5. Konvensi Kode

### TypeScript

- Gunakan `interface` daripada `type` untuk object shapes
- Selalu definisikan tipe props untuk setiap komponen
- Gunakan path alias `@/*` untuk semua import (e.g. `@/components/ui/button`)
- Hindari `any` — gunakan tipe yang spesifik
- Gunakan `"use client"` hanya jika komponen membutuhkan interaktivitas (hooks, event handlers)

### React Components

```tsx
// ✅ Pattern yang benar
"use client" // hanya jika diperlukan

import { cn } from "@/lib/utils"

interface SectionProps {
  title: string
  className?: string
}

export default function Section({ title, className }: SectionProps) {
  return (
    <section className={cn("py-16", className)}>
      <h2>{title}</h2>
    </section>
  )
}
```

### Naming Conventions

| Jenis              | Format                     | Contoh                   |
| ------------------- | ------------------------- | ------------------------ |
| Komponen            | PascalCase                | `HeroSection.tsx`        |
| File komponen       | kebab-case                | `hero-section.tsx`       |
| Halaman             | `page.tsx` dalam folder   | `app/about/page.tsx`     |
| Layout              | `layout.tsx` dalam folder | `app/layout.tsx`         |
| Custom hooks        | camelCase, prefix `use`   | `use-mobile.ts`          |
| Utility functions   | camelCase                 | `utils.ts`               |
| CSS class (custom)  | kebab-case                | `.hero-gradient`         |

### Import Order

```tsx
// 1. React / Next.js
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

// 2. External libraries
import { motion } from "framer-motion"

// 3. Internal components
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"

// 4. Hooks & Utils
import { useMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

// 5. Types
import type { PageProps } from "@/types"
```

---

## 6. Styling Guidelines

### Tailwind CSS v4

- Gunakan Tailwind utility classes sebagai prioritas utama
- Gunakan CSS Variables yang sudah didefinisikan di `globals.css`
- Gunakan `cn()` dari `@/lib/utils` untuk conditional classes
- **JANGAN** menggunakan inline styles kecuali benar-benar diperlukan
- Pastikan responsive design: mobile-first approach (`sm:`, `md:`, `lg:`, `xl:`)

### Warna & Design Token

Selalu merujuk ke CSS Variables di `app/globals.css` untuk warna proyek. Tidak boleh hardcode warna. Gunakan variabel yang sudah ada (contoh: `hsl(var(--primary))`, `hsl(var(--background))`).

### Responsiveness

- Mobile-first: Desain untuk mobile terlebih dahulu
- Breakpoint: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Test di semua ukuran layar sebelum menyelesaikan

### Design Mood & Visual Identity

> [!IMPORTANT]
> Seluruh desain website ini WAJIB mengikuti suasana visual berikut. Setiap keputusan desain (layout, warna, animasi, tipografi) harus dinilai berdasarkan prinsip-prinsip ini.

**Suasana Utama: Minimalis Tropis Lembut**
Buatan tangan · Bertenaga surya · Terencana · Tenang · Luas

#### Prinsip Visual

| Prinsip | Penerapan |
|---|---|
| **Minimalis** | Sedikit elemen per section. Banyak ruang kosong (*whitespace*). Jangan pernah menumpuk terlalu banyak elemen. |
| **Tropis** | Warna hangat alami (krem `#f5efe6`, hijau daun `primary`, cokelat kayu). Hindari warna dingin atau neon. |
| **Lembut** | Sudut bulat besar (`rounded-2xl` / `rounded-3xl`). Transisi halus (`duration-700`). Tanpa garis/border yang tegas kecuali aksen tipis. |
| **Buatan Tangan** | Terasa personal dan otentik. Foto asli, bukan stock photo generik. Layout sedikit asimetris lebih baik dari simetris sempurna. |
| **Tenang** | Animasi harus halus dan slow. Hindari animasi yang cepat atau mencolok. Efek scroll-scrub lebih disukai dari animasi sekali-muncul. |
| **Luas** | Padding besar antar section (`py-24` minimum). Gambar diberi ruang napas, tidak menempel satu sama lain. Teks dibuat kolom sempit (`max-w-xl` / `max-w-2xl`) agar tidak terlalu lebar. |

#### Panduan Gambar

- Semua gambar menggunakan **overlay gelap tipis** (`bg-black/10`) untuk kesan sinematik
- Sudut gambar selalu bulat besar (`rounded-2xl` minimum)
- Shadow halus (`shadow-lg` / `shadow-xl`), hindari `shadow-2xl` berlebihan
- Hover: zoom sangat halus (`hover:scale-105`, `duration-700`)
- Gambar tidak boleh berdesakan — beri jarak minimal `gap-4` antar gambar

#### Panduan Tipografi

- Judul: font serif, ukuran besar, tracking lebar
- Body text: font sans-serif, `text-lg`, `leading-relaxed`, rata kiri-kanan (`text-justify`)
- Kutipan/quote: font serif italic dengan aksen `border-l` tipis
- Jarak antar paragraf: rapat (`space-y-1` / `space-y-2`)
- Aksen vertikal (`border-l`) pada kolom teks untuk kesan editorial

#### Panduan Warna

- Background utama: `background` (putih) dan `#f5efe6` (krem hangat)
- Transisi antar section dengan warna berbeda: gunakan **gradient halus** (`h-24 bg-gradient-to-b`)
- Aksen: `primary` (hijau) — hanya untuk elemen kecil (garis, label, highlight)
- Hindari warna kontras tinggi yang mengejutkan mata

#### Panduan Animasi

- Utamakan GSAP ScrollTrigger dengan `scrub: true` untuk efek scroll-linked
- Teks: efek blur-reveal (`opacity: 0.15 + blur(2px)` → `opacity: 1 + blur(0)`) mengikuti scroll
- Gambar: masuk perlahan dari transparan, bukan melompat masuk
- Kecepatan animasi: selalu slow dan smooth. Minimum `duration-500` untuk transisi CSS
- Animasi harus bisa diulang saat scroll naik-turun (bukan `once: true`)

---

## 7. Performance Best Practices

### Images

- Gunakan Next.js `<Image>` component untuk semua gambar
- Selalu sertakan `width`, `height`, dan `alt` attributes
- Gunakan `loading="lazy"` untuk gambar di bawah fold
- Gunakan `priority` untuk gambar hero/above-the-fold
- Format gambar: WebP atau AVIF diutamakan

### Components

- Gunakan `"use client"` HANYA untuk komponen yang membutuhkannya
- Lazy load komponen berat dengan `dynamic()` dari Next.js
- Hindari unnecessary re-renders — gunakan `useMemo`, `useCallback` jika perlu
- Minimalisir client-side JavaScript

### SEO

- Setiap halaman HARUS punya `metadata` export (title, description)
- Gunakan semantic HTML (`<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`)
- Satu `<h1>` per halaman, hierarchy heading yang benar
- Semua gambar HARUS punya `alt` text yang deskriptif

---

## 8. Git & Deployment

- Branch utama: `main`
- Deployment: otomatis via Vercel dari GitHub
- Sebelum push, pastikan:
  - `npm run build` berhasil tanpa error
  - Tidak ada `console.log` yang tertinggal
  - Tidak ada file debug/temporary yang ikut ter-commit
- Commit message format: `<type>: <deskripsi singkat>`
  - `feat:` fitur baru
  - `fix:` perbaikan bug
  - `style:` perubahan styling
  - `refactor:` refactoring kode
  - `docs:` perubahan dokumentasi

---

## 9. Workflow Checklist

Sebelum menyelesaikan setiap task, pastikan:

- [ ] File yang dimodifikasi sudah dibaca terlebih dahulu
- [ ] Semua import valid dan file yang diimport ada
- [ ] Tidak ada dependensi baru tanpa persetujuan user
- [ ] Dokumentasi library dicek via Context7 **secara otomatis** (bukan hanya jika ragu)
- [ ] Responsive design sudah dipertimbangkan
- [ ] Tidak ada hardcoded values (gunakan CSS variables/constants)
- [ ] Kode bersih, tanpa comment yang tidak perlu
- [ ] Build berhasil (`npm run build`)

---

## 10. Hal yang WAJIB Ditanyakan ke User

Jangan berasumsi. Tanyakan jika:

1. Menambahkan library/dependensi baru
2. Mengubah arsitektur atau struktur folder
3. Menghapus fitur atau komponen yang ada
4. Perubahan breaking pada UI/UX
5. Tidak yakin tentang desain, warna, atau konten
6. Membutuhkan API key, environment variable, atau credential
