import type React from 'react'
import pageStyles from './css/Page.module.css'
import styles from './css/Gallery.module.css'

/**
 * Gallery image data sourced from /public/TK24/.
 * 14 images (1.webp – 14.webp), split across two carousel strips.
 */
interface GalleryImage {
  readonly id: string
  readonly src: string
  readonly alt: string
}

const GALLERY_IMAGES: readonly GalleryImage[] = Array.from({ length: 14 }, (_, i) => ({
  id: `tk24-${i + 1}`,
  src: `/TK24/${i + 1}.webp`,
  alt: `Techkshetra '24 highlight ${i + 1}`,
}))


/**
 * A single gallery card with overlapping + tilt handled by CSS nth-child rules.
 */
function GalleryCard({
  image,
}: {
  readonly image: GalleryImage
}): React.JSX.Element {
  return (
    <div className={styles.galleryCard}>
      <img
        src={image.src}
        alt={image.alt}
        className={styles.cardImage}
        loading="lazy"
        decoding="async"
      />
      <div className={styles.cardOverlay} />
    </div>
  )
}

/**
 * Gallery section with:
 * 1. Two auto-scrolling carousel strips of overlapping, tilted photo cards
 * 2. Aftermovie video player (Google Drive embed, silent autoplay)
 */
export function Gallery(): React.JSX.Element {
  // Split images across two strips: 7 each
  const strip1 = GALLERY_IMAGES.slice(0, 7)
  const strip2 = GALLERY_IMAGES.slice(7, 14)

  return (
    <section id="gallery" className={styles.gallerySection}>
      <h2 className={pageStyles.heading}>Gallery</h2>
      <p className={styles.gallerySubtitle}>Moments from Techkshetra '24</p>

      {/* --- Carousel Strips --- */}
      <div className={styles.stripsWrapper}>
        {/* Strip 1 — scrolls left */}
        <div className={styles.carouselStrip}>
          {[...strip1, ...strip1].map((image, i) => (
            <GalleryCard
              key={`s1-${image.id}-${i}`}
              image={image}
            />
          ))}
        </div>

        {/* Strip 2 — scrolls right (reversed) */}
        <div className={`${styles.carouselStrip} ${styles.stripReverse}`}>
          {[...strip2, ...strip2].map((image, i) => (
            <GalleryCard
              key={`s2-${image.id}-${i}`}
              image={image}
            />
          ))}
        </div>
      </div>


    </section>
  )
}
