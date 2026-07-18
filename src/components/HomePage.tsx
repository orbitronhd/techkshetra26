import type React from 'react'
import { Footer } from './Footer.tsx'
import { About } from './About.tsx'
import { Gallery } from './Gallery.tsx'
import { HeroGlitch } from './HeroGlitch.tsx'
import { Countdown } from './Countdown.tsx'
import styles from './css/Page.module.css'

export function HomePage(): React.JSX.Element {
  return (
    <div>
      <HeroGlitch />
      <p>
        Dev Notes:
        - The angel is supposed to be behind or below the Genesis word, but since we definitely have the file, it is not being displayed here.
        - Each subheading is supposed to show up sideways/vertically to the left of the content. Leave mobile implementation for later.
        - The actual content is missing. MAJOR INCONVENIENCE LMFAO
        - Hero page needs to be filled with actual design elements which we don't have.
      </p>
      <section style={{ padding: '4rem 2rem' }}>
        <div className={styles.contentBody}>
          <Countdown />
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