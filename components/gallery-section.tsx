import Image from "next/image"
import { campaignData } from "@/lib/campaign-data"

export function GallerySection() {
  return (
    <section id="gallery" className="bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
        <h2 className="mb-2 text-center text-2xl font-bold text-card-foreground md:text-3xl">
          Foto Abah Alman Berjualan
        </h2>
        <p className="mb-10 text-center text-muted-foreground">
          Meski tubuh sudah renta dan hujan mengguyur, Abah Alman tetap melangkah demi menjemput rezeki 500 rupiah
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {campaignData.gallery.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium text-primary-foreground">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
