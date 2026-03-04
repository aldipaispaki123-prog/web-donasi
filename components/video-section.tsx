import { campaignData } from "@/lib/campaign-data"

export function VideoSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
      <h2 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl">
        Video Singkat Abah Berjualan
      </h2>
      <p className="mb-10 text-center text-muted-foreground">
        Saksikan kisah perjuangan dan harapan anak-anak pedalaman
      </p>

      <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border shadow-lg">
        <div className="relative aspect-video">
          <iframe
            src={campaignData.videoUrl}
            title="Video Singkat Abah Berjualan"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </section>
  )
}
