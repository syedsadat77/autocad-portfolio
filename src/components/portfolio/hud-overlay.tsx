'use client'

import { useEffect, useState } from 'react'

const STATUSES = [
  'SYSTEM ONLINE',
  'CAD ENGINE ACTIVE',
  'DRAFTING MODULE READY',
  'RENDERING PIPELINE OK',
  'AWAITING INPUT',
]

export function HudOverlay() {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [statusIdx, setStatusIdx] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      const hh = String(now.getHours()).padStart(2, '0')
      const mm = String(now.getMinutes()).padStart(2, '0')
      const ss = String(now.getSeconds()).padStart(2, '0')
      setTime(`${hh}:${mm}:${ss}`)
      setDate(now.toLocaleDateString('en-US', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }).toUpperCase())
    }
    updateClock()
    const clockTimer = setInterval(updateClock, 1000)

    const statusTimer = setInterval(() => {
      setStatusIdx((i) => (i + 1) % STATUSES.length)
    }, 3500)

    const onScroll = () => {
      const scrolled = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? (scrolled / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      clearInterval(clockTimer)
      clearInterval(statusTimer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      {/* Scanline */}
      <div className="scanline" aria-hidden="true" />

      {/* Top HUD bar */}
      <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
        <div className="flex items-center justify-between px-4 py-2 text-[10px] font-mono text-amber-500/70 tracking-widest">
          <div className="flex items-center gap-2 pointer-events-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 blink" />
            <span>{STATUSES[statusIdx]}</span>
          </div>
          <div className="hidden md:flex items-center gap-3 pointer-events-auto">
            <span>LAT: 17.3850°N</span>
            <span>LON: 78.4867°E</span>
            <span>ZONE: IST</span>
          </div>
        </div>
      </div>

      {/* Bottom HUD bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none">
        <div className="flex items-center justify-between px-4 py-2 text-[10px] font-mono text-amber-500/70 tracking-widest">
          <div className="pointer-events-auto">{date}</div>
          <div className="hidden sm:block pointer-events-auto">CAD.PORTFOLIO.V2.0</div>
          <div className="pointer-events-auto">{time}</div>
        </div>
        {/* Scroll progress bar */}
        <div className="h-px bg-amber-500/10 relative">
          <div
            className="absolute top-0 left-0 h-px bg-amber-500 transition-all duration-150"
            style={{ width: `${scrollProgress}%`, boxShadow: '0 0 6px #f59e0b' }}
          />
        </div>
      </div>

      {/* Corner brackets (decorative) */}
      <div className="fixed top-8 left-3 w-4 h-4 border-t border-l border-amber-500/40 pointer-events-none z-30" />
      <div className="fixed top-8 right-3 w-4 h-4 border-t border-r border-amber-500/40 pointer-events-none z-30" />
      <div className="fixed bottom-8 left-3 w-4 h-4 border-b border-l border-amber-500/40 pointer-events-none z-30" />
      <div className="fixed bottom-8 right-3 w-4 h-4 border-b border-r border-amber-500/40 pointer-events-none z-30" />
    </>
  )
}
