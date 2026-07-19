import type React from 'react'
import { Footer } from './Footer.tsx'
import { About } from './About.tsx'
import { Events } from './Events.tsx'
import { Gallery } from './Gallery.tsx'
import { HeroGlitch } from './HeroGlitch.tsx'
import { Countdown } from './Countdown.tsx'
import styles from './css/Page.module.css'

export function HomePage(): React.JSX.Element {
  return (
    <div>
      <HeroGlitch />
      <p>
        Dev Notes: <br />
        - The angel is supposed to be behind or below the Genesis word, but since we definitely have the file, it is not being displayed here. <br />
        - We do not have a single high res, transparent asset, so it is going to look ugly now. <br />
        - The loading and cursor animation needs work, it's janky. <br />
        - The "Liquid Background" is to show what can be done with it. Personally, I feel it needs more variety. <br />
        - Each subheading is supposed to show up sideways/vertically to the left of the content. Leave mobile implementation for later. <br />
        - The actual content is missing. MAJOR INCONVENIENCE LMFAO <br />
        - Hero page needs to be filled with actual design elements which we don't have. <br />
        - Damn, I have actual learnt TypeScript :sob: ain't no wayyyyyy.
      </p>
      <section style={{ padding: '4rem 2rem' }}>
        <div className={styles.contentBody}>
          <Countdown />
        </div>
      </section>

      <About />
      <Events />
      <Gallery />

      <div id="contact">
        <Footer />
      </div>
    </div>
  )
}

export default HomePage