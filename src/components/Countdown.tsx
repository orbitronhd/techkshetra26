import type React from 'react'
import { useEffect, useState } from 'react'
import styles from './css/Page.module.css'

export function Countdown(): React.JSX.Element {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  useEffect(() => {
    // 5th August 2026 at 7am IST
    // IST is UTC+5:30. 
    // Format: YYYY-MM-DDTHH:mm:ss+05:30
    const targetDate = new Date('2026-08-05T07:00:00+05:30').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        clearInterval(interval)
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      width: '100%',
      margin: '4rem auto',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-family-heading)'
    }}>
      <h2 style={{
        fontSize: 'min(5vw, 4rem)',
        fontWeight: 'normal',
        marginBottom: '1rem',
        color: 'var(--color-on-surface)',
        lineHeight: 1.1,
        whiteSpace: 'nowrap'
      }}>
        A new dawn begins in...
      </h2>
      <div style={{
        fontSize: 'min(7vw, 6rem)',
        lineHeight: 1.1,
        background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
        fontVariantNumeric: 'tabular-nums', // Keeps numbers from shifting widths
        whiteSpace: 'nowrap'
      }}>
        {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
      </div>
    </div>
  )
}
