import type React from "react";
import { useState, useRef, useEffect } from "react";
import styles from "./css/EventCarousel.module.css";

export interface CarouselEvent {
  id: string;
  title: string;
  category: string;
  description: string;
  organizer: string;
  prizePool: string;
  registrationFee?: string;
  registrationLink?: string;
  imageUrl?: string;
  venue?: string;
  time?: string;
  eventType?: "Pre Event" | "Main Event";
  date?: string;
}

interface EventCarouselProps {
  events: readonly CarouselEvent[];
  isShuffling?: boolean;
  activeFilter?: string;
}

const OPEN_EVENT_TITLES = [
  "ATV:Build & Race-RaceCraft RC",
  "REXTECH GAMELAB",
  "Project Shahi Dossier",
  "Metro Rethink",
  "Lights Lens Action",
  "ENDURO EDGE",
  "POST IT UP!",
  "Circuit Safari",
  "Circuit Quest",
];

export const EventCarousel: React.FC<EventCarouselProps> = ({
  events,
  isShuffling = false,
  activeFilter,
}) => {
  const [activeIndex, setActiveIndex] = useState(() =>
    events.length > 0 ? Math.floor(Math.random() * events.length) : 0
  );
  const [expandedMap, setExpandedMap] = useState<Record<number, boolean>>({});
  const [descExpandedMap, setDescExpandedMap] = useState<Record<number, boolean>>({});

  // Pick a random starting index when events array changes
  useEffect(() => {
    if (events.length > 0) {
      setActiveIndex(Math.floor(Math.random() * events.length));
    } else {
      setActiveIndex(0);
    }
    setExpandedMap({});
    setDescExpandedMap({});
  }, [events]);

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % events.length);
    setExpandedMap({});
    setDescExpandedMap({});
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + events.length) % events.length);
    setExpandedMap({});
    setDescExpandedMap({});
  };

  const handleCardClick = (index: number) => {
    if (index === activeIndex) {
      setExpandedMap((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    } else {
      setActiveIndex(index);
      setExpandedMap({});
      setDescExpandedMap({});
    }
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

  const hasExpandedCard = Object.values(expandedMap).some(Boolean);

  return (
    <div
      className={`${styles.carouselContainer} ${hasExpandedCard ? styles.containerExpanded : ""}`}
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
          const isExpanded = !!expandedMap[index];
          const cardClass = getCardClass(index);
          const isActive = index === activeIndex;
          const isComingSoon =
            activeFilter === "Main Event" &&
            !OPEN_EVENT_TITLES.includes(event.title);

          return (
            <div
              key={event.id}
              className={`${styles.cardWrapper} ${cardClass} ${isExpanded ? styles.isExpanded : ""} ${isShuffling ? styles.cardShuffling : ""}`}
              onClick={() => handleCardClick(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCardClick(index);
              }}
            >
              <div className={styles.cardInner}>
                <div className={`${styles.cardFace} ${styles.cardFront}`}>
                  <div className={`${styles.cardBackground} ${isComingSoon ? styles.comingSoonBlur : ""}`}>
                    {event.imageUrl ? (
                      <img 
                        src={event.imageUrl} 
                        alt={event.title}
                        className={event.imageUrl.includes("TK26-logo-color") ? styles.defaultLogoImage : ""}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className={styles.imagePlaceholderFallback}></div>
                    )}
                    <div className={styles.backgroundOverlay}></div>
                  </div>

                  <div className={styles.cardContent}>


                    <div className={styles.cardMainTitle}>
                      {event.title.split(" ").map((word, i) => (
                        <span key={i} className={styles.titleWord}>
                          {word}
                        </span>
                      ))}
                    </div>



                    <div className={`${styles.cardBottom} ${isComingSoon ? styles.comingSoonBlur : ""}`}>
                      <div className={styles.venueTimeSection}>
                        <div className={styles.venueTimeRow}>
                          <span className={styles.icon}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                          </span>
                          <span className={styles.venueTimeText}>
                            {event.date ? new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "TBA"}
                          </span>
                        </div>
                        <div className={styles.venueTimeRow}>
                          <span className={styles.icon}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                          </span>
                          <span className={styles.venueTimeText}>{event.venue || "TBA"}</span>
                        </div>
                        <div className={styles.venueTimeRow}>
                          <span className={styles.icon}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                          </span>
                          <span className={styles.venueTimeText}>{event.time || "TBA"}</span>
                        </div>
                      </div>
                      <div className={styles.logoBox}>{event.organizer || "ORG"}</div>
                    </div>

                    <div className={`${styles.expandedSection} ${isExpanded ? styles.showExpanded : ""} ${isComingSoon ? styles.comingSoonBlur : ""}`}>
                      <h3 className={styles.expandedCategory}>{event.category}</h3>

                      {event.description && event.description !== "TBD" && (
                        <div className={styles.descriptionSection}>
                          <p className={`${styles.eventDescription} ${descExpandedMap[index] ? styles.descExpanded : styles.descCollapsed}`}>
                            {event.description}
                          </p>
                          {event.description.length > 100 && (
                            <button 
                              type="button"
                              className={styles.readMoreBtn} 
                              onClick={(e) => {
                                e.stopPropagation();
                                const isExpanding = !descExpandedMap[index];
                                setDescExpandedMap(prev => ({...prev, [index]: isExpanding}));
                                if (!isExpanding) {
                                  const pElement = e.currentTarget.previousElementSibling as HTMLElement;
                                  if (pElement) {
                                    pElement.scrollTop = 0;
                                  }
                                }
                              }}
                            >
                              {descExpandedMap[index] ? "▲" : "▼"}
                            </button>
                          )}
                        </div>
                      )}

                      {event.prizePool && event.prizePool !== "Nil" && event.prizePool !== "nil" && event.prizePool !== "NA" && event.prizePool !== "NA." && (
                        <div className={styles.prizePoolSection}>
                          <span className={styles.prizePoolLabel}>Prize Pool:</span>
                          <span className={styles.prizePoolValue}>{event.prizePool}</span>
                        </div>
                      )}
                      
                      {event.registrationFee && (
                        <div className={styles.prizePoolSection}>
                          <span className={styles.prizePoolLabel}>Reg Fee:</span>
                          <span className={styles.prizePoolValue}>{event.registrationFee}</span>
                        </div>
                      )}

                      {event.registrationLink ? (
                        <a 
                          href={event.registrationLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={styles.actionButton}
                          style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Register
                        </a>
                      ) : (
                        <button 
                          type="button" 
                          className={styles.actionButton}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Register
                        </button>
                      )}
                    </div>

                    {isActive && !isExpanded && !isComingSoon && (
                      <div className={styles.clickForDetails}>
                        Click for details
                      </div>
                    )}
                  </div>
                  {isComingSoon && (
                    <div className={styles.comingSoonOverlay}>COMING SOON</div>
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
