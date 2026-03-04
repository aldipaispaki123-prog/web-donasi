import { campaignData } from "@/lib/campaign-data"

export function StorySection() {
  return (
    <section id="story" className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
          Kisah Abah Alman 
        </h2>
        <p className="mb-8 text-sm text-muted-foreground">
          Dipublikasikan pada {campaignData.createdAt}
        </p>

        <div className="space-y-4">
          {campaignData.story.split("\n\n").map((paragraph, index) => {
            if (paragraph.includes("- ")) {
              const lines = paragraph.split("\n")
              const intro = lines[0]
              const items = lines.slice(1)
              return (
                <div key={index}>
                  <p className="mb-3 leading-relaxed text-foreground">{intro}</p>
                  <ul className="space-y-2 pl-4">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 leading-relaxed text-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            }
            return (
              <p key={index} className="leading-relaxed text-foreground">
                {paragraph}
              </p>
            )
          })}
        </div>
      </div>
    </section>
  )
}
