import type React from 'react'
import { Footer } from './Footer.tsx'
import styles from './css/Page.module.css'

export function EventsPage(): React.JSX.Element {
  return (
    <div>
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <h1 className={styles.heading}>Events</h1>
        <p className={styles.subheading}>Technical competitions and workshops</p>
      </section>
      
      <section style={{ padding: '4rem 2rem' }}>
        <div className={styles.contentBody}>
          <p>
            Explore a wide range of events spanning coding, robotics, design,
            and more. Each event is crafted to challenge your skills and spark
            new ideas.
          </p>

          <div className={styles.placeholderSection}>
            <h2 className={styles.placeholderHeading}>Flagship Events</h2>
            <div className={styles.placeholderGrid}>
              <div className={styles.placeholderCard}>
                <h3>Main Hackathon</h3>
                <p>24-hour coding challenge.</p>
              </div>
            </div>
          </div>

          <div className={styles.placeholderSection}>
            <h2 className={styles.placeholderHeading}>Technical Events</h2>
            <div className={styles.placeholderGrid}>
              <div className={styles.placeholderCard}>
                <h3>Coding Contest</h3>
                <p>Test your algorithmic skills.</p>
              </div>
              <div className={styles.placeholderCard}>
                <h3>Robotics</h3>
                <p>Build and race your robots.</p>
              </div>
            </div>
          </div>

          <div className={styles.placeholderSection}>
            <h2 className={styles.placeholderHeading}>Non-Technical Events</h2>
            <div className={styles.placeholderGrid}>
              <div className={styles.placeholderCard}>
                <h3>Gaming Tournament</h3>
                <p>Compete in popular eSports titles.</p>
              </div>
              <div className={styles.placeholderCard}>
                <h3>Treasure Hunt</h3>
                <p>Campus-wide puzzle solving.</p>
              </div>
            </div>
          </div>

          <div className={styles.placeholderSection}>
            <h2 className={styles.placeholderHeading}>Pre-Events</h2>
            <div className={styles.placeholderGrid}>
              <div className={styles.placeholderCard}>
                <h3>Workshops</h3>
                <p>Learn new skills before the fest.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div id="contact">
        <Footer />
      </div>
    </div>
  )
}

export default EventsPage