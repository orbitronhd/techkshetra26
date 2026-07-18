import type React from 'react'
import { useEffect, useState } from 'react'
import styles from './css/InitialLoader.module.css'

export function InitialLoader(): React.JSX.Element | null {
  const [phase, setPhase] = useState<'loading' | 'closing' | 'done'>('loading')
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null)

  useEffect(() => {
    // Track mouse position so we can shrink the loading dot directly into it
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Show the circular loading animation for 1 second
    const loadingTimer = setTimeout(() => {
      setPhase('closing') // Triggers the CSS transition to shrink into a cursor dot
    }, 1000)

    // Wait for the closing animation to finish before removing the component
    const doneTimer = setTimeout(() => {
      setPhase('done')
    }, 1500)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(loadingTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  if (phase === 'done') {
    return null
  }

  // Target the actual mouse position if moved, otherwise stay centered
  const leftPos = mousePos ? `${mousePos.x}px` : '50%'
  const topPos = mousePos ? `${mousePos.y}px` : '50%'

  // Collapse the entire screen into an 8px dot at the cursor
  const clipPathStyle = phase === 'closing'
    ? `circle(4px at ${leftPos} ${topPos})`
    : `circle(150% at 50% 50%)`

  return (
    <div 
      className={`${styles.loaderContainer} ${phase === 'closing' ? styles.closing : ''}`}
      style={{ clipPath: clipPathStyle }}
    >
      <div 
        className={styles.circle}
        style={{ left: leftPos, top: topPos }}
      ></div>
    </div>
  )
}
