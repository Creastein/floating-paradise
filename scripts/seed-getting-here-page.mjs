import fs from 'node:fs'
import { createClient } from '@sanity/client'

function loadEnv(path) {
  if (!fs.existsSync(path)) return {}

  return Object.fromEntries(
    fs
      .readFileSync(path, 'utf8')
      .split(/\r?\n/)
      .map((line) => line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/))
      .filter(Boolean)
      .map((match) => [match[1], match[2].replace(/^['"]|['"]$/g, '')])
  )
}

const env = { ...loadEnv('.env.local'), ...process.env }

const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'aves0i7c'
const dataset = env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = env.SANITY_API_WRITE_TOKEN

if (!token) {
  console.error('Missing SANITY_API_WRITE_TOKEN. Add a Sanity write token, then run: node scripts/seed-getting-here-page.mjs')
  process.exit(1)
}

const defaultGettingHerePage = {
  _id: 'gettingHerePage',
  _type: 'gettingHerePage',

  heroTitle: 'Your Journey to Floating',
  heroTitle_id: 'Perjalanan Anda ke Floating',
  heroSubtitle:
    'Floating Paradise is located in Karimunjawa, a protected archipelago of 27 islands in the Java Sea. Getting here is part of the adventure — let us guide you step by step.',
  heroSubtitle_id:
    'Floating Paradise terletak di Karimunjawa, sebuah kepulauan yang dilindungi dengan 27 pulau di Laut Jawa. Perjalanan ke sini adalah bagian dari petualangan — izinkan kami memandu Anda langkah demi langkah.',

  step1Title: 'Plan Your Journey',
  step1Title_id: 'Rencanakan Perjalanan Anda',
  step1Subtitle: 'Fly into Central Java, then travel overland to Jepara Harbour.',
  step1Subtitle_id: 'Terbang ke Jawa Tengah, lalu perjalanan darat ke Pelabuhan Jepara.',
  airTitle: 'Arriving by Air',
  airTitle_id: 'Tiba Melalui Udara',
  airText:
    'The closest international airport is Semarang Achmad Yani (SRG). From there, the journey to Jepara harbour takes approximately 2.5 hours by private car. We can arrange a trusted driver to meet you upon arrival.',
  airText_id:
    'Bandara internasional terdekat adalah Semarang Achmad Yani (SRG). Dari sana, perjalanan ke pelabuhan Jepara memakan waktu sekitar 2,5 jam dengan mobil pribadi. Kami dapat mengatur sopir tepercaya untuk menjemput Anda saat kedatangan.',
  carTitle: 'Private Car Hire',
  carTitle_id: 'Sewa Mobil Pribadi',
  carIntro:
    'We arrange private cars with driver to take you directly to Jepara Kartini Harbour. All prices include fuel and toll fees. Your driver will meet you at the arrivals hall or hotel lobby.',
  carIntro_id:
    'Kami mengatur mobil pribadi dengan sopir untuk membawa Anda langsung ke Pelabuhan Kartini Jepara. Semua harga sudah termasuk bahan bakar dan biaya tol. Sopir Anda akan menemui Anda di aula kedatangan atau lobi hotel.',
  transferCtaText: 'Book a Transfer',
  transferCtaText_id: 'Pesan Penjemputan',
  transferWhatsAppMessage:
    "Hi, I'd like to book a private car transfer to Jepara Harbour. Could you share details and availability? Thank you!",
  transferWhatsAppMessage_id:
    'Halo, saya ingin memesan penjemputan mobil pribadi ke Pelabuhan Jepara. Bisa share detail dan ketersediaan? Terima kasih!',

  semarangPrice: 'Rp 600,000',
  semarangDuration: '~2.5 hours to Jepara',
  semarangDuration_id: '~2,5 jam ke Jepara',
  yogyakartaPrice: 'Rp 1,200,000',
  yogyakartaDuration: '~5 hours to Jepara',
  yogyakartaDuration_id: '~5 jam ke Jepara',
  malangPrice: 'Rp 3,200,000',
  malangDuration: '~8 hours to Jepara',
  malangDuration_id: '~8 jam ke Jepara',

  step2Title: 'Cross to Karimunjawa',
  step2Title_id: 'Menyeberang ke Karimunjawa',
  step2Subtitle: 'Take the fast boat from Jepara — approximately 2 hours across the Java Sea.',
  step2Subtitle_id: 'Naik kapal cepat dari Jepara — sekitar 2 jam menyeberangi Laut Jawa.',
  expressTitle: 'Express Bahari Fast Boat',
  expressTitle_id: 'Kapal Cepat Express Bahari',
  expressText:
    'Express Bahari operates daily between Jepara and Karimunjawa. Schedules vary by month and season — some days offer two departures. We recommend booking your tickets through us for the most up-to-date availability.',
  expressText_id:
    'Express Bahari beroperasi setiap hari antara Jepara dan Karimunjawa. Jadwal bervariasi berdasarkan bulan dan musim — beberapa hari menawarkan dua keberangkatan. Kami sarankan memesan tiket melalui kami untuk informasi ketersediaan terbaru.',
  bookFloatingTitle: 'Book Through Floating',
  bookFloatingTitle_id: 'Pesan Melalui Floating',
  bookFloatingText:
    "We offer a ticketing service for our guests with a surcharge. Let us handle the logistics so you don't have to navigate local booking sites or harbour queues.",
  bookFloatingText_id:
    'Kami menawarkan layanan pemesanan tiket berbayar (dengan biaya tambahan) untuk tamu kami. Biarkan kami yang mengurus logistik sehingga Anda tidak perlu repot mencari situs pemesanan lokal atau mengantre di pelabuhan.',
  bookFloatingHighlight:
    "Simply send us your travel dates, email, and passport copies — we'll secure your seats with a QR boarding card. No queuing required.",
  bookFloatingHighlight_id:
    'Cukup kirimkan tanggal perjalanan, email, dan salinan paspor/KTP Anda — kami akan mengamankan kursi Anda dengan tiket boarding QR. Tanpa antre.',
  contactLabel: 'Contact us directly:',
  contactLabel_id: 'Hubungi kami langsung:',
  ticketNote: 'We can help arrange tickets for anyone.',
  ticketNote_id: 'Kami dapat membantu mengatur tiket untuk siapa pun.',
  boatCtaText: 'Book via WhatsApp',
  boatCtaText_id: 'Pesan via WhatsApp',
  boatWhatsAppMessage:
    "Hi, I'd like to book a boat ticket to Karimunjawa through Floating. Could you confirm availability and the surcharge? Thank you!",
  boatWhatsAppMessage_id:
    'Halo, saya ingin memesan tiket kapal ke Karimunjawa melalui Floating. Mohon info ketersediaan dan biaya tambahannya ya. Terima kasih!',
  ferryTitle: 'Alternative: Public Ferry',
  ferryTitle_id: 'Alternatif: Kapal Feri',
  ferryText:
    'If the fast boat is fully booked, a public ferry is also available. Duration: approximately 4.5 hours. Price: around Rp 180,000 per person (one way).',
  ferryText_id:
    'Jika kapal cepat penuh, kapal feri juga tersedia. Durasi: sekitar 4,5 jam. Harga: kurang lebih Rp 180.000 per orang (sekali jalan).',

  step3Title: 'Arrive on the Island',
  step3Title_id: 'Tiba di Pulau',
  step3Subtitle: 'Welcome to Karimunjawa. Your island journey continues.',
  step3Subtitle_id: 'Selamat datang di Karimunjawa. Perjalanan pulau Anda berlanjut.',
  taxiTitle: 'Taxi / Transfer',
  taxiTitle_id: 'Taksi / Penjemputan',
  taxiPriceLine: 'Taxi from harbour to Floating Paradise: Rp 150,000 (paid directly to driver, cash)',
  taxiPriceLine_id: 'Taksi dari pelabuhan ke Floating Paradise: Rp 150.000 (dibayar langsung ke sopir, tunai)',
  taxiJourneyTimeLine: 'Journey time: ~15 minutes',
  taxiJourneyTimeLine_id: 'Waktu tempuh: ~15 menit',
  scooterLine:
    "Scooter rental: Rp 100,000/day, helmets included. We strongly recommend renting through Floating after you've dropped your bags and seen the road conditions. If you're confident on a scooter and travelling light (small enough to take your luggage on the boat), we can arrange a scooter for you at the harbour.",
  scooterLine_id:
    'Sewa skuter: Rp 100.000/hari, termasuk helm. Kami sangat menyarankan para tamu untuk menyewa dari Floating setelah menurunkan barang bawaan dan melihat kondisi jalan. Jika Anda mahir dan membawa barang bawaan yang cukup kecil untuk dibawa ke atas kapal, kami dapat menyiapkan skuter untuk Anda di pelabuhan.',
  nationalParkLine:
    'National Park entrance fee: Rp 200,000 (cash, paid on arrival). This ticket gives you free access to the Turtle Sanctuary, Mangrove Forest Trek, and other National Park hiking trails, so please keep it.',
  nationalParkLine_id:
    'Harap diperhatikan bahwa ada biaya masuk Taman Nasional sebesar Rp200.000 yang harus dibayar tunai saat Anda tiba. Tiket ini akan memberi Anda akses gratis ke Suaka Penyu, Trekking Hutan Bakau, dan jalur pendakian Taman Nasional lainnya, jadi pastikan Anda menyimpannya.',

  step4Title: 'Access to Floating Paradise',
  step4Title_id: 'Akses ke Floating Paradise',
  step4Subtitle: 'The final stretch — arriving at the property.',
  step4Subtitle_id: 'Tahap terakhir — tiba di lokasi.',
  findingTitle: 'Finding Us',
  findingTitle_id: 'Menemukan Kami',
  findingText:
    'There is direct road access and parking on site. Follow the path past Bobi Beach — once the brick road ends, turn right onto the dirt track. Continue along the beach, cross the small wooden bridge, and drive through the old shrimp farm to reach the Floating Paradise parking area.',
  findingText_id:
    'Terdapat akses jalan darat langsung dan tempat parkir di lokasi. Ikuti jalan melewati Pantai Bobi — begitu jalan paving berbata berakhir, belok kanan ke jalan tanah. Lanjutkan menyusuri pantai, seberangi jembatan kayu kecil, dan berkendara melewati bekas tambak udang untuk mencapai area parkir Floating Paradise.',
  travelLightNote:
    'We recommend travelling with light luggage and an open mindset. Life on a small island invites flexibility, patience and presence.',
  travelLightNote_id:
    'Kami merekomendasikan untuk tidak membawa terlalu banyak barang bawaan dan datang dengan pikiran terbuka. Kehidupan di pulau kecil mengundang fleksibilitas, kesabaran, dan kehadiran penuh.',

  step5Title: 'Your Journey Begins',
  step5Title_id: 'Perjalanan Anda Dimulai',
  step5Subtitle: "You've arrived. Now let go.",
  step5Subtitle_id: 'Anda telah tiba. Sekarang lepaskan.',
  finalText:
    'Floating is designed for guests who appreciate nature, simplicity and being close to the elements. If you enjoy authenticity, sea air and a slower rhythm, you will feel very at home.',
  finalText_id:
    'Floating dirancang bagi tamu yang menghargai alam, kesederhanaan, dan kedekatan dengan elemen sekitar. Jika Anda menikmati otentisitas, udara laut, dan ritme yang lebih lambat, Anda akan merasa betah di sini.',
  availabilityCtaText: 'Check Availability',
  availabilityCtaText_id: 'Cek Ketersediaan',
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-03-25',
  token,
  useCdn: false,
})

const { _id, _type, ...defaultFields } = defaultGettingHerePage

const result = await client
  .transaction()
  .createIfNotExists({ _id, _type })
  .patch(_id, (patch) => patch.set(defaultFields))
  .commit()

console.log(`Seeded Getting Here page in ${projectId}/${dataset}. Mutations: ${result.transactionId}`)
