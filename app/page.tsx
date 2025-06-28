"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ResearchSection } from "@/components/research-section"
import { TeamSection } from "@/components/team-section"
import { FacilitiesSection } from "@/components/facilities-section"
import { CollaborationsSection } from "@/components/collaborations-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function LanguageCognitionLab() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={scrollToSection} />
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <TeamSection />
      <FacilitiesSection />
      <CollaborationsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
