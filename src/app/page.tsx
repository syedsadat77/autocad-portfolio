'use client'

import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Services } from '@/components/portfolio/services'
import { Projects } from '@/components/portfolio/projects'
import { Timeline } from '@/components/portfolio/timeline'
import { Skills } from '@/components/portfolio/skills'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'
import { HudOverlay } from '@/components/portfolio/hud-overlay'
import { CustomCursor } from '@/components/portfolio/custom-cursor'
import { SmoothScroll } from '@/components/portfolio/smooth-scroll'

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-[#050505] relative">
        <CustomCursor />
        <HudOverlay />
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Services />
          <Projects />
          <Timeline />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}
