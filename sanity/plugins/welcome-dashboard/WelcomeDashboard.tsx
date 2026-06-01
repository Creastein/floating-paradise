import React, { useState } from 'react'
import './styles.css'

interface TutorialItem {
  question: string
  steps: string[]
}

const tutorials: TutorialItem[] = [
  {
    question: 'Cara mengisi konten English dan Indonesian',
    steps: [
      'Sebagian besar konten punya field <strong>English</strong> dan <strong>Indonesian</strong>.',
      'English biasanya terbuka lebih dulu. Klik bagian Indonesian untuk membuka field Bahasa Indonesia.',
      'Isi kedua bahasa sebelum publish agar halaman EN dan ID tetap lengkap.',
    ],
  },
  {
    question: 'Cara update Homepage',
    steps: [
      'Buka <strong>Website Pages -> Homepage</strong>.',
      'Edit hero slides, teks section, atau gambar yang tersedia.',
      'Kosongkan gambar hanya jika ingin website memakai gambar default.',
      'Klik <strong>Publish</strong> setelah selesai.',
    ],
  },
  {
    question: 'Cara update Rooms & Bungalows',
    steps: [
      'Buka <strong>Collections -> Rooms & Bungalows</strong>.',
      'Pilih room yang ingin diedit: Sunrise, Sunset, atau Bayside.',
      'Edit description, features, maximum guests, atau photo gallery.',
      'Gallery maksimal 12 foto. Jika kosong, website memakai gambar default.',
      'Jangan ubah slug dan jangan tambah room baru tanpa developer.',
    ],
  },
  {
    question: 'Cara update Explore',
    steps: [
      'Buka <strong>Collections -> Explore</strong>.',
      'Pilih item yang ingin diedit.',
      'Edit title, description, price detail jika field tersedia, atau gallery.',
      'Jangan ubah slug. Jangan tambah item baru tanpa developer.',
      'Klik <strong>Publish</strong> untuk menyimpan perubahan.',
    ],
  },
  {
    question: 'Cara update Yoga Retreat',
    steps: [
      'Buka <strong>Website Pages -> Yoga Retreat</strong>.',
      'Edit hero, teks retreat, package details, harga, atau gambar yang tersedia.',
      'Isi field English dan Indonesian jika keduanya tersedia.',
      'Untuk package baru atau perubahan layout besar, konsultasikan dengan developer dulu.',
    ],
  },
  {
    question: 'Cara update About Us',
    steps: [
      'Buka <strong>Website Pages -> About Us</strong>.',
      'Yang bisa diedit: hero image, founder story, founders photo, dan mission statement.',
      'Bagian lain seperti values, Keep It Green, Kejora, dan CTA masih mengikuti default website.',
      'Klik <strong>Publish</strong> setelah selesai.',
    ],
  },
  {
    question: 'Cara update Site Settings',
    steps: [
      'Buka <strong>Site Settings</strong> di sidebar.',
      'Edit logo, WhatsApp, social links, atau informasi kontak global.',
      'Karena dipakai di banyak halaman, cek ulang sebelum publish.',
    ],
  },
  {
    question: 'Cara upload atau ganti gambar',
    steps: [
      'Klik field gambar yang ingin diganti.',
      'Upload file baru atau drag and drop ke field tersebut.',
      'Gunakan gambar landscape yang jelas, idealnya JPG atau WEBP, lebar 1920px atau lebih, dan ukuran file tidak terlalu besar.',
      'Tunggu upload selesai, lalu klik <strong>Publish</strong>.',
    ],
  },
  {
    question: 'Cara update booking Tripla',
    steps: [
      'Booking Tripla tidak diedit dari CMS.',
      'Room booking memakai official Tripla room IDs yang tersimpan di code.',
      'Jika ID Tripla berubah, minta developer mengubah integrasi agar aman.',
    ],
  },
]

const quickLinks = [
  { label: 'Site Settings', hint: 'Logo, contacts, social links', target: 'siteSettings' },
  { label: 'Homepage', hint: 'Hero slides and homepage sections', target: 'homepage' },
  { label: 'About Us', hint: 'Founder story, mission, images', target: 'aboutPage' },
  { label: 'Yoga Retreat', hint: 'Packages, details, hero', target: 'yogaRetreat' },
  { label: 'Rooms & Bungalows', hint: 'Descriptions, features, gallery', target: 'bungalow' },
  { label: 'Explore', hint: 'Tours and experiences', target: 'activity' },
]

export function WelcomeDashboard() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="wd-root">
      <header className="wd-hero">
        <div className="wd-hero-inner">
          <div className="wd-hero-badge">Content Management Portal</div>
          <h1 className="wd-hero-title">
            Floating Paradise <span className="wd-brand">CMS</span>
          </h1>
          <p className="wd-hero-subtitle">
            Panduan singkat untuk mengubah konten website dengan aman.
            <br />
            Edit konten yang tersedia, publish, lalu cek hasilnya di website.
          </p>
        </div>
      </header>

      <div className="wd-body">
        <div className="wd-alert wd-alert--warning">
          <div className="wd-alert-icon">!</div>
          <div className="wd-alert-content">
            <strong>Penting Sebelum Edit</strong>
            <ul>
              <li><strong>Jangan edit slug.</strong> Slug dipakai sebagai identitas URL dan koneksi ke code.</li>
              <li><strong>Jangan tambah Rooms, Explore items, atau kota transfer baru</strong> tanpa developer.</li>
              <li><strong>Jangan edit booking Tripla dari CMS.</strong> Integrasi booking ditangani di code.</li>
              <li>Selalu klik <strong>Publish</strong> setelah selesai edit.</li>
            </ul>
          </div>
        </div>

        <div className="wd-alert wd-alert--success">
          <div className="wd-alert-icon">OK</div>
          <div className="wd-alert-content">
            <strong>Yang Aman Diedit</strong>
            <ul>
              <li>Teks konten: title, subtitle, description, body text</li>
              <li>Gambar: hero image, gallery, room photos, section images</li>
              <li>Harga dan detail harga pada field yang tersedia</li>
              <li>Contact info, WhatsApp, dan social media links</li>
            </ul>
          </div>
        </div>

        <section className="wd-section">
          <h2 className="wd-section-title">Quick Access</h2>
          <p className="wd-section-hint">Gunakan sidebar kiri untuk membuka document. Link di bawah hanya ringkasan lokasi konten.</p>
          <div className="wd-quick-grid">
            {quickLinks.map((link) => (
              <a href={`/studio/structure/${link.target}`} key={link.label} className="wd-quick-card" style={{ textDecoration: 'none' }}>
                <div className="wd-quick-info">
                  <div className="wd-quick-label">{link.label}</div>
                  <div className="wd-quick-hint">{link.hint}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="wd-section">
          <h2 className="wd-section-title">Tutorial Singkat</h2>
          <p className="wd-section-hint">Klik pertanyaan untuk melihat langkah-langkahnya.</p>
          <div className="wd-accordion">
            {tutorials.map((item, index) => (
              <div
                key={index}
                className={`wd-accordion-item ${openIndex === index ? 'wd-accordion-item--open' : ''}`}
              >
                <button
                  className="wd-accordion-trigger"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{item.question}</span>
                  <span className="wd-accordion-chevron">{openIndex === index ? '^' : 'v'}</span>
                </button>
                {openIndex === index && (
                  <div className="wd-accordion-body">
                    <ol className="wd-steps">
                      {item.steps.map((step, si) => (
                        <li key={si} dangerouslySetInnerHTML={{ __html: step }} />
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <footer className="wd-footer">
          <p>
            Butuh perubahan struktur, item baru, atau booking integration? Hubungi developer.
            <br />
            <span className="wd-footer-muted">Floating Paradise CMS - Powered by Sanity</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
