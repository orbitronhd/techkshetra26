import type React from "react";
import { useEffect, useState, useRef } from "react";
import logoStyle from "../assets/techkshetra_logo.png";
import logoGenesis from "../assets/TK26-genesis.png";
import styles from "./css/HeroGlitch.module.css";

export function HeroGlitch(): React.JSX.Element {
  const [hasCrossed, setHasCrossed] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 50;
      setHasCrossed(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let start = performance.now();
    const initialProgress = progressRef.current;
    const targetProgress = hasCrossed ? 1 : 0;
    const duration = 600;

    if (initialProgress === targetProgress) return;

    let animationFrameId: number;

    const animate = (time: number) => {
      const elapsed = time - start;
      const t = Math.min(elapsed / duration, 1);

      const current = initialProgress + (targetProgress - initialProgress) * t;
      setProgress(current);

      if (t < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasCrossed]);

  const glitchIntensity = 1 - Math.abs((progress - 0.5) * 2);
  const isGlitching = glitchIntensity > 0.05;

  return (
    <div className={styles.scrollWrapper}>
      <div className={styles.stickyContainer}>
        <div className={styles.imageWrapper}>
          {}
          <img
            src={logoStyle}
            alt="Techkshetra 26 Logo"
            className={`${styles.imageLayer} ${isGlitching ? styles.glitchEffect : ""}`}
            style={{
              opacity: 1 - progress,
              filter: `hue-rotate(${glitchIntensity * 90}deg) blur(${glitchIntensity * 2}px)`,
              transform: "scale(1.3)",
            }}
          />
          {isGlitching && (
            <img
              src={logoStyle}
              alt=""
              className={`${styles.imageLayer} ${styles.glitchEffect}`}
              style={{
                opacity: (1 - progress) * glitchIntensity * 0.7,
                transform: `translate(${Math.random() * 15 * glitchIntensity}px, ${Math.random() * -15 * glitchIntensity}px) scale(1.3)`,
                filter: "brightness(1.5) contrast(2) hue-rotate(-90deg)",
                mixBlendMode: "screen",
                animationDuration: "0.1s", // Faster glitch for offset layer
              }}
            />
          )}

          {/* Genesis Logo (Fades in) */}
          <img
            src={logoGenesis}
            alt="Techkshetra 26 Genesis"
            className={`${styles.imageLayer} ${isGlitching ? styles.glitchEffect : ""}`}
            style={{
              opacity: progress,
              filter: `hue-rotate(${glitchIntensity * -90}deg) blur(${glitchIntensity * 2}px)`,
            }}
          />
          {isGlitching && (
            <img
              src={logoGenesis}
              alt=""
              className={`${styles.imageLayer} ${styles.glitchEffect}`}
              style={{
                opacity: progress * glitchIntensity * 0.7,
                transform: `translate(${Math.random() * -15 * glitchIntensity}px, ${Math.random() * 15 * glitchIntensity}px)`,
                filter: "brightness(1.5) contrast(2) hue-rotate(90deg)",
                mixBlendMode: "screen",
                animationDuration: "0.15s",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
