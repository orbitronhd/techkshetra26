import type React from 'react'
import styles from './css/Page.module.css'
import { EventCarousel } from './EventCarousel.tsx'
import type { CarouselEvent } from './EventCarousel.tsx'

const PLACEHOLDER_EVENTS: CarouselEvent[] = [
  {
    id: 'ev-1',
    title: 'Bloom',
    category: 'Design & Aesthetics',
    details: 'Immerse yourself in a creative journey blending art and technology. This event explores UI/UX paradigms and floral aesthetics.',
  },
  {
    id: 'ev-2',
    title: 'Vivid',
    category: 'Visual Computing',
    details: 'A deep dive into advanced graphics rendering and vibrant visual storytelling using modern web technologies.',
  },
  {
    id: 'ev-3',
    title: 'Petaled',
    category: 'Interactive Media',
    details: 'Discover the intersection of nature and digital interactive media in this hands-on design workshop.',
  },
  {
    id: 'ev-4',
    title: 'Ethereal',
    category: 'Virtual Reality',
    details: 'Step into the unknown. A guided tour and hackathon focused on building ethereal VR environments.',
  },
  {
    id: 'ev-5',
    title: 'Aura',
    category: 'Sound Engineering',
    details: 'Explore the science of sound. Learn to synthesize ethereal audioscapes for games and interactive experiences.',
  }
]

export function Events(): React.JSX.Element {
  return (
    <section id="events" style={{ padding: '4rem 0' }}>
      <div className={styles.contentBody} style={{ padding: '0 2rem' }}>
        <h2 className={styles.heading}>Events</h2>
      </div>

      <div style={{ marginTop: '3rem', width: '100%', padding: '0 1rem', display: 'flex', justifyContent: 'center' }}>
        <EventCarousel events={PLACEHOLDER_EVENTS} />
      </div>
    </section>
  )
}

export default Events