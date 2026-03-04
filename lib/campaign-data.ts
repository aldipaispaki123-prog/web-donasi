export const campaignData = {
  title: "Perjuangan Abah Alman: Menjual kerupuk seharga 5 ribu rupiah demi mendapatkan untung kecil, hanya 500 rupiah dari setiap bungkus yang laku",
  subtitle: "Ayo Bersama Bantu Abah Alman Di usia 79 tahun, Abah Alman masih harus berjuang menjajakan kerupuk dengan keuntungan hanya Rp500 per bungkus. Jangan biarkan beliau berjuang sendirian di masa tuanya",
  organizer: "Yayasan BerbagiKebaikan",
  targetAmount: 150000000,
  collectedAmount: 100000,
  donorCount: 342,
  daysLeft: 28,
  createdAt: "15 Januari 2026",
  bankAccount: {
    bankName: "Bank Central Asia (BCA)",
    accountNumber: "1234567890",
    accountHolder: "Yayasan BerbagiKebaikan",
  },
  ewallets: [
    { name: "GoPay", number: "081234567890" },
    { name: "OVO", number: "081234567890" },
    { name: "Dana", number: "081234567890" },
  ],
  story: `Sungguh pilu melihat kondisi dan perjuangan mbah alman, di usianya yang sudah ke 79 tahun, beliau masih harus terus berjuang untuk hidup. 

Setiap hari, tubuh renta abah jualan kerupuk dengan harga 5000/bungkus dan dapat upah sebesar Rp 500 perak/perbungkusnya. 

Gak kenal panas dan hujan abah terus berjuang. Bahkan, abah sering nahan lapar saat jualan. Bila sudah tak kuat nahan lapar, abah makan kerupuk jualannya sendiri

Adapun Kondisi Tempat Tinggal
Abah Alman biasanya tinggal di sebuah hunian yang sangat sederhana, yang sering kali jauh dari kata layak. Beberapa poin yang sering menonjol dalam kisahnya adalah:

Ruangan Terbatas: Biasanya tinggal di sebuah kontrakan petak atau kamar kecil yang berfungsi sekaligus sebagai tempat tidur, dapur, dan tempat menyimpan stok kerupuk dagangannya.

Fasilitas Seadanya: Lantai yang mungkin hanya semen kasar atau beralaskan tikar tipis, dengan dinding yang sudah kusam. Penerangan dan ventilasi pun sering kali sangat minim.

Lingkungan Padat: Rumahnya biasanya terletak di pemukiman padat penduduk atau gang-gang sempit yang tersembunyi dari keramaian kota.

"Di balik renyahnya setiap keping kerupuk yang kita nikmati, ada peluh seorang kakek tua bernama Abah Alman. Ia tak butuh belas kasihan, ia hanya butuh dagangannya dihargai. Dari keuntungan 500 rupiah per bungkus, ia merajut asa untuk bertahan hidup di tengah kerasnya kota. Kadang kerupuknya habis, namun tak jarang pula ia harus pulang dengan beban yang masih sama beratnya."`,
  gallery: [
    { src: "/images/foto1.png", alt: "Karena kelelahan, Abah Alman tertidur pulas dalam posisi berteduh sambil menjadikan tangannya bantal, sementara panggulan kerupuk diletakkan di sampingnya" },
    { src: "/images/foto2.png", alt: "Lelah dan bingung, tatapan kosong Abah Alman menyiratkan beban berat karena kerupuk dagangannya hari ini belum juga ada yang membeli." },
    { src: "/images/foto3.png", alt: "Usia 79 tahun bukan waktu yang mudah untuk tetap berjualan di bawah guyuran hujan, namun bagi Abah Alman, ini adalah satu-satunya cara untuk bertahan hidup" },
  ],
  videoUrl: "https://www.youtube.com/embed/Hc8BCOFny6k",
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
