'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ScrambleText } from './scramble-text'

const categories = [
  { id: 'all', label: 'ALL' },
  { id: 'peb', label: 'PEB' },
  { id: 'equipment', label: 'EQUIPMENT' },
  { id: 'machinery', label: 'MACHINERY' },
]

const projects = [
  {
    title: 'PEB Warehouse Structure',
    image: '/images/project-peb.png',
    category: 'peb',
    description: 'Complete structural design of a pre-engineered warehouse with bolted connections',
    code: 'PRJ-001',
  },
  {
    title: 'PEB Industrial Shed',
    image: '/images/project-peb-shed.png',
    category: 'peb',
    description: 'Large span portal frame industrial shed with detailed purlins and girts design',
    code: 'PRJ-002',
  },
  {
    title: 'PEB Crane Building',
    image: '/images/project-peb-crane.png',
    category: 'peb',
    description: 'Steel frame structure with crane runway and overhead crane support system',
    code: 'PRJ-003',
  },
  {
    title: 'Equipment Parts Assembly',
    image: '/images/project-equipment.png',
    category: 'equipment',
    description: '2D drafting of industrial equipment components and sub-assemblies',
    code: 'PRJ-004',
  },
  {
    title: 'Floor Plan Layout',
    image: '/images/project-floorplan.png',
    category: 'equipment',
    description: 'Detailed industrial floor plan with equipment placement and dimensions',
    code: 'PRJ-005',
  },
  {
    title: 'Gear Assembly System',
    image: '/images/project-gear-assembly.png',
    category: 'machinery',
    description: 'Precision gear train with shafts and bearings for mechanical transmission',
    code: 'PRJ-006',
  },
  {
    title: 'Hydraulic Press Design',
    image: '/images/project-hydraulic-press.png',
    category: 'machinery',
    description: 'Heavy-duty hydraulic press machine with cylinder and frame structure',
    code: 'PRJ-007',
  },
  {
    title: 'Conveyor System',
    image: '/images/project-conveyor.png',
    category: 'machinery',
    description: 'Industrial roller conveyor with support structure and drive mechanism',
    code: 'PRJ-008',
  },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const marqueeRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: marqueeRef,
    offset: ['start end', 'end start'],
  })
  const marqueeX = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-static opacity-30 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-[11px] font-mono tracking-widest text-amber-500/70">[ 03 ]</span>
          <div className="section-divider flex-1" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            <ScrambleText text="PORTFOLIO_ARCHIVE" trigger="inView" duration={1.2} className="gradient-text font-mono" />
          </h2>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-start gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 text-[11px] font-mono tracking-widest rounded-sm border transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-black border-amber-500 glow-amber'
                  : 'border-amber-500/30 text-amber-500/70 hover:text-amber-500 hover:border-amber-500/60 hover:bg-amber-500/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative rounded-sm overflow-hidden cursor-pointer aspect-[4/3] glass hud-bracket"
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale-[60%]"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

                {/* Amber hover tint */}
                <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top code badge */}
                <div className="absolute top-3 left-3 text-[9px] font-mono text-amber-500/80 tracking-widest glass-light px-2 py-1">
                  {project.code}
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <div className="transform transition-all duration-500 group-hover:-translate-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-amber-500 mb-1 block">
                      {categories.find((c) => c.id === project.category)?.label}
                    </span>
                    <h3 className="text-sm font-semibold text-white mb-1 font-mono">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 rounded-sm border-2 border-amber-500/0 group-hover:border-amber-500/40 transition-all duration-300" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-6 h-6 overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-amber-500/40 translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:-translate-y-0 transition-transform duration-500 rotate-45" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll-scrubbed marquee of project names */}
      <div ref={marqueeRef} className="mt-20 py-8 border-y border-amber-500/15 overflow-hidden">
        <motion.div
          style={{ x: marqueeX }}
          className="flex gap-8 whitespace-nowrap font-mono text-amber-500/30 text-4xl md:text-6xl font-bold tracking-tight"
        >
          {[...projects, ...projects, ...projects, ...projects].map((p, i) => (
            <span key={i} className="flex items-center gap-8">
              {p.title.toUpperCase()}
              <span className="text-amber-500/60">/</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
