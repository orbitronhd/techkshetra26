import type React from 'react'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: string
  baseOpacity?: number
  enableBlur?: boolean
  baseRotation?: number
  blurStrength?: number
}

export function ScrollReveal({
  children,
  baseOpacity = 0.1,
  enableBlur = false,
  baseRotation = 3,
  blurStrength = 4,
}: ScrollRevealProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    
    // Select all the word spans
    const words = containerRef.current.querySelectorAll('.reveal-word')

    // Context is great for easy cleanup in React
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          opacity: baseOpacity,
          rotationZ: baseRotation,
          filter: enableBlur ? `blur(${blurStrength}px)` : 'blur(0px)',
          y: 20,
        },
        {
          opacity: 1,
          rotationZ: 0,
          filter: 'blur(0px)',
          y: 0,
          duration: 1.5,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%', // Starts when top of element hits 85% down the viewport
            end: 'center 45%', // Ends when center of element hits 45% down the viewport
            scrub: 1, // Smooth scrubbing taking 1 second to catch up
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [baseOpacity, enableBlur, baseRotation, blurStrength])

  // Split text by space for words
  const words = children.split(' ').map((word, idx) => (
    <span
      key={idx}
      className="reveal-word"
      style={{
        display: 'inline-block',
        marginRight: '0.25em',
        willChange: 'transform, opacity, filter',
      }}
    >
      {word}
    </span>
  ))

  return (
    <span ref={containerRef} style={{ display: 'inline-block' }}>
      {words}
    </span>
  )
}

export default ScrollReveal
