'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

function checkCustomCursorSupported() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

export function CustomCursor() {
  // Lazy initializer: only true on supported devices during client render.
  // SSR returns false, so server output is null; client may render cursor.
  const [enabled] = useState(checkCustomCursorSupported)
  const [isPointer, setIsPointer] = useState(false)
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  const ringX = useSpring(dotX, { damping: 20, stiffness: 200, mass: 0.8 })
  const ringY = useSpring(dotY, { damping: 20, stiffness: 200, mass: 0.8 })

  useEffect(() => {
    if (!enabled) return
    document.body.classList.add('custom-cursor-active')

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)

      const target = e.target as HTMLElement
      const isInteractive =
        target.closest('a, button, input, textarea, [role="button"], [data-cursor="pointer"]') !== null
      setIsPointer(isInteractive)
    }

    window.addEventListener('mousemove', move)

    return () => {
      window.removeEventListener('mousemove', move)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [enabled, dotX, dotY])

  if (!enabled) return null

  return (
    <>
      {/* Outer ring - eased follower */}
      <motion.div
        className="cursor-dot"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isPointer ? 40 : 24,
            height: isPointer ? 40 : 24,
            borderColor: isPointer ? '#f59e0b' : 'rgba(245, 158, 11, 0.5)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="rounded-full border"
          style={{ marginLeft: -8, marginTop: -8 }}
        />
      </motion.div>

      {/* Inner dot - precise follower */}
      <motion.div
        className="cursor-dot"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isPointer ? 0 : 6,
            height: isPointer ? 0 : 6,
          }}
          className="rounded-full bg-amber-500"
          style={{ marginLeft: -3, marginTop: -3 }}
        />
      </motion.div>
    </>
  )
}
