import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DonationForm } from "@/components/donation-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Donasi - BerbagiKebaikan",
  description: "Kirim donasi Anda untuk mendukung pendidikan anak-anak pedalaman Kalimantan.",
}

export default function DonasiPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <DonationForm />
      </main>
      <SiteFooter />
    </div>
  )
}
