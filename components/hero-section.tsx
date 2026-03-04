import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { campaignData } from "@/lib/campaign-data"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/gambar1.png"
          alt="Anak-anak belajar bersama"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-24 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs md:text-sm font-medium uppercase tracking-wide text-primary-foreground/80 break-words">
            {campaignData.organizer}
          </p>
          <h1 className="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-primary-foreground text-balance">
           {campaignData.title}
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-primary-foreground/90 text-pretty">
            {campaignData.subtitle}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="/donasi">
                Donasi Sekarang
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
            >
              <Link href="#story">Baca Selengkapnya</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
