import type React from 'react'
import styles from './css/Page.module.css'

export function About(): React.JSX.Element {
  return (
    <section id="about" className={styles.contentBody} style={{ padding: '4rem 2rem' }}>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.subheading}>Our story and mission</p>
      <div style={{ marginTop: '2rem' }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Welcome to Techkshetra '26, the flagship biennial technical fest of Rajagiri School of Engineering & Technology. This year, under the theme of GENESIS, we embark on a journey of creation, innovation, and technological rebirth.
        </p>

        <div className={styles.placeholderSection}>
          <h2 className={styles.placeholderHeading}>Fest Statistics</h2>
          <div className={styles.placeholderGrid}>
            <div className={styles.placeholderCard}>
              <h3>Expected Footfall</h3>
              <p>6000+ Attendees</p>
            </div>
            <div className={styles.placeholderCard}>
              <h3>Total Reach</h3>
              <p>15.4K+ Accounts</p>
            </div>
            <div className={styles.placeholderCard}>
              <h3>Interactions</h3>
              <p>28K+ Engagements</p>
            </div>
          </div>
        </div>

        <div className={styles.placeholderSection}>
          <h2 className={styles.placeholderHeading}>About RSET</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Rajagiri School of Engineering & Technology (RSET) is a premier educational institution offering excellence in engineering education and research. We cultivate the next generation of engineers and visionaries.
          </p>
        </div>
      </div>
    </section>
  )
}
