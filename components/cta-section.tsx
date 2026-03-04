import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center lg:px-8">
        <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-4xl text-balance">
          Setiap Rupiah Anda Berarti
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-primary-foreground/85 leading-relaxed text-pretty">
          Jadilah bagian dari perubahan. Donasi Anda, sekecil apapun, akan memberikan
          dampak besar bagi masa depan anak-anak yang membutuhkan.
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="gap-2"
        >
          <Link href="/donasi">
            Donasi Sekarang
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
