import { Heart } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Heart className="h-4 w-4 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="font-semibold text-foreground">BerbagiKebaikan</span>
          </div>

          <nav className="flex items-center gap-6">
            <Link href="/#campaign" className="text-sm text-muted-foreground hover:text-foreground">
              Campaign
            </Link>
            <Link href="/#story" className="text-sm text-muted-foreground hover:text-foreground">
              Cerita
            </Link>
            <Link href="/donasi" className="text-sm text-muted-foreground hover:text-foreground">
              Donasi
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            {"2026 BerbagiKebaikan. Semua hak dilindungi."}
          </p>
        </div>
      </div>
    </footer>
  )
}
