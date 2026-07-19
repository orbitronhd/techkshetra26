import type React from 'react'
import { useState } from 'react'
import styles from './css/EventCarousel.module.css'

export interface CarouselEvent {
  id: string
  title: string
  category: string
  details: string
  imageUrl?: string
}

interface EventCarouselProps {
  events: readonly CarouselEvent[]
}

export function EventCarousel({ events }: EventCarouselProps): React.JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0)
  const [flippedMap, setFlippedMap] = useState<Record<number, boolean>>({})

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % events.length)
    setFlippedMap({})
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + events.length) % events.length)
    setFlippedMap({})
  }

  const handleCardClick = (index: number) => {
    if (index === activeIndex) {
      // Toggle flip if it's the active card
      setFlippedMap(prev => ({
        ...prev,
        [index]: !prev[index]
      }))
    } else {
      // Navigate to that card if it's a side card
      setActiveIndex(index)
      setFlippedMap({})
    }
  }

  const handleFlipClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation()
    setFlippedMap(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const getCardClass = (index: number) => {
    if (index === activeIndex) return styles.cardActive
    
    // Calculate distance
    const diff = index - activeIndex
    const length = events.length
    
    // Normalizing difference to handle wrap-around
    let normalizedDiff = diff
    if (diff < -length / 2) normalizedDiff += length
    if (diff > length / 2) normalizedDiff -= length

    if (normalizedDiff === -1) return styles.cardPrev
    if (normalizedDiff === 1) return styles.cardNext
    if (normalizedDiff === -2) return styles.cardFarPrev
    if (normalizedDiff === 2) return styles.cardFarNext
    
    if (normalizedDiff < -2) return styles.cardHiddenLeft
    return styles.cardHiddenRight
  }

  if (!events || events.length === 0) {
    return <div>No events found.</div>
  }

  return (
    <div className={styles.carouselContainer}>
      <button 
        type="button"
        className={`${styles.navButton} ${styles.prevButton}`} 
        onClick={handlePrev}
        aria-label="Previous event"
      >
        &#8592;
      </button>

      <div className={styles.carouselTrack}>
        {events.map((event, index) => {
          const isFlipped = !!flippedMap[index]
          const cardClass = getCardClass(index)
          const isActive = index === activeIndex
          
          return (
            <div 
              key={event.id}
              className={`${styles.cardWrapper} ${cardClass}`}
              onClick={() => handleCardClick(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCardClick(index)
              }}
            >
              <div className={`${styles.cardInner} ${isFlipped ? styles.isFlipped : ''}`}>
                
                {/* Front Face */}
                <div className={`${styles.cardFace} ${styles.cardFront}`}>
                  <div className={styles.imagePlaceholder}>
                    {event.imageUrl ? (
                      <img src={event.imageUrl} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <span className={styles.imageIcon}>✨</span>
                    )}
                  </div>
                  <div className={styles.cardTitle}>
                    {event.title}
                    {isActive && <span className={styles.detailsLabel}>Click for details</span>}
                  </div>
                </div>

                {/* Back Face */}
                <div className={`${styles.cardFace} ${styles.cardBack}`}>
                  <h3 className={styles.backTitle}>{event.category}</h3>
                  <p className={styles.backDetails}>{event.details}</p>
                  
                  {isActive && (
                    <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                      <button 
                        type="button" 
                        className={styles.flipButton}
                        onClick={(e) => handleFlipClick(e, index)}
                      >
                        Back
                      </button>
                      <button type="button" className={styles.actionButton}>
                        Register
                      </button>
                    </div>
                  )}
                </div>

              </div>
            </div>
          )
        })}
      </div>

      <button 
        type="button"
        className={`${styles.navButton} ${styles.nextButton}`} 
        onClick={handleNext}
        aria-label="Next event"
      >
        &#8594;
      </button>
    </div>
  )
}
