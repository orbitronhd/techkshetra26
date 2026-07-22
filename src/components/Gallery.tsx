import type React from 'react'
import styles from './css/Page.module.css'

export function Gallery(): React.JSX.Element {
  return (
    <section id="gallery" className={styles.contentBody} style={{ padding: '4rem 2rem' }}>
      <h2 className={styles.heading}>Gallery</h2>
      <div style={{ marginTop: '2rem' }}>

        <div className={styles.placeholderSection}>
          <h2 className={styles.placeholderHeading}>Aftermovie / Reels</h2>
          <div className={styles.placeholderGrid}>
            <div className={styles.placeholderCard} style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p>Video Player Placeholder</p>
            </div>
          </div>
        </div>

        <div className={styles.placeholderSection}>
          <h2 className={styles.placeholderHeading}>Photo Gallery</h2>
          <div className={styles.placeholderGrid}>
            <div className={styles.placeholderCard} style={{ height: '150px' }}>
              <p>Image Placeholder 1</p>
            </div>
            <div className={styles.placeholderCard} style={{ height: '150px' }}>
              <p>Image Placeholder 2</p>
            </div>
            <div className={styles.placeholderCard} style={{ height: '150px' }}>
              <p>Image Placeholder 3</p>
            </div>
            <div className={styles.placeholderCard} style={{ height: '150px' }}>
              <p>Image Placeholder 4</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
