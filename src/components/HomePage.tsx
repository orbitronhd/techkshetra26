import type React from 'react'
import { Footer } from './Footer.tsx'
import { About } from './about.tsx'
import { Gallery } from './gallery.tsx'
import { HeroGlitch } from './HeroGlitch.tsx'
import { Countdown } from './Countdown.tsx'
import styles from './css/Page.module.css'

export function HomePage(): React.JSX.Element {
  return (
    <div>
      <HeroGlitch />
      
      <section style={{ padding: '4rem 2rem' }}>
        <div className={styles.contentBody}>
          <Countdown />

          <div className={styles.placeholderSection}>
            <h2 className={styles.placeholderHeading}>Sponsors</h2>
            <div className={styles.placeholderGrid}>
              <div className={styles.placeholderCard}>
                <h3>Title Sponsor</h3>
                <p>Logo goes here</p>
              </div>
              <div className={styles.placeholderCard}>
                <h3>Co-Sponsor</h3>
                <p>Logo goes here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Gallery />
      
      <div id="contact">
        <Footer />
      </div>
    </div>
  )
}

export default HomePage