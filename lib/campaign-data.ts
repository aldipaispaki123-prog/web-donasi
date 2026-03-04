export const campaignData = {
  title: "Perjuangan Abah Alman di Usia 79 Tahun",
  subtitle: "Abah Alman: Menjual kerupuk seharga 5 ribu rupiah demi mendapatkan untung kecil, hanya 500 rupiah dari setiap bungkus yang laku",
  organizer: "Yayasan Berbagi",
  targetAmount: 150000000,
  collectedAmount: 100000,
  donorCount: 342,
  daysLeft: 28,
  createdAt: "15 Januari 2026",
  bankAccount: {
    bankName: "Bank Rakyat Indonesia (BRI)",
    accountNumber: "767801007674505",
    accountHolder: "An MARSIANUS KLAU",
  },
  ewallets: [
    { name: "GoPay", number: "081234567890" },
    { name: "OVO", number: "081234567890" },
    { name: "Dana", number: "081234567890" },
  ],
  story: `Sungguh pilu melihat kondisi dan perjuangan mbah alman, di usianya yang sudah ke 79 tahun, beliau masih harus terus berjuang untuk hidup. 

Setiap hari, tubuh renta abah jualan kerupuk dengan harga 5000/bungkus dan dapat upah sebesar Rp 500 perak/perbungkusnya. 

Gak kenal panas dan hujan abah terus berjuang. Bahkan, abah sering nahan lapar saat jualan. Bila sudah tak kuat nahan lapar, abah makan kerupuk jualannya sendiri

"Di balik renyahnya setiap keping kerupuk yang kita nikmati, ada peluh seorang kakek tua bernama Abah Alman. Ia tak butuh belas kasihan, ia hanya butuh dagangannya dihargai. Dari keuntungan 500 rupiah per bungkus, ia merajut asa untuk bertahan hidup di tengah kerasnya kota. Kadang kerupuknya habis, namun tak jarang pula ia harus pulang dengan beban yang masih sama beratnya."`,
  gallery: [
    { src: "/images/foto1.png", alt: "Karena kelelahan, Abah Alman tertidur pulas dalam posisi berteduh sambil menjadikan tangannya bantal, sementara panggulan kerupuk diletakkan di sampingnya" },
    { src: "/images/foto2.png", alt: "Lelah dan bingung, tatapan kosong Abah Alman menyiratkan beban berat karena kerupuk dagangannya hari ini belum juga ada yang membeli." },
    { src: "/images/foto3.png", alt: "Usia 79 tahun bukan waktu yang mudah untuk tetap berjualan di bawah guyuran hujan, namun bagi Abah Alman, ini adalah satu-satunya cara untuk bertahan hidup" },
  ],
  videoUrl: "https://www.youtube.com/embed/YESEr9a4NZw",
}

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function getProgressPercentage(): number {
  return Math.round((campaignData.collectedAmount / campaignData.targetAmount) * 100)
}
