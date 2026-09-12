'use client'

import { motion } from 'framer-motion'
import { ScrambleText } from './scramble-text'

const timeline = [
  {
    year: '2020',
    title: 'Started AutoCAD Journey',
    description: 'Began professional training in AutoCAD 2D drafting and 3D modeling fundamentals.',
    side: 'left',
  },
  {
    year: '2021',
    title: 'PEB Structure Specialist',
    description: 'Specialized in Pre-Engineered Building design — main frames, secondary members, bracing.',
    side: 'right',
  },
  {
    year: '2022',
    title: 'Equipment Parts Designer',
    description: 'Expanded into industrial equipment parts design with detailed assembly drawings.',
    side: 'left',
  },
  {
    year: '2023',
    title: '3D Machinery Modeling',
    description: 'Mastered 3D machinery part modeling — isometric views, section views, exploded assemblies.',
    side: 'right',
  },
  {
    year: '2024',
    title: 'Senior CAD Designer',
    description: 'Reached senior level — delivering 20+ projects with 12+ happy clients worldwide.',
    side: 'left',
  },
  {
    year: 'NOW',
    title: 'Continuing the Craft',
    description: 'Currently accepting new projects and pushing the limits of CAD precision design.',
    side: 'right',
  },
]

export function Timeline() {
  return (
    <section id="timeline" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-bg-static opacity-30 z-0" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-[11px] font-mono tracking-widest text-amber-500/70">[ 04 ]</span>
          <div className="section-divider flex-1" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            <ScrambleText text="CAREER_TIMELINE" trigger="inView" duration={1.2} className="gradient-text font-mono" />
          </h2>
        </div>

        {/* Vertical center line */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-500/40 to-transparent" />

          {/* Timeline items — serpentine pattern */}
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative flex items-center ${
                  item.side === 'left'
                    ? 'md:flex-row-reverse'
                    : 'md:flex-row'
                }`}
              >
                {/* Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05, type: 'spring', stiffness: 300 }}
                    className="w-4 h-4 rounded-full bg-amber-500 ring-4 ring-amber-500/20 glow-amber"
                  />
                </div>

                {/* Card */}
                <div className={`pl-12 md:pl-0 w-full md:w-1/2 ${
                  item.side === 'left' ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-sm p-5 hud-bracket hover:glow-amber transition-all duration-300"
                  >
                    <span className="text-[10px] font-mono tracking-widest text-amber-500/70">
                      YEAR_{item.year}
                    </span>
                    <h3 className="text-base font-semibold text-white mt-1 mb-2 font-mono">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Empty spacer */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-4 left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 rotate-45 border-2 border-amber-500 bg-[#050505]"
          />
        </div>
      </div>
    </section>
  )
}
