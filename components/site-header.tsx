"use client"

import Link from "next/link"
import { Heart, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Heart className="h-5 w-5 text-primary-foreground" fill="currentColor" />
          </div>
          <span className="text-lg font-semibold text-foreground">BerbagiKebaikan</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/#campaign" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Campaign
          </Link>
          <Link href="/#story" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Cerita
          </Link>
          <Link href="/#gallery" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Galeri
          </Link>
          <Button asChild size="sm">
            <Link href="/donasi">Donasi Sekarang</Link>
          </Button>
        </nav>

        <button
          className="flex items-center justify-center md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-card px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            <Link
              href="/#campaign"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Campaign
            </Link>
            <Link
              href="/#story"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cerita
            </Link>
            <Link
              href="/#gallery"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Galeri
            </Link>
            <Button asChild size="sm" className="w-full">
              <Link href="/donasi" onClick={() => setMobileMenuOpen(false)}>
                Donasi Sekarang
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
