'use client'

import { Mail, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="relative border-t border-amber-500/15 bg-[#050505] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top section with logo + nav */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 border border-amber-500/60 flex items-center justify-center rotate-45">
                <div className="w-3 h-3 bg-amber-500 -rotate-45" />
              </div>
              <span className="text-base font-bold tracking-widest gradient-text font-mono">SYED</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Professional AutoCAD Designer specializing in PEB structures,
              equipment parts, and 2D/3D machinery design.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[10px] font-mono tracking-widest text-amber-500/70 mb-4">
              NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Timeline', href: '#timeline' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-gray-400 hover:text-amber-500 transition-colors font-mono text-xs tracking-wide"
                >
                  {'> '}{link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-[10px] font-mono tracking-widest text-amber-500/70 mb-4">
              CONNECT
            </h4>
            <a
              href="mailto:syedsadat0123@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors font-mono text-xs mb-3"
            >
              <Mail className="h-3.5 w-3.5" />
              syedsadat0123@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <a
                href="mailto:syedsadat0123@gmail.com"
                className="w-9 h-9 rounded-sm glass-light flex items-center justify-center text-amber-500 hover:bg-amber-500/15 hover:glow-amber transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[11px] font-mono tracking-widest">
            © {new Date().getFullYear()} SYED · DESIGNED_WITH_PRECISION
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-amber-500/70 hover:text-amber-500 transition-colors px-3 py-1.5 border border-amber-500/30 rounded-sm hover:bg-amber-500/5"
          >
            <ArrowUp className="h-3 w-3" />
            RETURN_TO_TOP
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
