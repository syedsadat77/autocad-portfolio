'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, Box, Layers, MousePointerClick } from 'lucide-react'
import { ScrambleText } from './scramble-text'

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [autoRotate, setAutoRotate] = useState(true)
  const rotX = useMotionValue(15)
  const rotY = useMotionValue(20)

  // Smooth springs for the rotation
  const smoothRotX = useSpring(rotX, { damping: 30, stiffness: 150 })
  const smoothRotY = useSpring(rotY, { damping: 30, stiffness: 150 })

  // Mouse-tracked tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / rect.width
      const dy = (e.clientY - cy) / rect.height
      rotX.set(15 - dy * 20)
      rotY.set(20 + dx * 30)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [rotX, rotY])

  // Auto-rotate when mouse is idle
  useEffect(() => {
    if (!autoRotate) return
    let angle = 20
    const interval = setInterval(() => {
      angle += 0.4
      rotY.set(angle)
    }, 50)
    return () => clearInterval(interval)
  }, [autoRotate, rotY])

  const resetTilt = () => {
    setAutoRotate(true)
    rotX.set(15)
    rotY.set(20)
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={() => setAutoRotate(false)}
      onMouseLeave={resetTilt}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg z-0" />

      {/* Radial amber glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center pt-16 pb-16">

        {/* LEFT: Text content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-light rounded-full px-4 py-1.5 mb-6 hud-bracket"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 blink" />
            <span className="text-[10px] font-mono tracking-widest text-amber-500">
              AUTOCAD · PEB · 2D/3D
            </span>
          </motion.div>

          {/* Main title with scramble */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-4 tracking-tight">
            <span className="block text-white">
              <ScrambleText text="SYED" duration={1.4} />
            </span>
            <span className="block gradient-text text-glow mt-2">
              <ScrambleText text="AUTOCAD DESIGNER" duration={1.6} />
            </span>
          </h1>

          {/* Subtitle with scramble */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="font-mono text-sm text-amber-500/80 tracking-wider mb-4"
          >
            {'> '}PRECISION DRAFTING · 2D &amp; 3D MODELING
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 text-base leading-relaxed"
          >
            Transforming concepts into production-ready technical drawings and
            3D models — specializing in PEB structures, equipment parts, and
            machinery components.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              onClick={() => {
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group relative px-7 py-3.5 bg-amber-500 text-black font-semibold text-sm tracking-wide rounded-sm overflow-hidden hud-bracket"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Layers className="h-4 w-4" />
                VIEW PORTFOLIO
              </span>
            </motion.button>
            <motion.button
              onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-7 py-3.5 border border-amber-500/40 text-amber-500 font-semibold text-sm tracking-wide rounded-sm hover:bg-amber-500/10 transition-all duration-300 hud-bracket"
            >
              INITIATE CONTACT
            </motion.button>
          </motion.div>

          {/* Tech tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6 }}
            className="flex flex-wrap gap-2 justify-center lg:justify-start mt-8"
          >
            {['AutoCAD 2D', 'AutoCAD 3D', 'PEB Design', 'Machinery', 'Equipment'].map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-1 border border-amber-500/20 text-amber-500/70 rounded-sm tracking-wider"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: 3D wireframe CAD centerpiece */}
        <div className="order-1 lg:order-2 flex items-center justify-center h-[320px] sm:h-[420px] lg:h-[560px] relative">
          {/* Wireframe cube/sphere CSS 3D */}
          <motion.div
            className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[440px] lg:h-[440px]"
            style={{
              perspective: 1000,
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                rotateX: smoothRotX,
                rotateY: smoothRotY,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* 6 faces of the cube — each a wireframe CAD drawing */}
              {[
                { translate: 'translateZ(130px) translate(-50%,-50%)', image: 'gear' },
                { translate: 'translateZ(-130px) rotateY(180deg) translate(-50%,-50%)', image: 'building' },
                { translate: 'rotateY(90deg) translateZ(130px) translate(-50%,-50%)', image: 'floorplan' },
                { translate: 'rotateY(-90deg) translateZ(130px) translate(-50%,-50%)', image: 'assembly' },
                { translate: 'rotateX(90deg) translateZ(130px) translate(-50%,-50%)', image: 'bracing' },
                { translate: 'rotateX(-90deg) translateZ(130px) translate(-50%,-50%)', image: 'shaft' },
              ].map((face, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[440px] lg:h-[440px] border border-amber-500/40"
                  style={{
                    transform: face.translate,
                    transformStyle: 'preserve-3d',
                    background:
                      'linear-gradient(135deg, rgba(245,158,11,0.04), rgba(15,15,15,0.6))',
                    boxShadow: 'inset 0 0 40px rgba(245,158,11,0.08)',
                  }}
                >
                  {/* CAD wireframe drawing on each face */}
                  <WireframeFace type={face.image} />
                </div>
              ))}

              {/* Inner cross wires */}
              <div className="absolute top-1/2 left-1/2 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[440px] lg:h-[440px] -translate-x-1/2 -translate-y-1/2 border border-amber-500/20" style={{ transform: 'translateZ(0px) translate(-50%,-50%)' }} />
            </motion.div>
          </motion.div>

          {/* Hint chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] font-mono text-amber-500/70 tracking-widest glass-light px-3 py-1.5 rounded-sm"
          >
            <MousePointerClick className="h-3 w-3" />
            MOVE MOUSE TO TILT
          </motion.div>

          {/* Corner labels */}
          <div className="absolute top-2 left-2 text-[10px] font-mono text-amber-500/50 tracking-widest">
            [ 001 ]
          </div>
          <div className="absolute top-2 right-2 text-[10px] font-mono text-amber-500/50 tracking-widest">
            WIREFRAME
          </div>
          <div className="absolute bottom-8 right-2 text-[10px] font-mono text-amber-500/50 tracking-widest">
            ISO VIEW
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => {
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 text-amber-500/60 hover:text-amber-500 transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <ArrowDown className="h-4 w-4" />
          <span className="text-[9px] font-mono tracking-widest">SCROLL</span>
        </motion.div>
      </motion.button>
    </section>
  )
}

/* ===== Wireframe SVG drawings for cube faces ===== */
function WireframeFace({ type }: { type: string }) {
  const stroke = '#f59e0b'
  const strokeOpacity = 0.55
  const common = {
    fill: 'none',
    stroke,
    strokeOpacity,
    strokeWidth: 1,
  }

  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Corner ticks for CAD feel */}
      <g stroke={stroke} strokeOpacity={0.4} strokeWidth={0.8}>
        <line x1="0" y1="8" x2="8" y2="8" />
        <line x1="8" y1="0" x2="8" y2="8" />
        <line x1="192" y1="8" x2="200" y2="8" />
        <line x1="192" y1="0" x2="192" y2="8" />
        <line x1="0" y1="192" x2="8" y2="192" />
        <line x1="8" y1="192" x2="8" y2="200" />
        <line x1="192" y1="192" x2="200" y2="192" />
        <line x1="192" y1="192" x2="192" y2="200" />
      </g>

      {/* Title block */}
      <text x="12" y="190" fill={stroke} fillOpacity={0.6} fontSize="6" fontFamily="monospace">
        {type.toUpperCase()}
      </text>
      <text x="190" y="190" textAnchor="end" fill={stroke} fillOpacity={0.4} fontSize="6" fontFamily="monospace">
        CAD.DWG
      </text>

      {/* Drawings per type */}
      {type === 'gear' && (
        <g {...common}>
          <circle cx="100" cy="100" r="55" />
          <circle cx="100" cy="100" r="20" />
          <circle cx="100" cy="100" r="3" fill={stroke} fillOpacity={0.5} />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180
            const x1 = 100 + Math.cos(angle) * 55
            const y1 = 100 + Math.sin(angle) * 55
            const x2 = 100 + Math.cos(angle) * 65
            const y2 = 100 + Math.sin(angle) * 65
            return (
              <g key={i}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} />
                <rect
                  x={x2 - 4}
                  y={y2 - 4}
                  width="8"
                  height="8"
                  transform={`rotate(${i * 30} ${x2} ${y2})`}
                />
              </g>
            )
          })}
          <line x1="45" y1="100" x2="155" y2="100" strokeDasharray="3 3" strokeOpacity={0.3} />
          <line x1="100" y1="45" x2="100" y2="155" strokeDasharray="3 3" strokeOpacity={0.3} />
        </g>
      )}

      {type === 'building' && (
        <g {...common}>
          {/* PEB building outline */}
          <polygon points="20,140 100,60 180,140 180,160 20,160" />
          <line x1="20" y1="140" x2="180" y2="140" />
          {/* Portal frames */}
          {[40, 70, 100, 130, 160].map((x, i) => (
            <g key={i}>
              <line x1={x} y1={140 - Math.abs(100 - x) * 0.7} x2={x} y2="160" />
              <line x1={x} y1="140 - Math.abs(100 - x) * 0.7" x2="100" y2="60" strokeOpacity={0.25} />
            </g>
          ))}
          {/* Roof slope lines */}
          <line x1="20" y1="140" x2="100" y2="60" />
          <line x1="180" y1="140" x2="100" y2="60" />
          {/* Ground */}
          <line x1="10" y1="160" x2="190" y2="160" strokeWidth="1.5" />
          <line x1="10" y1="164" x2="190" y2="164" strokeOpacity={0.3} />
        </g>
      )}

      {type === 'floorplan' && (
        <g {...common}>
          {/* Floor plan walls */}
          <rect x="30" y="40" width="140" height="120" />
          <line x1="100" y1="40" x2="100" y2="100" />
          <line x1="30" y1="100" x2="170" y2="100" />
          <line x1="100" y1="100" x2="100" y2="160" strokeDasharray="2 2" strokeOpacity={0.4} />
          {/* Door arcs */}
          <path d="M 100 40 A 15 15 0 0 1 115 55" strokeOpacity={0.4} />
          <path d="M 60 100 A 15 15 0 0 1 75 115" strokeOpacity={0.4} />
          {/* Dimensions */}
          <line x1="30" y1="30" x2="170" y2="30" strokeOpacity={0.3} />
          <line x1="30" y1="28" x2="30" y2="32" strokeOpacity={0.3} />
          <line x1="170" y1="28" x2="170" y2="32" strokeOpacity={0.3} />
          <text x="100" y="27" textAnchor="middle" fill={stroke} fillOpacity={0.5} fontSize="6" fontFamily="monospace">
            14000
          </text>
        </g>
      )}

      {type === 'assembly' && (
        <g {...common}>
          {/* Exploded assembly view */}
          <circle cx="100" cy="40" r="20" />
          <rect x="80" y="70" width="40" height="20" />
          <circle cx="100" cy="110" r="25" />
          <rect x="70" y="145" width="60" height="15" />
          {/* Assembly lines */}
          <line x1="100" y1="60" x2="100" y2="70" strokeDasharray="2 2" strokeOpacity={0.4} />
          <line x1="100" y1="90" x2="100" y2="85" strokeDasharray="2 2" strokeOpacity={0.4} />
          <line x1="100" y1="135" x2="100" y2="145" strokeDasharray="2 2" strokeOpacity={0.4} />
          {/* Part numbers */}
          <text x="135" y="45" fill={stroke} fillOpacity={0.5} fontSize="5" fontFamily="monospace">1</text>
          <text x="135" y="85" fill={stroke} fillOpacity={0.5} fontSize="5" fontFamily="monospace">2</text>
          <text x="135" y="115" fill={stroke} fillOpacity={0.5} fontSize="5" fontFamily="monospace">3</text>
          <text x="135" y="155" fill={stroke} fillOpacity={0.5} fontSize="5" fontFamily="monospace">4</text>
        </g>
      )}

      {type === 'bracing' && (
        <g {...common}>
          {/* X-bracing pattern */}
          <line x1="30" y1="40" x2="170" y2="160" />
          <line x1="170" y1="40" x2="30" y2="160" />
          <line x1="100" y1="100" x2="100" y2="100" />
          {/* Frame */}
          <rect x="30" y="40" width="140" height="120" strokeOpacity={0.5} />
          {/* Gusset plates */}
          <circle cx="100" cy="100" r="10" fill="rgba(245,158,11,0.1)" />
          <circle cx="100" cy="100" r="10" />
          <circle cx="30" cy="40" r="5" />
          <circle cx="170" cy="40" r="5" />
          <circle cx="30" cy="160" r="5" />
          <circle cx="170" cy="160" r="5" />
        </g>
      )}

      {type === 'shaft' && (
        <g {...common}>
          {/* Shaft with bearings */}
          <rect x="20" y="90" width="160" height="20" />
          <circle cx="50" cy="100" r="22" />
          <circle cx="150" cy="100" r="22" />
          <rect x="80" y="80" width="40" height="40" strokeOpacity={0.6} />
          {/* Center line */}
          <line x1="10" y1="100" x2="190" y2="100" strokeDasharray="5 2 2 2" strokeOpacity={0.4} />
          {/* Keyway */}
          <rect x="95" y="88" width="10" height="4" fill={stroke} fillOpacity={0.4} stroke="none" />
          {/* Dimensions */}
          <line x1="50" y1="70" x2="150" y2="70" strokeOpacity={0.3} />
          <text x="100" y="65" textAnchor="middle" fill={stroke} fillOpacity={0.5} fontSize="6" fontFamily="monospace">
            100.00
          </text>
        </g>
      )}
    </svg>
  )
}
