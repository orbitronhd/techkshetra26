import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import styles from './css/FluidCursor.module.css'

export function FluidCursor(): React.JSX.Element | null {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const [isActive, setIsActive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Spring physics variables
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const ringPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })

  useEffect(() => {
    // Don't initialize on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return
    }

    let animationFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      if (!isVisible) setIsVisible(true)

      // Move the dot instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`
      }
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Check for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'

      setIsActive(!!isInteractive)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseover', handleMouseOver)

    const render = () => {
      // Linear interpolation (lerp) for the trailing ring
      const speed = 0.15
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * speed
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * speed

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(calc(${ringPos.current.x}px - 50%), calc(${ringPos.current.y}px - 50%))`
      }

      animationFrameId = requestAnimationFrame(render)
    }
    
    render()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isVisible])

  if (window.matchMedia("(pointer: coarse)").matches) {
    return null
  }

  return (
    <div className={styles.cursorWrapper} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}>
      <div 
        ref={ringRef} 
        className={`${styles.cursorRing} ${isActive ? styles.cursorRingActive : ''}`} 
      />
      <div 
        ref={dotRef} 
        className={`${styles.cursorDot} ${isActive ? styles.cursorDotActive : ''}`} 
      />
    </div>
  )
}
