import type React from "react";
import pageStyles from "./css/Page.module.css";
import styles from "./css/Gallery.module.css";

import img1 from "../assets/gallery/1.webp";
import img2 from "../assets/gallery/2.webp";
import img3 from "../assets/gallery/3.webp";
import img4 from "../assets/gallery/4.webp";
import img5 from "../assets/gallery/5.webp";
import img6 from "../assets/gallery/6.webp";
import img7 from "../assets/gallery/7.webp";
import img8 from "../assets/gallery/8.webp";
import img9 from "../assets/gallery/9.webp";
import img10 from "../assets/gallery/10.webp";
import img11 from "../assets/gallery/11.webp";
import img12 from "../assets/gallery/12.webp";
import img13 from "../assets/gallery/13.webp";
import img14 from "../assets/gallery/14.webp";

interface GalleryImage {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
}

const GALLERY_IMAGES: readonly GalleryImage[] = [
  { id: "tk24-1", src: img1, alt: "Techkshetra '24 highlight 1" },
  { id: "tk24-2", src: img2, alt: "Techkshetra '24 highlight 2" },
  { id: "tk24-3", src: img3, alt: "Techkshetra '24 highlight 3" },
  { id: "tk24-4", src: img4, alt: "Techkshetra '24 highlight 4" },
  { id: "tk24-5", src: img5, alt: "Techkshetra '24 highlight 5" },
  { id: "tk24-6", src: img6, alt: "Techkshetra '24 highlight 6" },
  { id: "tk24-7", src: img7, alt: "Techkshetra '24 highlight 7" },
  { id: "tk24-8", src: img8, alt: "Techkshetra '24 highlight 8" },
  { id: "tk24-9", src: img9, alt: "Techkshetra '24 highlight 9" },
  { id: "tk24-10", src: img10, alt: "Techkshetra '24 highlight 10" },
  { id: "tk24-11", src: img11, alt: "Techkshetra '24 highlight 11" },
  { id: "tk24-12", src: img12, alt: "Techkshetra '24 highlight 12" },
  { id: "tk24-13", src: img13, alt: "Techkshetra '24 highlight 13" },
  { id: "tk24-14", src: img14, alt: "Techkshetra '24 highlight 14" },
];

function GalleryCard({
  image,
}: {
  readonly image: GalleryImage;
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
  );
}

export function Gallery(): React.JSX.Element {
  const strip1 = GALLERY_IMAGES.slice(0, 7);
  const strip2 = GALLERY_IMAGES.slice(7, 14);

  return (
    <section id="gallery" className={styles.gallerySection}>
      <h2 className={pageStyles.heading}>Gallery</h2>

      {}
      <div className={styles.stripsWrapper}>
        {}
        <div className={styles.carouselStrip}>
          {[...strip1, ...strip1].map((image, i) => (
            <GalleryCard key={`s1-${image.id}-${i}`} image={image} />
          ))}
        </div>

        {}
        <div className={`${styles.carouselStrip} ${styles.stripReverse}`}>
          {[...strip2, ...strip2].map((image, i) => (
            <GalleryCard key={`s2-${image.id}-${i}`} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
}
