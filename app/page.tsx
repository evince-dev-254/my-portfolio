import { PortfolioHeader } from "@/components/portfolio-header"
import { HackerHero } from "@/components/hacker-hero"
import { HackerAbout } from "@/components/hacker-about"
import { SkillsOverview } from "@/components/skills-overview"
import { HackerProjects } from "@/components/hacker-projects"
import { HackerAuth } from "@/components/hacker-auth"
import { HackerContact } from "@/components/hacker-contact"
import { TechBackground } from "@/components/tech-background"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30">
      <TechBackground />
      <PortfolioHeader />

      <main className="space-y-0 relative z-10">
        <HackerHero />

        <HackerAbout />

        <SkillsOverview />

        <HackerProjects />

        <HackerAuth />

        <HackerContact />
      </main>

      <Footer />
    </div>
  )
}
