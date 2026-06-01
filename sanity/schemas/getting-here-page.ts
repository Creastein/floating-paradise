import { defineType, defineField } from 'sanity'

const fallbackNote = 'Optional. Leave empty to use the website default.'

const localizedString = (
  name: string,
  title: string,
  group: string,
  fieldset: string,
  description = fallbackNote
) =>
  defineField({
    name,
    title,
    description,
    type: 'string',
    group,
    fieldset,
  })

const localizedText = (
  name: string,
  title: string,
  group: string,
  fieldset: string,
  description = fallbackNote
) =>
  defineField({
    name,
    title,
    description,
    type: 'text',
    rows: 4,
    group,
    fieldset,
  })

export const gettingHerePageType = defineType({
  name: 'gettingHerePage',
  title: 'Getting Here Page',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Getting Here',
        subtitle: 'Travel guide, boat tickets, and island transfer details',
      }
    },
  },
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'step1', title: 'Step 1 - Plan Your Journey' },
    { name: 'transfers', title: 'Fixed Transfer Prices' },
    { name: 'step2', title: 'Step 2 - Cross to Karimunjawa' },
    { name: 'step3', title: 'Step 3 - Arrive on the Island' },
    { name: 'step4', title: 'Step 4 - Access to Floating' },
    { name: 'step5', title: 'Step 5 - Journey Begins' },
  ],
  fieldsets: [
    { name: 'hero_en', title: 'English Hero', options: { collapsible: true, collapsed: false } },
    { name: 'hero_id', title: 'Indonesian Hero', options: { collapsible: true, collapsed: true } },
    { name: 'step1_en', title: 'English Content', options: { collapsible: true, collapsed: false } },
    { name: 'step1_id', title: 'Indonesian Content', options: { collapsible: true, collapsed: true } },
    { name: 'step2_en', title: 'English Content', options: { collapsible: true, collapsed: false } },
    { name: 'step2_id', title: 'Indonesian Content', options: { collapsible: true, collapsed: true } },
    { name: 'step3_en', title: 'English Content', options: { collapsible: true, collapsed: false } },
    { name: 'step3_id', title: 'Indonesian Content', options: { collapsible: true, collapsed: true } },
    { name: 'step4_en', title: 'English Content', options: { collapsible: true, collapsed: false } },
    { name: 'step4_id', title: 'Indonesian Content', options: { collapsible: true, collapsed: true } },
    { name: 'step5_en', title: 'English Content', options: { collapsible: true, collapsed: false } },
    { name: 'step5_id', title: 'Indonesian Content', options: { collapsible: true, collapsed: true } },
    { name: 'semarang', title: 'Semarang', options: { collapsible: true, collapsed: false } },
    { name: 'yogyakarta', title: 'Yogyakarta', options: { collapsible: true, collapsed: true } },
    { name: 'malang', title: 'Malang', options: { collapsible: true, collapsed: true } },
  ],
  initialValue: {
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
  },
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      description: 'Optional. Leave empty to use /image/getting-here/gh-hero.webp.',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),
    localizedString('heroTitle', 'Hero Title (English)', 'hero', 'hero_en'),
    localizedString('heroTitle_id', 'Hero Title (Indonesian)', 'hero', 'hero_id'),
    localizedText('heroSubtitle', 'Hero Subtitle (English)', 'hero', 'hero_en'),
    localizedText('heroSubtitle_id', 'Hero Subtitle (Indonesian)', 'hero', 'hero_id'),

    localizedString('step1Title', 'Step Title (English)', 'step1', 'step1_en'),
    localizedString('step1Title_id', 'Step Title (Indonesian)', 'step1', 'step1_id'),
    localizedString('step1Subtitle', 'Step Subtitle (English)', 'step1', 'step1_en'),
    localizedString('step1Subtitle_id', 'Step Subtitle (Indonesian)', 'step1', 'step1_id'),
    localizedString('airTitle', 'Arriving by Air Title (English)', 'step1', 'step1_en'),
    localizedString('airTitle_id', 'Arriving by Air Title (Indonesian)', 'step1', 'step1_id'),
    localizedText('airText', 'Arriving by Air Text (English)', 'step1', 'step1_en'),
    localizedText('airText_id', 'Arriving by Air Text (Indonesian)', 'step1', 'step1_id'),
    localizedString('carTitle', 'Private Car Hire Title (English)', 'step1', 'step1_en'),
    localizedString('carTitle_id', 'Private Car Hire Title (Indonesian)', 'step1', 'step1_id'),
    localizedText('carIntro', 'Private Car Hire Text (English)', 'step1', 'step1_en'),
    localizedText('carIntro_id', 'Private Car Hire Text (Indonesian)', 'step1', 'step1_id'),
    localizedString('transferCtaText', 'Transfer Button Text (English)', 'step1', 'step1_en'),
    localizedString('transferCtaText_id', 'Transfer Button Text (Indonesian)', 'step1', 'step1_id'),
    localizedText('transferWhatsAppMessage', 'Transfer WhatsApp Message (English)', 'step1', 'step1_en'),
    localizedText('transferWhatsAppMessage_id', 'Transfer WhatsApp Message (Indonesian)', 'step1', 'step1_id'),

    defineField({
      name: 'semarangPrice',
      title: 'Price',
      description: fallbackNote,
      type: 'string',
      group: 'transfers',
      fieldset: 'semarang',
    }),
    defineField({
      name: 'semarangDuration',
      title: 'Duration (English)',
      description: fallbackNote,
      type: 'string',
      group: 'transfers',
      fieldset: 'semarang',
    }),
    defineField({
      name: 'semarangDuration_id',
      title: 'Duration (Indonesian)',
      description: fallbackNote,
      type: 'string',
      group: 'transfers',
      fieldset: 'semarang',
    }),
    defineField({
      name: 'yogyakartaPrice',
      title: 'Price',
      description: fallbackNote,
      type: 'string',
      group: 'transfers',
      fieldset: 'yogyakarta',
    }),
    defineField({
      name: 'yogyakartaDuration',
      title: 'Duration (English)',
      description: fallbackNote,
      type: 'string',
      group: 'transfers',
      fieldset: 'yogyakarta',
    }),
    defineField({
      name: 'yogyakartaDuration_id',
      title: 'Duration (Indonesian)',
      description: fallbackNote,
      type: 'string',
      group: 'transfers',
      fieldset: 'yogyakarta',
    }),
    defineField({
      name: 'malangPrice',
      title: 'Price',
      description: fallbackNote,
      type: 'string',
      group: 'transfers',
      fieldset: 'malang',
    }),
    defineField({
      name: 'malangDuration',
      title: 'Duration (English)',
      description: fallbackNote,
      type: 'string',
      group: 'transfers',
      fieldset: 'malang',
    }),
    defineField({
      name: 'malangDuration_id',
      title: 'Duration (Indonesian)',
      description: fallbackNote,
      type: 'string',
      group: 'transfers',
      fieldset: 'malang',
    }),

    localizedString('step2Title', 'Step Title (English)', 'step2', 'step2_en'),
    localizedString('step2Title_id', 'Step Title (Indonesian)', 'step2', 'step2_id'),
    localizedString('step2Subtitle', 'Step Subtitle (English)', 'step2', 'step2_en'),
    localizedString('step2Subtitle_id', 'Step Subtitle (Indonesian)', 'step2', 'step2_id'),
    defineField({
      name: 'expressImage',
      title: 'Express Bahari Image',
      description: 'Optional. Leave empty to use /image/getting-here/gh4.webp.',
      type: 'image',
      options: { hotspot: true },
      group: 'step2',
    }),
    localizedString('expressTitle', 'Express Bahari Title (English)', 'step2', 'step2_en'),
    localizedString('expressTitle_id', 'Express Bahari Title (Indonesian)', 'step2', 'step2_id'),
    localizedText('expressText', 'Express Bahari Text (English)', 'step2', 'step2_en'),
    localizedText('expressText_id', 'Express Bahari Text (Indonesian)', 'step2', 'step2_id'),
    localizedString('bookFloatingTitle', 'Book Through Floating Title (English)', 'step2', 'step2_en'),
    localizedString('bookFloatingTitle_id', 'Book Through Floating Title (Indonesian)', 'step2', 'step2_id'),
    localizedText('bookFloatingText', 'Book Through Floating Text (English)', 'step2', 'step2_en'),
    localizedText('bookFloatingText_id', 'Book Through Floating Text (Indonesian)', 'step2', 'step2_id'),
    localizedText('bookFloatingHighlight', 'Booking Highlight Text (English)', 'step2', 'step2_en'),
    localizedText('bookFloatingHighlight_id', 'Booking Highlight Text (Indonesian)', 'step2', 'step2_id'),
    localizedString('contactLabel', 'Contact Label (English)', 'step2', 'step2_en'),
    localizedString('contactLabel_id', 'Contact Label (Indonesian)', 'step2', 'step2_id'),
    localizedText('ticketNote', 'Ticket Note (English)', 'step2', 'step2_en'),
    localizedText('ticketNote_id', 'Ticket Note (Indonesian)', 'step2', 'step2_id'),
    localizedString('boatCtaText', 'Boat Ticket Button Text (English)', 'step2', 'step2_en'),
    localizedString('boatCtaText_id', 'Boat Ticket Button Text (Indonesian)', 'step2', 'step2_id'),
    localizedText('boatWhatsAppMessage', 'Boat Ticket WhatsApp Message (English)', 'step2', 'step2_en'),
    localizedText('boatWhatsAppMessage_id', 'Boat Ticket WhatsApp Message (Indonesian)', 'step2', 'step2_id'),
    localizedString('ferryTitle', 'Public Ferry Title (English)', 'step2', 'step2_en'),
    localizedString('ferryTitle_id', 'Public Ferry Title (Indonesian)', 'step2', 'step2_id'),
    localizedText('ferryText', 'Public Ferry Text (English)', 'step2', 'step2_en'),
    localizedText('ferryText_id', 'Public Ferry Text (Indonesian)', 'step2', 'step2_id'),

    localizedString('step3Title', 'Step Title (English)', 'step3', 'step3_en'),
    localizedString('step3Title_id', 'Step Title (Indonesian)', 'step3', 'step3_id'),
    localizedString('step3Subtitle', 'Step Subtitle (English)', 'step3', 'step3_en'),
    localizedString('step3Subtitle_id', 'Step Subtitle (Indonesian)', 'step3', 'step3_id'),
    localizedString('taxiTitle', 'Taxi / Transfer Title (English)', 'step3', 'step3_en'),
    localizedString('taxiTitle_id', 'Taxi / Transfer Title (Indonesian)', 'step3', 'step3_id'),
    localizedText('taxiPriceLine', 'Taxi Price Line (English)', 'step3', 'step3_en'),
    localizedText('taxiPriceLine_id', 'Taxi Price Line (Indonesian)', 'step3', 'step3_id'),
    localizedString('taxiJourneyTimeLine', 'Journey Time Line (English)', 'step3', 'step3_en'),
    localizedString('taxiJourneyTimeLine_id', 'Journey Time Line (Indonesian)', 'step3', 'step3_id'),
    localizedText('scooterLine', 'Scooter Rental Line (English)', 'step3', 'step3_en'),
    localizedText('scooterLine_id', 'Scooter Rental Line (Indonesian)', 'step3', 'step3_id'),
    localizedText('nationalParkLine', 'National Park Fee Line (English)', 'step3', 'step3_en'),
    localizedText('nationalParkLine_id', 'National Park Fee Line (Indonesian)', 'step3', 'step3_id'),

    localizedString('step4Title', 'Step Title (English)', 'step4', 'step4_en'),
    localizedString('step4Title_id', 'Step Title (Indonesian)', 'step4', 'step4_id'),
    localizedString('step4Subtitle', 'Step Subtitle (English)', 'step4', 'step4_en'),
    localizedString('step4Subtitle_id', 'Step Subtitle (Indonesian)', 'step4', 'step4_id'),
    localizedString('findingTitle', 'Finding Us Title (English)', 'step4', 'step4_en'),
    localizedString('findingTitle_id', 'Finding Us Title (Indonesian)', 'step4', 'step4_id'),
    localizedText('findingText', 'Finding Us Text (English)', 'step4', 'step4_en'),
    localizedText('findingText_id', 'Finding Us Text (Indonesian)', 'step4', 'step4_id'),
    localizedText('travelLightNote', 'Travel Light Note (English)', 'step4', 'step4_en'),
    localizedText('travelLightNote_id', 'Travel Light Note (Indonesian)', 'step4', 'step4_id'),

    localizedString('step5Title', 'Step Title (English)', 'step5', 'step5_en'),
    localizedString('step5Title_id', 'Step Title (Indonesian)', 'step5', 'step5_id'),
    localizedString('step5Subtitle', 'Step Subtitle (English)', 'step5', 'step5_en'),
    localizedString('step5Subtitle_id', 'Step Subtitle (Indonesian)', 'step5', 'step5_id'),
    localizedText('finalText', 'Final Text (English)', 'step5', 'step5_en'),
    localizedText('finalText_id', 'Final Text (Indonesian)', 'step5', 'step5_id'),
    localizedString('availabilityCtaText', 'Availability Button Text (English)', 'step5', 'step5_en'),
    localizedString('availabilityCtaText_id', 'Availability Button Text (Indonesian)', 'step5', 'step5_id'),
  ],
})
