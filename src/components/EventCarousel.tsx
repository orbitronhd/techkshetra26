import type React from "react";
import { useState, useRef } from "react";
import styles from "./css/EventCarousel.module.css";

export interface CarouselEvent {
  id: string;
  title: string;
  category: string;
  details: string;
  imageUrl?: string;
}

interface EventCarouselProps {
  events: readonly CarouselEvent[];
}

export function EventCarousel({
  events,
}: EventCarouselProps): React.JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flippedMap, setFlippedMap] = useState<Record<number, boolean>>({});

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % events.length);
    setFlippedMap({});
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + events.length) % events.length);
    setFlippedMap({});
  };

  const handleCardClick = (index: number) => {
    if (index === activeIndex) {
      setFlippedMap((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    } else {
      setActiveIndex(index);
      setFlippedMap({});
    }
  };

  const handleFlipClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setFlippedMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const getCardClass = (index: number) => {
    if (index === activeIndex) return styles.cardActive;

    const diff = index - activeIndex;
    const length = events.length;

    let normalizedDiff = diff;
    if (diff < -length / 2) normalizedDiff += length;
    if (diff > length / 2) normalizedDiff -= length;

    if (normalizedDiff === -1) return styles.cardPrev;
    if (normalizedDiff === 1) return styles.cardNext;
    if (normalizedDiff === -2) return styles.cardFarPrev;
    if (normalizedDiff === 2) return styles.cardFarNext;

    if (normalizedDiff < -2) return styles.cardHiddenLeft;
    return styles.cardHiddenRight;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    // Only trigger swipe if horizontal movement is dominant and exceeds threshold
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  if (!events || events.length === 0) {
    return <div>No events found.</div>;
  }

  return (
    <div
      className={styles.carouselContainer}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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
          const isFlipped = !!flippedMap[index];
          const cardClass = getCardClass(index);
          const isActive = index === activeIndex;

          return (
            <div
              key={event.id}
              className={`${styles.cardWrapper} ${cardClass}`}
              onClick={() => handleCardClick(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCardClick(index);
              }}
            >
              <div
                className={`${styles.cardInner} ${isFlipped ? styles.isFlipped : ""}`}
              >
                {}
                <div className={`${styles.cardFace} ${styles.cardFront}`}>
                  <div className={styles.imagePlaceholder}>
                    {event.imageUrl ? (
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <span className={styles.imageIcon}>✨</span>
                    )}
                  </div>
                  <div className={styles.cardTitle}>
                    {event.title}
                    {isActive && (
                      <span className={styles.detailsLabel}>
                        Click for details
                      </span>
                    )}
                  </div>
                </div>

                {}
                <div className={`${styles.cardFace} ${styles.cardBack}`}>
                  <h3 className={styles.backTitle}>{event.category}</h3>
                  <p className={styles.backDetails}>{event.details}</p>

                  {isActive && (
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        marginTop: "auto",
                      }}
                    >
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
          );
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
  );
}
