import type React from 'react'
import { Footer } from './Footer.tsx'
import { About } from './about.tsx'
import { Gallery } from './gallery.tsx'
import { HeroGlitch } from './HeroGlitch.tsx'
import styles from './css/Page.module.css'

export function HomePage(): React.JSX.Element {
  return (
    <div>
      <HeroGlitch />
      
      <section style={{ padding: '4rem 2rem' }}>
        <div className={styles.contentBody}>
          <p>
            Techkshetra is the annual national-level technical festival of
            Rajagiri School of Engineering &amp; Technology. Bringing together
            minds from across the country, it celebrates innovation, creativity,
            and the spirit of engineering.
          </p>
          <p>
            From competitive coding challenges to robotics workshops, from
            hackathons to tech talks by industry leaders — Techkshetra offers
            something for every curious mind.
          </p>

          <div className={styles.placeholderSection}>
            <h2 className={styles.placeholderHeading}>Countdown Timer</h2>
            <p>00 : 00 : 00 : 00</p>
          </div>

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