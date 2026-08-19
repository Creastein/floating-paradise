# Product Requirements Document (PRD)

## Floating Paradise — Website & CMS

| Properti         | Detail                                                       |
| ---------------- | ------------------------------------------------------------ |
| **Nama Produk**  | Floating Paradise Website                                    |
| **Domain**       | [floatingparadise.id](https://floatingparadise.id)           |
| **Versi**        | 1.0.0                                                        |
| **Tanggal**      | 10 Juni 2026                                                 |
| **Status**       | Production — Live                                            |
| **Tim**          | Astrid & Tono (Owner), Developer Team                        |
| **Repository**   | `floating-paradise-website-1`                                |

---

## Daftar Isi

1. [Ringkasan Produk](#1-ringkasan-produk)
2. [Visi & Misi Produk](#2-visi--misi-produk)
3. [Target Pengguna](#3-target-pengguna)
4. [Teknologi & Arsitektur](#4-teknologi--arsitektur)
5. [Arsitektur Informasi (Sitemap)](#5-arsitektur-informasi-sitemap)
6. [Spesifikasi Fitur per Halaman](#6-spesifikasi-fitur-per-halaman)
7. [Content Management System (Sanity CMS)](#7-content-management-system-sanity-cms)
8. [Internasionalisasi (i18n)](#8-internasionalisasi-i18n)
9. [Integrasi Pihak Ketiga](#9-integrasi-pihak-ketiga)
10. [Desain & Identitas Visual](#10-desain--identitas-visual)
11. [SEO & Structured Data](#11-seo--structured-data)
12. [Performa & Optimasi](#12-performa--optimasi)
13. [Keamanan](#13-keamanan)
14. [Deployment & Infrastructure](#14-deployment--infrastructure)
15. [Analytics & Tracking](#15-analytics--tracking)
16. [Alur Pengguna (User Flows)](#16-alur-pengguna-user-flows)
17. [Non-Functional Requirements](#17-non-functional-requirements)
18. [Batasan & Kendala](#18-batasan--kendala)
19. [Roadmap & Rencana Pengembangan](#19-roadmap--rencana-pengembangan)
20. [Appendix](#20-appendix)

---

## 1. Ringkasan Produk

**Floating Paradise** adalah website marketing & booking untuk eco-resort boutique bertenaga surya yang terletak di atas laut di Karimunjawa, Jawa Tengah, Indonesia. Properti ini menawarkan 3 bungalow overwater (Sunrise, Sunset, Bayside) beserta berbagai aktivitas wisata dan program yoga retreat.

Website berfungsi sebagai:
- **Saluran pemasaran utama** — showcase visual premium untuk menarik tamu internasional dan domestik
- **Platform booking langsung** — integrasi dengan Tripla booking engine untuk reservasi tanpa perantara OTA
- **Hub informasi** — panduan lengkap cara menuju lokasi, aktivitas tersedia, harga, dan FAQ
- **Portal CMS** — Sanity Studio tertanam di `/studio` untuk pengelolaan konten oleh tim non-teknis

### Proposisi Nilai Unik

| Keunggulan                  | Deskripsi                                                                |
| --------------------------- | ------------------------------------------------------------------------ |
| Off-Grid & Solar-Powered    | 100% tenaga surya, tanpa koneksi listrik PLN                             |
| Overwater Bungalows         | Bungalow kayu buatan tangan di atas laut dengan akses langsung ke reef   |
| Boutique Scale              | Hanya 3 kamar — pengalaman eksklusif dan privat                          |
| Direct Reef Access          | Snorkeling langsung dari bungalow                                        |
| Yoga Retreat                | Program "The Art of Floating" — retreat yoga mingguan dengan instruktur   |
| Eco-Conscious               | Arsitektur buatan tangan, bahan lokal, prinsip sustainability            |

---

## 2. Visi & Misi Produk

### Visi
Menjadi representasi digital terbaik untuk eco-resort boutique di Indonesia — memadukan estetika sinematik, kemudahan booking, dan storytelling autentik yang membuat calon tamu merasakan ketenangan pulau sebelum mereka tiba.

### Misi
1. **Memikat** — Desain visual premium yang menampilkan keindahan lokasi secara sinematik
2. **Menginformasikan** — Menyediakan semua informasi yang dibutuhkan tamu untuk merencanakan perjalanan
3. **Mengkonversi** — Memfasilitasi booking langsung dengan harga lebih baik dari OTA
4. **Memberdayakan** — Memberikan tim non-teknis kemampuan mengelola konten melalui CMS yang intuitif

### Goals & KPIs

| Goal                               | KPI                                              | Target           |
| ---------------------------------- | ------------------------------------------------ | ---------------- |
| Meningkatkan direct booking        | % booking via Tripla vs OTA                      | > 40%            |
| Memperluas jangkauan internasional | Traffic dari luar Indonesia                       | > 30% total      |
| Meningkatkan konversi              | Click-through rate pada CTA booking               | > 5%             |
| SEO organik                        | Peringkat untuk "Karimunjawa eco resort"          | Top 5 Google     |
| Engagement website                 | Average session duration                          | > 2 menit        |
| Performa website                   | Lighthouse Performance Score                      | > 90             |

---

## 3. Target Pengguna

### Persona Utama

#### 🌏 Persona 1: Traveler Internasional
- **Demografi:** 25-45 tahun, Eropa/Australia/Asia
- **Motivasi:** Mencari pengalaman unik, eco-conscious, off-the-beaten-path
- **Bahasa:** Inggris
- **Perilaku:** Riset via Google/Instagram, membandingkan di Booking.com/Airbnb, value authenticity
- **Pain Point:** Informasi aksesibilitas ke Karimunjawa terbatas dalam bahasa Inggris

#### 🇮🇩 Persona 2: Wisatawan Domestik Premium
- **Demografi:** 25-40 tahun, kota besar Indonesia (Jakarta, Surabaya, Semarang)
- **Motivasi:** Staycation unik, Instagram-worthy, escape dari kota
- **Bahasa:** Bahasa Indonesia
- **Perilaku:** Browsing via mobile, sering via Instagram discovery
- **Pain Point:** Ingin kepastian harga dan cara sampai lokasi

#### 🧘 Persona 3: Yoga Enthusiast
- **Demografi:** 28-50 tahun, internasional
- **Motivasi:** Retreat yoga di lokasi eksotis dan tenang
- **Bahasa:** Inggris/Indonesia
- **Perilaku:** Mengikuti komunitas yoga, interested in holistic wellness
- **Pain Point:** Membutuhkan detail jadwal, instruktur, dan paket harga yang jelas

### Persona Sekunder

| Persona                     | Kebutuhan Utama                                 |
| --------------------------- | ----------------------------------------------- |
| Content Manager (CMS User)  | Mengedit konten, gambar, harga via Sanity Studio |
| Developer                   | Maintenance, deployment, feature development     |

---

## 4. Teknologi & Arsitektur

### Tech Stack

| Layer              | Teknologi                                      | Versi    |
| ------------------ | ---------------------------------------------- | -------- |
| **Framework**      | Next.js (App Router, Turbopack)                | 16.1.6   |
| **UI Library**     | React                                          | 19.2.4   |
| **Bahasa**         | TypeScript (strict mode)                       | 5.7.3    |
| **Styling**        | Tailwind CSS + CSS Variables                   | 4.2.0    |
| **UI Components**  | shadcn/ui (New York) + Radix UI primitives     | Latest   |
| **Animasi**        | GSAP (ScrollTrigger) + Framer Motion           | 3.14.2+  |
| **Icons**          | Lucide React + Phosphor Icons                  | Latest   |
| **CMS**            | Sanity (hosted, headless CMS)                  | 5.18.0   |
| **CMS Integration**| next-sanity                                    | 12.1.6   |
| **Image CDN**      | Sanity CDN + Next.js Image Optimization        | —        |
| **Booking Engine** | Tripla (embedded widget + SDK)                 | —        |
| **Analytics**      | Vercel Analytics + Google Analytics 4          | —        |
| **Hosting**        | Vercel (Edge Network)                          | —        |
| **Fonts**          | Google Fonts: Lato (sans) + Cormorant Garamond (serif) | — |

### Arsitektur Diagram

```
┌─────────────────────────────────────────────────────────┐
│                      VERCEL EDGE                         │
│  ┌───────────────────────────────────────────────────┐   │
│  │              Next.js 16 App Router                │   │
│  │  ┌──────────┐  ┌──────────┐  ┌────────────────┐  │   │
│  │  │ (site)   │  │ [locale] │  │    /studio      │  │   │
│  │  │ EN pages │  │ ID pages │  │  Sanity Studio  │  │   │
│  │  └──────────┘  └──────────┘  └────────────────┘  │   │
│  │  ┌──────────┐  ┌──────────┐  ┌────────────────┐  │   │
│  │  │  /api/   │  │  lib/    │  │  components/   │  │   │
│  │  │revalidate│  │ fetchers │  │   UI + sections│  │   │
│  │  └──────────┘  └──────────┘  └────────────────┘  │   │
│  └───────────────────────────────────────────────────┘   │
└────────────┬────────────────────────────┬────────────────┘
             │                            │
     ┌───────▼───────┐           ┌────────▼────────┐
     │  Sanity CMS   │           │  Tripla Booking │
     │  (Headless)   │           │    Engine        │
     │  ─ Schemas    │           │  ─ Search Widget │
     │  ─ CDN Images │           │  ─ Booking Modal │
     │  ─ Webhooks   │           │  ─ Room Types    │
     └───────────────┘           └─────────────────┘
             │
     ┌───────▼───────┐
     │   Sanity CDN  │
     │  (Image Host) │
     └───────────────┘
```

### Struktur Folder

```
floating-paradise-website-1/
├── app/                          # Next.js App Router
│   ├── (site)/                   # Grup rute — halaman EN (default)
│   │   ├── layout.tsx            # Root layout (fonts, analytics, Tripla SDK)
│   │   ├── page.tsx              # Homepage
│   │   ├── about/                # /about
│   │   ├── bungalows/            # /bungalows
│   │   ├── contact/              # /contact
│   │   ├── explore/              # /explore
│   │   ├── faq/                  # /faq
│   │   ├── getting-here/         # /getting-here
│   │   └── yoga-retreat/         # /yoga-retreat
│   ├── [locale]/                 # Grup rute — halaman dengan locale (en/id)
│   │   └── (site)/               # Mirror dari (site) dengan dukungan locale
│   ├── api/revalidate/           # Webhook endpoint untuk CMS revalidation
│   ├── studio/                   # Sanity Studio (mounted di /studio)
│   ├── globals.css               # CSS global, tokens, Tailwind
│   ├── layout.tsx                # Root layout wrapper
│   ├── robots.ts                 # Robots.txt generator
│   └── sitemap.ts                # Dynamic XML sitemap
├── components/                   # Komponen React reusable
│   ├── ui/                       # shadcn/ui primitives
│   ├── icons/                    # Custom icon components
│   ├── navigation.tsx            # Navbar global
│   ├── footer.tsx                # Footer global
│   ├── hero-section.tsx          # Hero section homepage
│   ├── about-us-section.tsx      # About section homepage
│   ├── explore-section.tsx       # Explore section homepage
│   ├── bungalows-section.tsx     # Bungalows section homepage
│   ├── yoga-retreat-section.tsx  # Yoga retreat teaser homepage
│   ├── faq-client.tsx            # FAQ accordion
│   ├── floating-whatsapp.tsx     # Floating WhatsApp button
│   ├── schema-org.tsx            # Structured data component
│   ├── review-badges.tsx         # Review trust badges
│   ├── lightbox.tsx              # Image lightbox/gallery
│   └── ...                       # Komponen section lainnya
├── data/                         # Data statis fallback
│   ├── about-data.ts             # Fallback data halaman About
│   └── getting-here-data.ts      # Fallback data Getting Here
├── hooks/                        # Custom React hooks
├── lib/                          # Utilitas & library helpers
│   ├── i18n/                     # Internationalization
│   │   ├── language-context.tsx  # React context untuk bahasa
│   │   ├── seo.ts                # SEO metadata generator per locale
│   │   └── translations/         # JSON translation files (en, id)
│   ├── sanity.client.ts          # Sanity client configuration
│   ├── sanity.fetch.ts           # Fetch helpers dengan fallback
│   ├── sanity.image.ts           # Image URL builder
│   ├── sanity.queries.ts         # GROQ queries
│   ├── tripla.ts                 # Tripla booking constants & helpers
│   ├── constants.ts              # Global constants (WhatsApp, URLs)
│   ├── gsap-init.ts              # GSAP initialization
│   ├── analytics.ts              # Analytics helpers
│   └── utils.ts                  # Utility functions (cn, dll)
├── sanity/                       # Sanity CMS
│   ├── schemas/                  # Document schemas
│   └── plugins/                  # Custom Studio plugins
├── scripts/                      # Migration & seed scripts
├── public/                       # Aset statis
├── docs/                         # Dokumentasi internal
├── sanity.config.ts              # Sanity Studio config
├── sanity.cli.ts                 # Sanity CLI config
├── next.config.mjs               # Next.js config + CSP + redirects
├── components.json               # shadcn/ui config
├── tsconfig.json                 # TypeScript config
└── package.json                  # Dependencies & scripts
```

---

## 5. Arsitektur Informasi (Sitemap)

### Peta Halaman

```
floatingparadise.id
│
├── /en (atau /)                     → Homepage (default: English)
├── /id                              → Homepage (Indonesian)
│
├── /en/bungalows                    → Halaman Bungalows
├── /id/bungalows                    → Halaman Bungalows (ID)
│
├── /en/explore                      → Halaman Explore (Aktivitas)
├── /id/explore                      → Halaman Explore (ID)
│
├── /en/yoga-retreat                 → Halaman Yoga Retreat
├── /id/yoga-retreat                 → Halaman Yoga Retreat (ID)
│
├── /en/getting-here                 → Halaman Cara Menuju Lokasi
├── /id/getting-here                 → Halaman Cara Menuju Lokasi (ID)
│
├── /en/about                        → Halaman Tentang Kami
├── /id/about                        → Halaman Tentang Kami (ID)
│
├── /en/contact                      → Halaman Kontak
├── /id/contact                      → Halaman Kontak (ID)
│
├── /en/faq                          → Halaman FAQ
├── /id/faq                          → Halaman FAQ (ID)
│
├── /studio                          → Sanity Studio (CMS Dashboard)
├── /sitemap.xml                     → Sitemap XML dinamis
├── /robots.txt                      → Robots.txt
└── /api/revalidate                  → Webhook endpoint (internal)
```

### Routing & Redirect Rules

| Dari           | Ke             | Tipe      |
| -------------- | -------------- | --------- |
| `/`            | `/en`          | Permanent |
| `/bungalows`   | `/en/bungalows`| Permanent |
| `/explore`     | `/en/explore`  | Permanent |
| `/yoga-retreat`| `/en/yoga-retreat` | Permanent |
| `/getting-here`| `/en/getting-here` | Permanent |
| `/about`       | `/en/about`    | Permanent |
| `/contact`     | `/en/contact`  | Permanent |
| `/faq`         | `/en/faq`      | Permanent |

---

## 6. Spesifikasi Fitur per Halaman

### 6.1 Homepage (`/en`, `/id`)

**Tujuan:** Landing page utama yang memikat calon tamu dan mengarahkan ke booking atau halaman detail.

#### Sections (urutan dari atas ke bawah):

| # | Section             | Deskripsi                                                                                        | Sumber Data      |
|---|---------------------|--------------------------------------------------------------------------------------------------|------------------|
| 1 | **Navigation**      | Navbar transparan dengan logo, menu links, language switcher, CTA booking                        | Site Settings    |
| 2 | **Hero**            | Full-screen background image dengan judul besar, subtitle, dan CTA "Book Your Stay"              | Homepage CMS     |
| 3 | **About Us / Welcome** | Pengenalan singkat FP dengan 3-image gallery wall dan rich text                               | Homepage CMS     |
| 4 | **Gradient Transition** | Transisi warna smooth putih → krem                                                           | Hardcoded        |
| 5 | **Explore (Eco & Solar)** | Showcase "Built by Hand, Powered by Sun" — filosofi eco-friendly                            | Homepage CMS     |
| 6 | **Gradient Transition** | Transisi krem → putih                                                                        | Hardcoded        |
| 7 | **Bungalows**       | 3 bungalow cards (Sunrise, Sunset, Bayside) dengan gallery, fitur, dan CTA booking per kamar     | Homepage CMS + Bungalows CMS |
| 8 | **Yoga Retreat**    | Teaser section yoga retreat dengan gambar dan CTA ke halaman detail                               | Hardcoded + CMS  |
| 9 | **Review Badges**   | Trust badges dari Booking.com, Airbnb, Google Reviews                                            | Hardcoded        |
| 10| **Footer**          | Informasi kontak, social links, navigasi sekunder                                                | Site Settings    |

#### Structured Data (JSON-LD):
- `LodgingBusiness` — info properti, rating, amenities
- `WebSite` — nama, URL, bahasa
- `Organization` — logo, kontak, social links

#### Fitur Interaktif:
- GSAP ScrollTrigger untuk animasi scroll-linked (blur-reveal text, fade-in images)
- Floating WhatsApp button (sticky, pojok kanan bawah)
- Tripla booking widget (hidden search bar, modal on demand)
- Language switcher (EN ↔ ID)
- Carousel/slider untuk bungalow gallery

---

### 6.2 Bungalows (`/en/bungalows`, `/id/bungalows`)

**Tujuan:** Menampilkan detail lengkap 3 tipe bungalow untuk membantu tamu memilih dan melakukan booking.

#### Konten Utama:

| Bungalow  | ID Tripla | Kapasitas  | Kisaran Harga OTA (Rp)     |
| --------- | --------- | ---------- | -------------------------- |
| Sunrise   | 36939     | Varies     | 1,125,000 – 1,850,000      |
| Sunset    | 36940     | Varies     | 990,000 – 1,620,000        |
| Bayside   | 36941     | Varies     | 1,900,000 – 2,600,000      |

#### Fitur per Bungalow:
- Nama bungalow
- Rich text description (EN/ID)
- Feature list (bullet points)
- Photo gallery (max 12 foto, slider/lightbox)
- Kapasitas tamu maksimum
- CTA "Book This Room" → membuka Tripla modal dengan room-specific filter

#### Data Source:
- **CMS:** `bungalow` documents (name, slug, description, description_id, features, features_id, gallery, maxGuests)
- **CMS:** `bungalowsPage` document (page-level intro content)
- **Code:** Tripla room IDs dan booking URLs

---

### 6.3 Explore (`/en/explore`, `/id/explore`)

**Tujuan:** Menampilkan semua aktivitas dan pengalaman yang tersedia di Floating Paradise.

#### Explore Items (Activity Documents):

| Item                      | Slug            | Gallery Max | Bookable via WA |
| ------------------------- | --------------- | ----------- | --------------- |
| Private Eco Boat Tour     | `boat-tour`     | 8           | ✅              |
| Open Air Sunset Yoga      | `sunset-yoga`   | 8           | ❌              |
| Kayak, Lunch & Chill      | `kayaking`      | 6           | ✅              |
| Trekking Nyamplungan      | `trekking`      | 5           | ✅              |
| Tastes of Paradise         | `cuisine`       | 5           | ❌              |
| Turtle Sanctuary          | `turtles`       | 4           | ❌              |
| Floating Merchandise      | `merchandise`   | 1           | ❌              |

#### Fitur per Activity:
- Hero image
- Rich text description (EN/ID)
- Photo gallery dengan limit per item
- CTA WhatsApp booking (untuk aktivitas bookable)
- Custom WhatsApp message per activity
- Price detail (khusus merchandise)

#### Data Source:
- **CMS:** `activity` documents
- **Code:** Hardcoded fallback text dan gambar jika CMS kosong

---

### 6.4 Yoga Retreat (`/en/yoga-retreat`, `/id/yoga-retreat`)

**Tujuan:** Halaman dedicated untuk program yoga retreat "The Art of Floating".

#### Sections:

| Section            | Konten                                                        |
| ------------------ | ------------------------------------------------------------- |
| Hero               | Background image + nama retreat + tanggal & lokasi            |
| Overview           | Rich text penjelasan retreat                                  |
| Gallery            | Auto-slideshow (3-10 gambar)                                  |
| Facilitator        | Bio Astrid (instruktur), foto, dan credentials                |
| Guest Reviews      | Testimonial tamu yoga sebelumnya                              |
| Pricing            | Tabel harga per bungalow, per tipe (Private/Shared/Couple)    |
| Policies           | Cancellation policy                                           |
| CTA Booking        | WhatsApp link ke Astrid untuk inquiry                         |

#### Pricing Structure:

| Bungalow | Private       | Shared Double | Couple         |
| -------- | ------------- | ------------- | -------------- |
| Sunrise  | ✅ (1 pax)    | ✅ (pp)       | ✅ (pp)        |
| Sunset   | ✅ (1 pax)    | ✅ (pp)       | ✅ (pp)        |
| Bayside  | — | Shared Separate (pp) | Shared Double (pp) |

#### Data Source:
- **CMS:** `yogaRetreat` document (semua field)
- **Code:** Nama retreat "The Art of Floating" (tidak diterjemahkan)

---

### 6.5 Getting Here (`/en/getting-here`, `/id/getting-here`)

**Tujuan:** Panduan lengkap cara menuju Karimunjawa dan Floating Paradise.

#### Konten:
- Panduan rute dari berbagai kota asal
- Informasi transportasi (penerbangan, kapal, speed boat)
- Jadwal dan estimasi waktu
- Tips perjalanan
- Peta lokasi

#### Data Source:
- **CMS:** `gettingHerePage` document (full page content, bilingual)
- **Fallback:** `data/getting-here-data.ts`

---

### 6.6 About (`/en/about`, `/id/about`)

**Tujuan:** Menceritakan kisah Floating Paradise, pendiri, dan filosofi eco.

#### Konten:
- Sejarah pendirian (sejak 2018)
- Profil pendiri: Astrid & Tono
- Filosofi sustainability dan eco-conscious
- Foto pendiri
- Kisah Kejora (cerita personal)

#### Structured Data:
- `Organization` — founder info, founding date
- `BreadcrumbList` — navigasi breadcrumb

#### Data Source:
- **CMS:** `aboutPage` document (rich text bilingual, founders photo)
- **Fallback:** `data/about-data.ts`

---

### 6.7 Contact (`/en/contact`, `/id/contact`)

**Tujuan:** Menyediakan semua channel komunikasi kepada calon tamu.

#### Konten:
- Nomor WhatsApp utama: +62 822 2694 5510
- Email: floatingparadise.legonlele@gmail.com
- Alamat fisik: Jl. Kapuran, Legon Lele, Karimunjawa
- Social media links
- Formulir kontak (opsional)

#### Data Source:
- **CMS:** `siteSettings` (whatsApp, email, address, social links)
- **Code:** Constants fallback

---

### 6.8 FAQ (`/en/faq`, `/id/faq`)

**Tujuan:** Menjawab pertanyaan yang sering diajukan calon tamu.

#### Kategori FAQ:

| Kategori          | Field CMS              |
| ----------------- | ---------------------- |
| Accommodation     | `accommodationFaqs`    |
| Food & Dining     | `foodFaqs`             |
| Booking           | `bookingFaqs`          |
| Getting Here      | `gettingHereFaqs`      |
| Activities        | `activitiesFaqs`       |

#### Fitur:
- Accordion UI (Radix UI Accordion)
- Bilingual (EN/ID)
- Grouped by category

#### Data Source:
- **CMS:** `faqPage` document

---

### 6.9 Sanity Studio (`/studio`)

**Tujuan:** Dashboard CMS untuk tim non-teknis mengelola konten website.

#### Fitur:
- Welcome dashboard (custom plugin)
- Document editor untuk semua content types
- Image upload dan management
- Preview bilingual (EN/ID fieldsets)
- Grouped fields untuk organisasi yang rapi

#### Akses:
- URL: `floatingparadise.id/studio`
- Autentikasi: Sanity native auth

---

## 7. Content Management System (Sanity CMS)

### 7.1 Schema Documents

| Schema            | Type         | Singleton? | Deskripsi                                    |
| ----------------- | ------------ | ---------- | -------------------------------------------- |
| `siteSettings`    | Document     | Ya         | Logo, kontak, social links                   |
| `homepage`        | Document     | Ya         | Semua section homepage                       |
| `bungalowsPage`   | Document     | Ya         | Intro halaman bungalows                      |
| `bungalow`        | Document     | Tidak      | Per-bungalow detail (3 dokumen)              |
| `activity`        | Document     | Tidak      | Per-activity/explore item (7 dokumen)        |
| `yogaRetreat`     | Document     | Ya         | Semua konten yoga retreat                    |
| `gettingHerePage` | Document     | Ya         | Panduan cara menuju lokasi                   |
| `aboutPage`       | Document     | Ya         | Halaman tentang kami                         |
| `faqPage`         | Document     | Ya         | FAQ per kategori                             |

### 7.2 Pola Bilingual

Semua konten teks menggunakan pola **dual-field** untuk mendukung bilingual:

```
fieldName        → English content
fieldName_id     → Indonesian content
```

Field dikelompokkan dalam **fieldsets** dengan label bendera:
- 🇬🇧 English Content (default expanded)
- 🇮🇩 Indonesian Content (default collapsed)

### 7.3 Aturan CMS

#### ✅ Aman untuk Diedit (tanpa developer):
- Teks, judul, deskripsi, body copy
- Gambar dan galeri
- Harga dan detail harga
- Informasi kontak, WhatsApp, social links
- FAQ items dan kategori
- Review/testimonial yoga

#### ⚠️ Memerlukan Review Developer:
- Slug (URL identifier)
- Menambah bungalow atau aktivitas baru
- Menambah kota transfer baru di Getting Here
- Booking integration atau Tripla room IDs
- Perubahan layout atau navigasi besar

### 7.4 Fallback Safety

Website didesain **fallback-safe**: jika field CMS kosong, website menggunakan konten default dari kode. Ini memastikan:
- Website tidak pernah rusak karena field kosong
- Tim CMS bisa menghapus konten tanpa risiko error
- Deployment tetap aman meskipun CMS belum di-populate

### 7.5 Webhook Revalidation

```
POST https://floatingparadise.id/api/revalidate?secret=<SANITY_REVALIDATE_SECRET>
```

| Konfigurasi    | Nilai                                       |
| -------------- | ------------------------------------------- |
| Dataset        | `production`                                |
| Trigger        | create, update, publish                     |
| Projection     | `_type`, `_id`, `slug`                      |
| Revalidation   | ISR — 1 jam (3600 detik) + on-demand webhook|

Endpoint memetakan tipe dokumen Sanity ke halaman yang terpengaruh dan memanggil `revalidatePath` untuk rute-rute tersebut.

---

## 8. Internasionalisasi (i18n)

### 8.1 Bahasa yang Didukung

| Kode | Bahasa             | Status   | Routing         |
| ---- | ------------------ | -------- | --------------- |
| `en` | English            | Default  | `/en/...`       |
| `id` | Bahasa Indonesia   | Aktif    | `/id/...`       |

### 8.2 Implementasi

- **Routing:** URL-based locale (`/en/bungalows`, `/id/bungalows`)
- **CMS Content:** Dual fields (`heroTitle` / `heroTitle_id`)
- **UI Strings:** JSON translation files (`translations/en.json`, `translations/id.json`)
- **SEO:** Per-locale metadata dengan `hreflang` tags
- **Sitemap:** Entri terpisah per locale dengan `alternates`
- **Language Switcher:** UI component di navbar
- **Context:** `LanguageProvider` React context

### 8.3 SEO per Locale

Setiap halaman menghasilkan metadata lengkap per locale:
- Title tag
- Meta description
- Keywords
- OpenGraph (locale-specific)
- Twitter cards
- Canonical URL (locale-aware)
- Hreflang alternates (`en`, `id`, `x-default`)

---

## 9. Integrasi Pihak Ketiga

### 9.1 Tripla Booking Engine

| Properti             | Nilai                                          |
| -------------------- | ---------------------------------------------- |
| Tripla Code          | `019c5054-aa76-72af-8207-e3dd1c280fa3`         |
| Facility ID          | `8558`                                         |
| SDK URL              | `https://tripla.jp/sdk/javascript/tripla.min.js`|
| Loading Strategy     | `lazyOnload` (non-blocking)                    |

#### Room Type IDs:

| Bungalow | Tripla Room ID |
| -------- | -------------- |
| Sunrise  | `36939`        |
| Sunset   | `36940`        |
| Bayside  | `36941`        |

#### Booking URLs:
- **Semua kamar:** `https://triplabot-production.tripla.ai/booking/result?code=<TRIPLA_CODE>`
- **Per kamar:** `...&room_type_ids[]=<ROOM_ID>`
- **Extras:** `...&type=extra_services`

#### Strategi Diskon:

| Level                   | Mekanisme                                | Discount |
| ----------------------- | ---------------------------------------- | -------- |
| Direct Booking (Tripla) | Otomatis di Tripla dashboard             | 10% vs OTA |
| Local Bank Transfer     | Promo code `LOKAL10` (offline/WA only)   | +10% tambahan |
| **Total vs OTA**        | —                                        | **~20%** |

#### Implementasi Teknis:
- Search bar Tripla di-hide secara agresif via MutationObserver + shadow DOM injection
- Booking modal dipicu via `window.__openTriplaBooking(roomId)`
- Room ID injection ke iframe URL via `HTMLIFrameElement.prototype.src` interception
- Auto-deactivate setelah 2 menit timeout
- Kompatibel dengan client-side navigation (popstate, Navigation API)

### 9.2 WhatsApp Business

| Fungsi                    | Nomor                  | Display              |
| ------------------------- | ---------------------- | -------------------- |
| General Inquiries         | `6282226945510`        | +62 822 2694 5510    |
| Yoga Retreat (Astrid)     | `6282226945510`        | +62 822 2694 5510    |
| Activity Booking          | Per-activity CMS field | Varies               |

- Floating WhatsApp button (sticky) di semua halaman
- Pre-filled messages per context
- Helper: `getWhatsAppLink(number, message)`

### 9.3 Google Analytics 4

| Properti | Nilai              |
| -------- | ------------------ |
| GA ID    | `G-7JZWJ5455X`     |
| Integrasi| `@next/third-parties/google` |

### 9.4 Vercel Analytics

- Built-in Web Vitals tracking
- Automatic page view tracking
- Package: `@vercel/analytics`

---

## 10. Desain & Identitas Visual

### 10.1 Design Mood

**Minimalis Tropis Lembut**
> Buatan tangan · Bertenaga surya · Terencana · Tenang · Luas

### 10.2 Prinsip Visual

| Prinsip       | Penerapan                                                                  |
| ------------- | -------------------------------------------------------------------------- |
| **Minimalis** | Sedikit elemen per section. Banyak whitespace. Tidak menumpuk elemen.      |
| **Tropis**    | Warna hangat alami: krem `#f5efe6`, hijau daun (primary), cokelat kayu.   |
| **Lembut**    | Sudut bulat besar (`rounded-2xl`/`rounded-3xl`). Transisi halus (`duration-700`). |
| **Buatan Tangan** | Personal dan otentik. Foto asli. Layout sedikit asimetris.            |
| **Tenang**    | Animasi halus dan slow. Efek scroll-scrub. Hindari animasi cepat.          |
| **Luas**      | Padding besar (`py-24` minimum). Teks kolom sempit (`max-w-xl`/`max-w-2xl`). |

### 10.3 Tipografi

| Elemen      | Font                  | Style                                   |
| ----------- | --------------------- | --------------------------------------- |
| Headings    | Cormorant Garamond    | Serif, ukuran besar, tracking lebar     |
| Body Text   | Lato                  | Sans-serif, `text-lg`, `leading-relaxed`|
| Quotes      | Cormorant Garamond    | Italic, dengan `border-l` tipis         |

### 10.4 Palet Warna

| Elemen                | Warna                | Penggunaan                            |
| --------------------- | -------------------- | ------------------------------------- |
| Background Utama      | `background` (putih) | Section default                       |
| Background Hangat     | `#f5efe6` (krem)     | Section alternating                   |
| Primary               | Hijau daun           | Aksen: garis, label, highlight        |
| Transisi Section      | Gradient halus       | `h-24 bg-gradient-to-b`              |
| Image Overlay         | `bg-black/10`        | Kesan sinematik pada gambar           |

### 10.5 Panduan Gambar

- Overlay gelap tipis (`bg-black/10`)
- Sudut bulat besar (`rounded-2xl` minimum)
- Shadow halus (`shadow-lg`/`shadow-xl`)
- Hover zoom: `hover:scale-105`, `duration-700`
- Jarak minimal `gap-4` antar gambar

### 10.6 Panduan Animasi

| Tipe            | Teknologi          | Behavior                                          |
| --------------- | ------------------ | ------------------------------------------------- |
| Scroll-linked   | GSAP ScrollTrigger | `scrub: true`, reversible                         |
| Text reveal     | GSAP               | blur(2px) + opacity 0.15 → clear, mengikuti scroll|
| Image entrance  | GSAP/Framer        | Fade-in perlahan, bukan melompat                  |
| CSS transitions | Tailwind           | Minimum `duration-500`                            |
| Carousel        | Embla Carousel     | Smooth auto-slide untuk galleries                 |

---

## 11. SEO & Structured Data

### 11.1 On-Page SEO

| Elemen           | Implementasi                                              |
| ---------------- | --------------------------------------------------------- |
| Title Tags       | Per-page via `generateMetadata()` + locale                |
| Meta Description | Per-page, locale-aware                                    |
| Keywords         | Per-page keyword sets                                     |
| Canonical        | Locale-specific canonical URLs                            |
| Hreflang         | `en`, `id`, `x-default` pada semua halaman                |
| H1               | Satu per halaman, hierarchy heading benar                 |
| Semantic HTML    | `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`  |
| Alt Text         | Wajib untuk semua gambar                                  |
| Sitemap          | Dynamic XML — semua halaman × semua locale                |
| Robots.txt       | Dynamic, memblokir `/studio`                              |

### 11.2 Structured Data (JSON-LD)

| Schema Type       | Halaman     | Data                                               |
| ----------------- | ----------- | -------------------------------------------------- |
| `LodgingBusiness` | Homepage    | Properti, rating 4.9/5, amenities, harga, lokasi   |
| `WebSite`         | Homepage    | Nama, URL, bahasa (en, id)                         |
| `Organization`    | Homepage, About | Logo, kontak, social profiles                  |
| `BreadcrumbList`  | Sub-pages   | Navigasi breadcrumb                                |

### 11.3 Geo SEO

```html
<meta name="geo.region" content="ID-JT" />
<meta name="geo.placename" content="Karimunjawa, Jepara, Central Java" />
<meta name="geo.position" content="-5.8166;110.4500" />
<meta name="ICBM" content="-5.8166, 110.4500" />
```

### 11.4 External Listings

| Platform      | URL                                                         |
| ------------- | ----------------------------------------------------------- |
| Instagram     | instagram.com/floatingparadise                              |
| Booking.com   | booking.com/hotel/id/floating-paradise.id.html              |
| Airbnb        | airbnb.co.id/rooms/22774718                                 |

---

## 12. Performa & Optimasi

### 12.1 Image Optimization

| Konfigurasi           | Nilai                                              |
| --------------------- | -------------------------------------------------- |
| Format                | AVIF → WebP (auto-negotiation)                     |
| Quality Levels        | 45, 55, 65, 75, 80                                |
| Device Sizes          | 640, 750, 828, 1080, 1200, 1920                   |
| Image Sizes           | 16, 32, 48, 64, 96, 128, 256, 384                 |
| Cache TTL             | 30 hari (2,592,000 detik)                          |
| Remote Patterns       | `cdn.sanity.io` (HTTPS)                            |
| Lazy Loading          | Default untuk gambar below-fold                    |
| Priority Loading      | Hero images, above-fold                            |
| CDN                   | Sanity CDN + Next.js Image Optimization            |

### 12.2 JavaScript Optimization

| Teknik                    | Detail                                           |
| ------------------------- | ------------------------------------------------ |
| Tree-shaking              | `optimizePackageImports` untuk 20+ Radix packages|
| Console removal           | Production: `removeConsole` kecuali error/warn   |
| Source maps               | Disabled di production                           |
| Turbopack                 | Default bundler (automatic code splitting)       |
| `"use client"` minimal   | Hanya untuk komponen interaktif                  |
| Dynamic import            | Lazy load komponen berat                         |
| Tripla SDK                | `lazyOnload` strategy                            |
| Google Analytics          | `@next/third-parties` (optimized loading)        |

### 12.3 Caching Strategy

| Layer          | Strategy                    | TTL        |
| -------------- | --------------------------- | ---------- |
| ISR Pages      | Incremental Static Regen    | 1 jam      |
| On-demand      | Webhook revalidation        | Instant    |
| Development    | `no-store` (realtime CMS)   | None       |
| Images         | Next.js Image Cache         | 30 hari    |
| Static Assets  | Vercel Edge CDN             | Long-term  |

### 12.4 Preconnect & DNS Prefetch

```html
<!-- Preconnect (critical) -->
<link rel="preconnect" href="https://cdn.sanity.io" />
<link rel="preconnect" href="https://fonts.gstatic.com" />

<!-- DNS Prefetch (non-critical) -->
<link rel="dns-prefetch" href="https://tripla.jp" />
<link rel="dns-prefetch" href="https://triplabot-production.tripla.ai" />
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
```

---

## 13. Keamanan

### 13.1 Content Security Policy (CSP)

```
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval' 
    va.vercel-scripts.com 
    www.googletagmanager.com 
    www.google-analytics.com 
    tripla.jp *.tripla.ai;
style-src 'self' 'unsafe-inline' fonts.googleapis.com *.tripla.ai;
img-src 'self' data: https: blob:;
font-src 'self' data: fonts.gstatic.com;
frame-src book.tripla.asia *.tripla.asia *.tripla.ai www.google.com;
connect-src 'self' *.tripla.asia *.tripla.ai tripla.jp *.sanity.io 
    wss://*.sanity.io va.vercel-scripts.com 
    www.google-analytics.com *.google-analytics.com 
    analytics.google.com www.googletagmanager.com;
object-src 'none';
frame-ancestors 'none';
upgrade-insecure-requests;
```

### 13.2 Security Headers

| Header                      | Nilai                                       |
| --------------------------- | ------------------------------------------- |
| `X-Content-Type-Options`    | `nosniff`                                   |
| `X-Frame-Options`           | `SAMEORIGIN`                                |
| `Referrer-Policy`           | `strict-origin-when-cross-origin`           |
| `Permissions-Policy`        | `camera=(), microphone=(), geolocation=()`  |
| `X-DNS-Prefetch-Control`    | `on`                                        |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |

### 13.3 Environment Variables & Secrets

| Variable                          | Visibilitas   | Fungsi                          |
| --------------------------------- | ------------- | ------------------------------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`   | Public        | Sanity project identifier       |
| `NEXT_PUBLIC_SANITY_DATASET`      | Public        | Sanity dataset ("production")   |
| `SANITY_API_READ_TOKEN`           | Server-only   | Read access ke private content  |
| `SANITY_API_WRITE_TOKEN`          | Server-only   | Write access (scripts only)     |
| `SANITY_REVALIDATE_SECRET`        | Server-only   | Webhook auth                    |

**Rules:**
- Semua token di `.env.local` (git-ignored)
- Tidak boleh hardcode token di source code
- Akses via `process.env.VARIABLE_NAME`

---

## 14. Deployment & Infrastructure

### 14.1 Vercel Deployment

| Konfigurasi   | Nilai                         |
| ------------- | ----------------------------- |
| Platform      | Vercel                        |
| Branch        | `main` (auto-deploy)          |
| Domain        | `floatingparadise.id`         |
| Region        | Auto (Vercel Edge Network)    |
| Build Command | `next build`                  |
| Framework     | Next.js (auto-detected)       |

### 14.2 Pre-Deployment Checklist

```bash
# Wajib sebelum push ke main
npx tsc --noEmit                    # TypeScript type check
npx sanity schemas validate          # Sanity schema validation
npm run build                        # Production build test
```

### 14.3 Git Workflow

| Aspek           | Konvensi                                          |
| --------------- | ------------------------------------------------- |
| Branch utama    | `main`                                            |
| Commit format   | `<type>: <deskripsi>` (feat, fix, style, refactor, docs) |
| Pre-push        | No console.log, no debug files, build passing     |

---

## 15. Analytics & Tracking

### 15.1 Tracking Tools

| Tool              | Fungsi                                | ID               |
| ----------------- | ------------------------------------- | ---------------- |
| Vercel Analytics  | Web Vitals, page views                | Auto             |
| Google Analytics 4| User behavior, conversions, audiences | `G-7JZWJ5455X`   |

### 15.2 Key Events to Track

| Event                    | Trigger                                    |
| ------------------------ | ------------------------------------------ |
| Page View                | Setiap halaman load                        |
| Booking Click (Tripla)   | Klik CTA booking                           |
| WhatsApp Click           | Klik floating WA atau WA buttons           |
| Language Switch           | Ganti bahasa EN ↔ ID                      |
| Gallery Interaction       | Swipe/klik gallery bungalow/activity      |
| Outbound Link            | Klik ke Booking.com, Airbnb, Instagram    |

---

## 16. Alur Pengguna (User Flows)

### 16.1 Flow: Direct Booking

```
Landing Page → Browse Bungalows → Select Room → Click "Book"
     ↓              ↓                  ↓             ↓
  Hero CTA      Card Detail      Gallery View    Tripla Modal
                                                     ↓
                                              Select Dates
                                                     ↓
                                              Complete Booking
```

### 16.2 Flow: WhatsApp Inquiry

```
Any Page → Click Floating WA Button → WhatsApp Opens
               OR
Activity Page → Click "Book via WhatsApp" → Pre-filled Message → WhatsApp
```

### 16.3 Flow: Yoga Retreat Booking

```
Homepage → Yoga Teaser Section → Click "Learn More"
                                      ↓
                              Yoga Retreat Page
                                      ↓
                         Browse: Overview → Gallery → Pricing → Policies
                                      ↓
                         Click "Book via WhatsApp" → Astrid's WA
```

### 16.4 Flow: Language Switching

```
Any EN Page → Click 🇮🇩 in Navbar → Navigate to /id/same-page
     ↓                                        ↓
  EN Content                            ID Content (same layout)
```

### 16.5 Flow: CMS Content Update

```
Editor Login → /studio → Select Document Type → Edit Content
                                                      ↓
                                                  Publish
                                                      ↓
                                              Webhook Fires
                                                      ↓
                                        /api/revalidate → Page Refreshed
```

---

## 17. Non-Functional Requirements

### 17.1 Performa

| Metrik                   | Target                    |
| ------------------------ | ------------------------- |
| Lighthouse Performance   | > 90                      |
| First Contentful Paint   | < 1.5s                    |
| Largest Contentful Paint | < 2.5s                    |
| Cumulative Layout Shift  | < 0.1                     |
| Time to Interactive      | < 3.5s                    |
| Total Page Size          | < 3MB (termasuk gambar)   |

### 17.2 Kompatibilitas

| Platform      | Dukungan                                    |
| ------------- | ------------------------------------------- |
| Desktop       | Chrome, Firefox, Safari, Edge (2 versi terakhir) |
| Mobile        | iOS Safari 15+, Chrome Android 90+         |
| Tablet        | iPad Safari, Chrome tablet                  |
| Responsive    | 320px – 2560px                              |

### 17.3 Aksesibilitas

| Aspek              | Standar                                    |
| ------------------ | ------------------------------------------ |
| WCAG Level         | AA (target)                                |
| Semantic HTML      | ✅ Wajib                                   |
| Alt Text           | ✅ Wajib semua gambar                      |
| Keyboard Nav       | ✅ Interaktif elements harus accessible    |
| Color Contrast     | Sesuai guideline WCAG AA                   |
| `aria-*` attributes| Pada elemen interaktif yang membutuhkan    |

### 17.4 Availability

| Aspek         | Target        |
| ------------- | ------------- |
| Uptime        | 99.9%         |
| CDN           | Global Edge   |
| Fallback      | CMS-safe fallbacks untuk semua konten |

---

## 18. Batasan & Kendala

### 18.1 Batasan Teknis

| Batasan                                    | Alasan                                                |
| ------------------------------------------ | ----------------------------------------------------- |
| Hanya 3 bungalow                           | Properti fisik terbatas                               |
| Tripla search bar harus di-hide            | UX: search bar default mengganggu desain minimalis    |
| Booking prices di Tripla, bukan di website | Harga dikelola di Tripla dashboard, bukan CMS         |
| No user authentication                     | Tidak diperlukan untuk guest website                  |
| No e-commerce/payment                      | Pembayaran via Tripla atau transfer bank              |

### 18.2 Batasan CMS

| Batasan                               | Alasan                                           |
| ------------------------------------- | ------------------------------------------------ |
| Slug bersifat read-only               | Mencegah broken URLs                             |
| Tidak boleh menambah bungalow via CMS | Perlu integrasi Tripla room ID oleh developer    |
| Gallery limit per activity            | Optimasi performa dan konsistensi layout         |

### 18.3 Ketergantungan Eksternal

| Service      | Dampak jika Down                                    |
| ------------ | --------------------------------------------------- |
| Sanity CDN   | Gambar tidak muncul (fallback: gambar statis lokal) |
| Tripla       | Booking widget tidak tersedia (fallback: WhatsApp)  |
| Vercel       | Website tidak accessible                            |
| Google Fonts | Font fallback browser                               |

---

## 19. Roadmap & Rencana Pengembangan

### Phase 1: Current (v1.0) ✅ — Live

- [x] Homepage dengan semua section
- [x] 7 halaman konten (Bungalows, Explore, Yoga, Getting Here, About, Contact, FAQ)
- [x] Sanity CMS dengan semua schema
- [x] Bilingual EN/ID
- [x] Tripla booking integration
- [x] WhatsApp floating button
- [x] SEO optimization + structured data
- [x] Security headers + CSP
- [x] Vercel deployment
- [x] Google Analytics 4

### Phase 2: Enhancement (v1.1) — Planned

- [ ] Blog/Journal halaman (travel tips, diving spots, sustainability stories)
- [ ] Online reviews aggregation (Booking.com, Airbnb, Google reviews feed)
- [ ] Image gallery page (dedicated photo gallery keseluruhan properti)
- [ ] Seasonal pricing display dari Tripla API (jika API tersedia)
- [ ] Progressive Web App (PWA) support untuk offline access info dasar
- [ ] Email newsletter signup integration
- [ ] Virtual tour / 360° photo integration

### Phase 3: Growth (v2.0) — Future

- [ ] Multi-currency pricing display
- [ ] Guest review submission system
- [ ] Loyalty/returning guest program landing page
- [ ] Partner/affiliate referral tracking
- [ ] Advanced analytics dashboard untuk owner
- [ ] Bahasa tambahan (Mandarin, Jepang, Korea) jika market membutuhkan
- [ ] Chatbot AI untuk FAQ dan pre-booking assistance

---

## 20. Appendix

### A. Environment Variables

```env
# Required
NEXT_PUBLIC_SANITY_PROJECT_ID=<project-id>
NEXT_PUBLIC_SANITY_DATASET="production"

# Server-only
SANITY_API_READ_TOKEN=<read-token>
SANITY_API_WRITE_TOKEN=<write-token>       # Scripts only
SANITY_REVALIDATE_SECRET=<webhook-secret>
```

### B. Useful Commands

```bash
npm run dev         # Development server (localhost:3000)
npm run build       # Production build
npm run start       # Start production server
npm run lint        # ESLint check
npx tsc --noEmit    # TypeScript type check
npx sanity schemas validate  # Validate Sanity schemas
```

### C. Key URLs

| URL                                      | Fungsi                    |
| ---------------------------------------- | ------------------------- |
| `https://floatingparadise.id`            | Production website        |
| `https://floatingparadise.id/studio`     | Sanity Studio CMS         |
| `https://floatingparadise.id/sitemap.xml`| XML Sitemap               |
| `https://floatingparadise.id/api/revalidate` | Webhook endpoint      |
| `localhost:3000`                         | Local development         |
| `localhost:3000/studio`                  | Local Sanity Studio       |

### D. Kontak Terkait

| Role              | Nama          | Kontak                              |
| ----------------- | ------------- | ----------------------------------- |
| Owner             | Astrid & Tono | +62 822 2694 5510                   |
| Email             | —             | floatingparadise.legonlele@gmail.com|
| Lokasi            | —             | Jl. Kapuran, Legon Lele, Karimunjawa|

### E. Referensi Properti

| Data Point           | Nilai                                     |
| -------------------- | ----------------------------------------- |
| Koordinat            | -5.8166, 110.4500                         |
| Rating               | 4.9/5 (36 reviews)                       |
| Jumlah Kamar         | 3                                         |
| Check-in             | 12:00                                     |
| Check-out            | 10:00                                     |
| Tahun Berdiri        | 2018                                      |
| Price Range          | $$                                        |

---

> **Dokumen ini adalah living document.** Update dilakukan seiring perkembangan produk. Versi terakhir selalu tersedia di `docs/PRD.md` dalam repository proyek.
