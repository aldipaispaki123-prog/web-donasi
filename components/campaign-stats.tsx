"use client"

import Link from "next/link"
import { Heart, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { campaignData, formatRupiah, getProgressPercentage } from "@/lib/campaign-data"

export function CampaignStats() {
  const percentage = getProgressPercentage()

  return (
    <section id="campaign" className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
      <Card className="overflow-hidden border-border shadow-lg">
        <CardContent className="p-6 md:p-8">
          <div className="mb-6 flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-card-foreground md:text-3xl text-balance">
              {campaignData.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              Diselenggarakan oleh {campaignData.organizer}
            </p>
          </div>

          <div className="mb-4">
            <div className="mb-2 flex items-end justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Terkumpul</p>
                <p className="text-2xl font-bold text-primary md:text-3xl">
                  {formatRupiah(campaignData.collectedAmount)}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                dari {formatRupiah(campaignData.targetAmount)}
              </p>
            </div>
            <Progress value={percentage} className="h-3 rounded-full" />
            <p className="mt-1 text-right text-sm font-medium text-primary">
              {percentage}%
            </p>
          </div>

          <div className="mb-8 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center rounded-xl bg-secondary p-4">
              <Heart className="mb-2 h-5 w-5 text-primary" />
              <p className="text-lg font-bold text-card-foreground">{campaignData.donorCount}</p>
              <p className="text-xs text-muted-foreground">Donatur</p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-secondary p-4">
              <Calendar className="mb-2 h-5 w-5 text-primary" />
              <p className="text-lg font-bold text-card-foreground">{campaignData.daysLeft}</p>
              <p className="text-xs text-muted-foreground">Hari Lagi</p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-secondary p-4">
              <Users className="mb-2 h-5 w-5 text-primary" />
              <p className="text-lg font-bold text-card-foreground">{campaignData.organizer.split(" ").pop()}</p>
              <p className="text-xs text-muted-foreground">Penyelenggara</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="flex-1">
              <Link href="/donasi">Donasi Sekaran</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1"
              onClick={() => {
                const text = encodeURIComponent(
                  `Bantu donasi untuk ${campaignData.title}! ${window.location.href}`
                )
                window.open(`https://wa.me/?text=${text}`, "_blank")
              }}
            >
              Bagikan
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
