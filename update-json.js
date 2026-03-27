const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, 'lib/i18n/translations/en.json');
const idPath = path.join(__dirname, 'lib/i18n/translations/id.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const id = JSON.parse(fs.readFileSync(idPath, 'utf8'));

// --- BUNGALOWS PAGE ---
en.bungalowsPage = en.bungalowsPage || {};
id.bungalowsPage = id.bungalowsPage || {};

en.bungalowsPage.rooms = {
  sunrise: {
    description: "Our most private and sought-after bungalow, offering expansive sea views and soft ocean breezes right from your king-sized bed."
  },
  sunset: {
    description: "Our soul went into creating Floating's first stand-alone bungalow — offering expansive sea views and sunset views along the bay."
  },
  bayside: {
    description: "Originally our private family space, Bayside has evolved into a spacious two-bedroom bungalow where you can shower with a view and take in the mangrove forest to the East and the sea flowing gently into the bay in the West."
  }
};
id.bungalowsPage.rooms = {
  sunrise: {
    description: "Bungalow kami yang paling privat dan diminati, menawarkan pemandangan laut yang luas dan hembusan angin laut yang lembut langsung dari tempat tidur king-size Anda."
  },
  sunset: {
    description: "Jiwa kami tertuang dalam menciptakan bungalow mandiri pertama di Floating — menawarkan pemandangan laut lepas dan indahnya matahari terbenam di sepanjang teluk."
  },
  bayside: {
    description: "Awalnya adalah ruang keluarga privat kami, Bayside telah berevolusi menjadi bungalow dua kamar tidur yang luas di mana Anda dapat mandi dengan pemandangan terbuka, menikmati hutan bakau di Timur dan aliran lembut laut ke teluk di Barat."
  }
};

en.bungalowsPage.facilities = [
  "Entire Bungalow",
  "En-suite Bathroom with toiletries & toilet paper",
  "Private Terrace",
  "Sea View",
  "Tea, Coffee & Drinking Water"
];
id.bungalowsPage.facilities = [
  "Bungalow Pribadi",
  "Kamar mandi dalam dengan perlengkapan mandi & tisu toilet",
  "Teras Pribadi",
  "Pemandangan Laut",
  "Teh, Kopi & Air Minum"
];

en.bungalowsPage.size = "Size";
id.bungalowsPage.size = "Ukuran";

en.bungalowsPage.priceNight = "Price/Night";
id.bungalowsPage.priceNight = "Harga/Malam";

en.bungalowsPage.exploreRoom = "Explore Room";
id.bungalowsPage.exploreRoom = "Lihat Kamar";

en.bungalowsPage.bookNow = "Book Now";
id.bungalowsPage.bookNow = "Pesan Sekarang";

// --- EXPLORE PAGE ---
en.explorePage = en.explorePage || {};
id.explorePage = id.explorePage || {};

en.explorePage.heroTitle = "Explore";
id.explorePage.heroTitle = "Eksplorasi";

en.explorePage.heroSubtitle = "Every experience departs from our pier.";
id.explorePage.heroSubtitle = "Setiap petualangan bermula dari dermaga kami.";

en.explorePage.activities = {
  boatTour: {
    title: "Eco Boat Tours",
    description: "Explore the archipelago on our custom-built wooden boat, guided by expert local captains."
  },
  yoga: {
    title: "Sunset Yoga",
    description: "Find your balance on our wooden jetty beneath the setting sun, guided by Astrid."
  },
  kayaking: {
    title: "Mangrove Kayaking",
    description: "Paddle quietly through ancient mangrove forests straight from the property."
  },
  trekking: {
    title: "Jungle Trekking",
    description: "Discover hidden terrestrial ecosystems and viewpoints across the island."
  },
  turtles: {
    title: "Turtle Sanctuary",
    description: "Visit sustainable conservation efforts supporting the local marine life."
  },
  cuisine: {
    title: "Local Cuisine",
    description: "Savor authentic island flavors prepped daily using fresh seafood and produce."
  }
};
id.explorePage.activities = {
  boatTour: {
    title: "Wisata Perahu Ramah Lingkungan",
    description: "Jelajahi kepulauan menggunakan perahu kayu buatan khusus kami, dipandu oleh kapten lokal yang ahli."
  },
  yoga: {
    title: "Yoga Saat Matahari Terbenam",
    description: "Temukan keseimbangan Anda di atas dermaga kayu kami di bawah matahari terbenam, dipandu oleh Astrid."
  },
  kayaking: {
    title: "Mendayung Kayak di Mangrove",
    description: "Mendayung dengan tenang melewati hutan bakau kuno langsung dari penginapan."
  },
  trekking: {
    title: "Trekking Jelajah Hutan",
    description: "Temukan ekosistem darat yang tersembunyi dan sudut pandang pemandangan di seluruh pulau."
  },
  turtles: {
    title: "Penangkaran Penyu",
    description: "Kunjungi upaya konservasi berkelanjutan yang mendukung kehidupan biota laut lokal."
  },
  cuisine: {
    title: "Kuliner Lokal",
    description: "Nikmati cita rasa asli pulau yang disiapkan setiap hari dari hasil laut dan panen segar."
  }
};

en.explorePage.learnMore = "Learn More";
id.explorePage.learnMore = "Pelajari Lebih Lanjut";

en.explorePage.viewGallery = "View Gallery";
id.explorePage.viewGallery = "Lihat Galeri";

en.explorePage.bookNow = "Book Now";
id.explorePage.bookNow = "Pesan Sekarang";

en.explorePage.preOrder = "Pre Order";
id.explorePage.preOrder = "Pesan Di Muka";

// --- ABOUT PAGE ---
en.aboutPage = en.aboutPage || {};
id.aboutPage = id.aboutPage || {};

en.aboutPage.heroTitle = "Our Story";
id.aboutPage.heroTitle = "Kisah Kami";

en.aboutPage.heroSubtitle = "A quiet conversation on a wooden pier, transformed into a sanctuary above the sea.";
id.aboutPage.heroSubtitle = "Percakapan sunyi di sebuah dermaga kayu, yang berubah menjadi tempat bernaung di atas laut.";

en.aboutPage.missionStatementTitle = "Mission Statement";
id.aboutPage.missionStatementTitle = "Pernyataan Misi";

en.aboutPage.missionDefault = "Our dream is that Floating Paradise not only offers a retreat from the business of life, but also serves as a gentle reminder of the beauty of living harmoniously with the world around us.";
id.aboutPage.missionDefault = "Mimpi kami adalah Floating Paradise tidak hanya menjadi tempat peristirahatan dari kesibukan hidup, namun juga berfungsi sebagai pengingat akan indahnya hidup selaras dengan alam di sekitar kita.";

en.aboutPage.keepItGreenTitle = "Keep It Green";
id.aboutPage.keepItGreenTitle = "Menjaga Alam (Keep It Green)";

en.aboutPage.keepItGreenDesc = "At Floating, we are committed to preserving the natural beauty of our surroundings and minimising our environmental impact.";
id.aboutPage.keepItGreenDesc = "Di Floating, kami berkomitmen menjaga keindahan alami lingkungan sekitar dan meminimalkan jejak ekologis kami.";

en.aboutPage.practices = {
  solar: {
    title: "Solar Powered",
    desc: "Floating Paradise runs entirely on solar-powered energy"
  },
  amenities: {
    title: "Natural Amenities",
    desc: "Complimentary handmade natural body wash, shampoo, and natural cleaning products"
  },
  palmOil: {
    title: "No Palm Oil",
    desc: "We avoid palm oil, choosing island-sourced coconut oil instead"
  },
  water: {
    title: "Plastic Free Water",
    desc: "No plastic bottles sold; we provide free drinking water and sell reusable steel bottles"
  },
  reduce: {
    title: "Reduce Single-Use",
    desc: "We consistently use reusable bags, Tupperware, and other items"
  },
  waste: {
    title: "Responsible Waste",
    desc: "We dispose of our rubbish responsibly, using organic waste for compost"
  },
  trashHero: {
    title: "Trash Hero",
    desc: "We work with Trash Hero Karimunjawa to clean up the local area"
  },
  education: {
    title: "Education",
    desc: "We volunteer passionately towards improving education across Karimunjawa"
  }
};
id.aboutPage.practices = {
  solar: {
    title: "Bertenaga Surya",
    desc: "Floating Paradise berjalan sepenuhnya dengan energi panel surya"
  },
  amenities: {
    title: "Fasilitas Alami",
    desc: "Gratis sabun mandi dan sampo berbahan alami buatan tangan, serta kami menggunakan produk pembersih alami"
  },
  palmOil: {
    title: "Bebas Minyak Sawit",
    desc: "Kami menghindari minyak sawit, sebagai gantinya kami menggunakan minyak kelapa asli pulau"
  },
  water: {
    title: "Air Minum Tanpa Plastik",
    desc: "Kami tidak menjual air botol plastik; kami sediakan air minum gratis dan menjual botol stainless yang dapat digunakan berulang-ulang"
  },
  reduce: {
    title: "Kurangi Sekali Pakai",
    desc: "Kami menggunakan kantong yang mudah digunakan kembali, kotak tupperware, dan wadah serupa lainnya secara konsisten"
  },
  waste: {
    title: "Sampah Bertanggung Jawab",
    desc: "Kami membuang sampah secara bertanggung jawab, menggunakan limbah organik sebagai pupuk kompos"
  },
  trashHero: {
    title: "Pahlawan Sampah (Trash Hero)",
    desc: "Kami bekerja sama dengan Trash Hero Karimunjawa secara aktif membersihkan lingkungan pulau"
  },
  education: {
    title: "Pendidikan",
    desc: "Kami merupakan relawan yang secara konsisten dan antusias berupaya memajukan pendidikan warga kepulauan Karimunjawa"
  }
};

en.aboutPage.valuesTitle = "Our Values";
id.aboutPage.valuesTitle = "Nilai-Nilai Kami";

en.aboutPage.values = {
  sustainability: {
    title: "Sustainability",
    desc: "Powered by the sun and built with natural, locally-sourced materials that honor the environment."
  },
  community: {
    title: "Community",
    desc: "Supporting our island home through local employment, guide partnerships, and dedicated educational charity work."
  },
  simplicity: {
    title: "Simplicity",
    desc: "Embracing a slower pace. We invite guests to practice intentional living and slow travel during their stay."
  }
};
id.aboutPage.values = {
  sustainability: {
    title: "Keberlanjutan",
    desc: "Ditenagai oleh panas matahari dan dibangun dengan material lokal alami demi melestarikan dan menghargai alam."
  },
  community: {
    title: "Komunitas",
    desc: "Mendukung tempat pemukiman pulau kami dengan membuka peluang kerja lokal, bermitra dengan pemandu lokal, dan mendedikasikan kontribusi sosial dalam rangka kegiatan amal pendidikan."
  },
  simplicity: {
    title: "Kesederhanaan",
    desc: "Meresapi kehidupan yang santai. Kami mengajak para tamu untuk menikmati kehidupan pelan yang penuh makna (slow living) selama mereka menginap disini."
  }
};

en.aboutPage.readyToVisit = "Ready to visit?";
id.aboutPage.readyToVisit = "Siap untuk berkunjung?";

en.aboutPage.checkAvailabilityCTA = "Check Availability";
id.aboutPage.checkAvailabilityCTA = "Periksa Ketersediaan";

// Write back to files
fs.writeFileSync(enPath, JSON.stringify(en, null, 2), 'utf8');
fs.writeFileSync(idPath, JSON.stringify(id, null, 2), 'utf8');

console.log('Successfully updated JSON files');
