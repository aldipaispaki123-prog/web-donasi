import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { CampaignStats } from "@/components/campaign-stats"
import { StorySection } from "@/components/story-section"
import { GallerySection } from "@/components/gallery-section"
import { VideoSection } from "@/components/video-section"
import { CtaSection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <CampaignStats />
        <StorySection />
        <GallerySection />
        <VideoSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
