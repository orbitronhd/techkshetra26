import type React from 'react'
import styles from './css/Page.module.css'

export function Tshirts(): React.JSX.Element {
  return (
    <section id="tshirts" className={styles.contentBody} style={{ padding: '4rem 2rem' }}>
      <h2 className={styles.heading}>Tshirts</h2>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px', backgroundColor: 'rgba(255, 255, 255, 0.05)', height: '300px', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px dashed rgba(255,255,255,0.2)' }}>
          <span style={{ color: '#888', fontWeight: 'bold' }}>T-Shirt Image Placeholder</span>
        </div>
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Official Merchandise</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Grab your official Techkshetra '26 T-Shirts and show your spirit! Stay tuned for the unveiling of our exclusive designs. Available for pre-order soon.
          </p>
        </div>
      </div>
    </section>
  )
}
