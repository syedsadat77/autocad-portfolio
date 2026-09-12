'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ScrambleText } from './scramble-text'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-bg-static opacity-30 z-0" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-[11px] font-mono tracking-widest text-amber-500/70">[ 06 ]</span>
          <div className="section-divider flex-1" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            <ScrambleText text="OPEN_COMM_CHANNEL" trigger="inView" duration={1.2} className="gradient-text font-mono" />
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-sm p-6 md:p-10 hud-bracket"
        >
          {/* Header strip */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-amber-500/15">
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-amber-500/70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 blink" />
              TRANSMISSION_READY
            </div>
            <a
              href="mailto:syedsadat0123@gmail.com"
              className="flex items-center gap-1.5 text-[11px] font-mono text-amber-500/80 hover:text-amber-500 transition-colors"
            >
              <Mail className="h-3 w-3" />
              syedsadat0123@gmail.com
            </a>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
              >
                <CheckCircle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2 font-mono tracking-wide">
                TRANSMISSION_SENT
              </h3>
              <p className="text-gray-400 text-sm">
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="mt-6 border-amber-500/30 text-amber-500 hover:bg-amber-500/10 font-mono text-xs tracking-widest"
              >
                SEND ANOTHER
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="text-[10px] font-mono tracking-widest text-amber-500/70" htmlFor="name">
                    NAME_FIELD
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="bg-white/5 border-amber-500/20 text-white placeholder:text-gray-600 focus-visible:border-amber-500/50 focus-visible:ring-amber-500/20 transition-all duration-300 font-mono text-sm"
                  />
                </motion.div>
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="text-[10px] font-mono tracking-widest text-amber-500/70" htmlFor="email">
                    EMAIL_FIELD
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-white/5 border-amber-500/20 text-white placeholder:text-gray-600 focus-visible:border-amber-500/50 focus-visible:ring-amber-500/20 transition-all duration-300 font-mono text-sm"
                  />
                </motion.div>
              </div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="text-[10px] font-mono tracking-widest text-amber-500/70" htmlFor="subject">
                  SUBJECT_FIELD
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project inquiry"
                  required
                  className="bg-white/5 border-amber-500/20 text-white placeholder:text-gray-600 focus-visible:border-amber-500/50 focus-visible:ring-amber-500/20 transition-all duration-300 font-mono text-sm"
                />
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="text-[10px] font-mono tracking-widest text-amber-500/70" htmlFor="message">
                  MESSAGE_FIELD
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe your project requirements..."
                  required
                  rows={5}
                  className="bg-white/5 border-amber-500/20 text-white placeholder:text-gray-600 focus-visible:border-amber-500/50 focus-visible:ring-amber-500/20 resize-none transition-all duration-300 font-mono text-sm"
                />
              </motion.div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-xs font-mono"
                >
                  <AlertCircle className="h-4 w-4" />
                  {error}
                </motion.div>
              )}

              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-black font-mono font-semibold py-6 text-sm tracking-widest hover:from-amber-600 hover:to-orange-600 glow-amber rounded-sm disabled:opacity-50 transition-all duration-300"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="inline-block w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                      />
                      TRANSMITTING...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      TRANSMIT_MESSAGE
                    </span>
                  )}
                </Button>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
