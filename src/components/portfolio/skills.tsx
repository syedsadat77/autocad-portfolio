'use client'

import { motion } from 'framer-motion'
import { ScrambleText } from './scramble-text'

const skills = [
  { name: 'AutoCAD 2D', level: 95 },
  { name: 'AutoCAD 3D', level: 90 },
  { name: 'PEB Design', level: 92 },
  { name: 'Structural Detailing', level: 88 },
  { name: 'Equipment Design', level: 87 },
  { name: 'Machinery Parts', level: 85 },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-bg-static opacity-30 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-[11px] font-mono tracking-widest text-amber-500/70">[ 05 ]</span>
          <div className="section-divider flex-1" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            <ScrambleText text="TECHNICAL_SKILLS" trigger="inView" duration={1.2} className="gradient-text font-mono" />
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="glass-light rounded-sm p-5 group hover:glow-amber transition-all duration-300 cursor-default hud-bracket"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-mono text-sm group-hover:text-amber-500 transition-colors duration-300 tracking-wide">
                  {skill.name}
                </span>
                <motion.span
                  className="text-amber-500 text-sm font-mono font-semibold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                >
                  {skill.level}%
                </motion.span>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 relative"
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                      backgroundSize: '200% 100%',
                    }}
                    animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>
              </div>

              {/* Tick marks */}
              <div className="flex justify-between mt-1.5 text-[8px] font-mono text-amber-500/40">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
