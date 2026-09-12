'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrambleTextProps {
  text: string
  className?: string
  duration?: number
  trigger?: 'mount' | 'inView'
  as?: keyof React.JSX.IntrinsicElements
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>/\\|+-='

export function ScrambleText({
  text,
  className = '',
  duration = 1.2,
  trigger = 'mount',
  as: Tag = 'span',
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text)
  const elementRef = useRef<HTMLElement>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    let frame = 0
    let raf = 0
    let interval: ReturnType<typeof setInterval> | undefined

    const runScramble = () => {
      if (startedRef.current) return
      startedRef.current = true

      const totalChars = text.length
      const revealFrames = Math.floor(duration * 60)
      const charsPerFrame = Math.max(1, Math.ceil(totalChars / revealFrames))

      interval = setInterval(() => {
        frame += 1
        const revealedCount = Math.min(totalChars, frame * charsPerFrame)

        const scrambled = text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < revealedCount) return text[i]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')

        setDisplay(scrambled)

        if (revealedCount >= totalChars) {
          setDisplay(text)
          if (interval) clearInterval(interval)
        }
      }, 1000 / 60)
    }

    if (trigger === 'mount') {
      runScramble()
    } else {
      // inView trigger
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runScramble()
              observer.disconnect()
            }
          })
        },
        { threshold: 0.3 }
      )
      if (elementRef.current) observer.observe(elementRef.current)
      return () => {
        observer.disconnect()
        if (interval) clearInterval(interval)
        cancelAnimationFrame(raf)
      }
    }

    return () => {
      if (interval) clearInterval(interval)
      cancelAnimationFrame(raf)
    }
  }, [text, duration, trigger])

  const Component = Tag as React.ElementType

  return (
    <Component
      ref={elementRef}
      className={`${className} ${trigger === 'mount' ? '' : 'scramble-cursor'}`}
    >
      {display}
    </Component>
  )
}
