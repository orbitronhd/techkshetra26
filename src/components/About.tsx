import type React from 'react'
import styles from './css/Page.module.css'

export function About(): React.JSX.Element {
  return (
    <section id="about" className={styles.contentBody} style={{ padding: '4rem 2rem' }}>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.subheading}>Our story and mission</p>
      <div style={{ marginTop: '2rem' }}>
        <p>
          Talk about TK being the event which happens every once in 2 years thing and add some of the genesis theme stuff along with it, use AI idk
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
          <p>
            Rajagiri School of Engineering &amp; Technology (RSET) is a premier
            educational institution offering excellence in engineering education
            and research.
          </p>
        </div>
      </div>
    </section>
  )
}
