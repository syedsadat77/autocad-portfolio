'use client'

import { motion } from 'framer-motion'
import { Building2, Cog, Box } from 'lucide-react'
import { ScrambleText } from './scramble-text'

const services = [
  {
    id: '01',
    icon: Building2,
    title: 'PEB STRUCTURE DESIGN',
    description:
      'Comprehensive design of Pre-Engineered Building structures including main frames, secondary members, bracing systems, and connection details with precise fabrication drawings.',
    features: [
      'Main Frame Design',
      'Secondary Members',
      'Bracing Systems',
      'Connection Details',
    ],
  },
  {
    id: '02',
    icon: Cog,
    title: 'EQUIPMENT PARTS DESIGN',
    description:
      'Detailed 2D drafting and modeling of industrial equipment components, assemblies, and sub-assemblies with tolerance specifications and bill of materials.',
    features: [
      'Part Detailing',
      'Assembly Drawings',
      'BOM Preparation',
      'Tolerance Specs',
    ],
  },
  {
    id: '03',
    icon: Box,
    title: '2D/3D MACHINERY PARTS',
    description:
      'Creating accurate 2D technical drawings and 3D models of machinery components including isometric views, section views, and exploded assemblies.',
    features: [
      '3D Modeling',
      'Isometric Views',
      'Section Views',
      'Exploded Assemblies',
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-bg-static opacity-30 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-[11px] font-mono tracking-widest text-amber-500/70">[ 02 ]</span>
          <div className="section-divider flex-1" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            <ScrambleText text="SERVICES_OFFERED" trigger="inView" duration={1.2} className="gradient-text font-mono" />
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="glass rounded-sm p-6 lg:p-8 group relative overflow-hidden hud-bracket hover:glow-amber transition-all duration-500"
              >
                {/* Hover gradient bg */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* ID + Icon row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono tracking-widest text-amber-500/60">
                      MODULE_{service.id}
                    </span>
                    <motion.div
                      className="w-12 h-12 rounded-sm bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-all duration-300"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Icon className="h-6 w-6 text-amber-500" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-amber-500 transition-colors duration-300 font-mono tracking-wide">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, fi) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-2 text-xs font-mono text-gray-500 group-hover:text-gray-300 transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + fi * 0.05 }}
                      >
                        <span className="w-1.5 h-1.5 bg-amber-500/60 group-hover:bg-amber-500 transition-colors" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Corner accent */}
                  <div className="absolute bottom-2 right-2 text-[9px] font-mono text-amber-500/40 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    [ACTIVE]
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
