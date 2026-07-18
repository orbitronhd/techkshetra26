import type React from 'react'
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Navigation } from './components/Navigation.tsx'
import { HomePage } from './components/HomePage.tsx'
import { EventsPage } from './components/EventsPage.tsx'
import styles from './App.module.css'

function ScrollToTop(): React.JSX.Element | null {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      // Small timeout to ensure DOM is ready after navigation
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 0)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash])

  return null
}

function App(): React.JSX.Element {
  return (
    <div className={styles.root}>
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </div>
  )
}

export default App