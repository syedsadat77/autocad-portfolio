'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ScrambleText } from './scramble-text'

const stats = [
  { label: 'YEARS_EXP', value: 5, suffix: '+' },
  { label: 'PROJECTS', value: 20, suffix: '+' },
  { label: 'CLIENTS', value: 12, suffix: '+' },
  { label: 'CAD_MODELS', value: 100, suffix: '+' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className="font-mono text-3xl md:text-4xl font-bold gradient-text text-glow">
      {count}{suffix}
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-bg-static opacity-40 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-[11px] font-mono tracking-widest text-amber-500/70">[ 01 ]</span>
          <div className="section-divider flex-1" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            <ScrambleText text="ABOUT_OPERATOR" trigger="inView" duration={1.2} className="gradient-text font-mono" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: Profile with animated HUD frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-sm md:max-w-md"
          >
            <div className="relative aspect-[3/4] w-full">
              {/* Rotating conic gradient border */}
              <motion.div
                className="absolute -inset-1.5 rounded-sm"
                style={{
                  background:
                    'conic-gradient(from 0deg, #f59e0b, #f97316, transparent, #f59e0b)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute inset-[2px] rounded-sm bg-[#050505]" />
              </motion.div>

              {/* Pulsing glow */}
              <motion.div
                className="absolute -inset-3 rounded-sm bg-gradient-to-br from-amber-500/20 to-orange-500/20 blur-md"
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Floating image */}
              <motion.div
                className="relative rounded-sm overflow-hidden h-full w-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image
                  src="/images/about-portrait.jpeg"
                  alt="SYED - Professional AutoCAD Designer"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />
                {/* Scan line overlay */}
                <motion.div
                  className="absolute inset-x-0 h-12 bg-gradient-to-b from-amber-500/20 to-transparent"
                  animate={{ top: ['-10%', '110%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>

              {/* HUD overlays on portrait */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-amber-500/70 tracking-widest">
                ID: 001
              </div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-amber-500/70 tracking-widest">
                SCAN
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-amber-500/70 tracking-widest">
                <span>STATUS: ONLINE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 blink" />
              </div>

              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-amber-500" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-amber-500" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-amber-500" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-amber-500" />
            </div>

            {/* Data strip below portrait */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-4 glass-light px-4 py-2 font-mono text-[10px] tracking-widest text-amber-500/70 flex items-center justify-between"
            >
              <span>SUBJECT: SYED</span>
              <span>ROLE: CAD_OPERATOR</span>
            </motion.div>
          </motion.div>

          {/* RIGHT: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="font-mono text-xs text-amber-500/70 tracking-widest">
              {'> '}EXECUTING_BIO.LOAD
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
              Crafting precision in{' '}
              <span className="gradient-text">every line</span> — turning
              complex ideas into production-ready CAD designs.
            </h3>

            <div className="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
              <p>
                Hi, I&apos;m <span className="text-amber-500 font-medium">SYED</span> —
                a passionate AutoCAD designer with 5+ years of hands-on
                experience specializing in Pre-Engineered Building (PEB)
                structures, equipment parts design, and 2D/3D machinery
                part modeling.
              </p>
              <p>
                From detailed PEB structural frameworks to complex equipment
                assemblies and precise machinery components, I approach every
                project with meticulous attention to detail — delivering CAD
                solutions that meet the highest industry standards for
                fabrication and manufacturing teams.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="glass-light px-3 py-4 hud-bracket group hover:glow-amber transition-all duration-300 cursor-default"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-[10px] font-mono tracking-widest text-gray-500 mt-2 group-hover:text-amber-500/70 transition-colors">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
