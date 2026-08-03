import type React from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./css/RainEffect.module.css";

interface RainDrop {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  color: string;
}

const RAIN_PALETTE = [
  "220, 240, 255", // Crystalline white-cyan
  "220, 240, 255",
  "220, 240, 255",
  "191, 88, 255",  // Techkshetra primary violet
  "248, 119, 212", // Techkshetra secondary magenta
];

function resetDrop(drop: RainDrop, width: number, height: number, initial = false): void {
  const depth = 0.5 + Math.random() * 0.5;
  drop.length = 16 + depth * 24;
  drop.speed = 12 + depth * 14;
  drop.opacity = 0.18 + depth * 0.35;
  drop.x = Math.random() * (width + 200) - 100;
  drop.y = initial ? Math.random() * height : -(drop.length + Math.random() * 60);
  const colorIndex = Math.floor(Math.random() * RAIN_PALETTE.length);
  drop.color = RAIN_PALETTE[colorIndex] || RAIN_PALETTE[0];
}

export function RainEffect(): React.JSX.Element | null {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isPausedRef = useRef(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const updateSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    updateSize();

    const dropCount = Math.min(70, Math.max(25, Math.floor(width / 22)));
    const drops: RainDrop[] = Array.from({ length: dropCount }, () => {
      const drop: RainDrop = {
        x: 0,
        y: 0,
        length: 0,
        speed: 0,
        opacity: 0,
        color: RAIN_PALETTE[0],
      };
      resetDrop(drop, width, height, true);
      return drop;
    });

    const handleVisibility = () => {
      isPausedRef.current = document.hidden;
    };

    window.addEventListener("resize", updateSize);
    document.addEventListener("visibilitychange", handleVisibility);

    const render = () => {
      if (!isPausedRef.current) {
        ctx.clearRect(0, 0, width, height);

        ctx.lineCap = "round";
        ctx.lineWidth = 1.1;

        // Draw and update falling raindrops in an endless continuous stream
        for (let i = 0; i < drops.length; i++) {
          const drop = drops[i];
          if (!drop) continue;

          const tailX = drop.x - drop.speed * 0.18;
          const tailY = drop.y - drop.length;

          ctx.strokeStyle = `rgba(${drop.color}, ${drop.opacity})`;
          ctx.beginPath();
          ctx.moveTo(drop.x, drop.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();

          drop.y += drop.speed;
          drop.x += drop.speed * 0.18;

          // Seamlessly wrap once the entire streak has passed the bottom or right edge
          if (
            drop.y - drop.length >= height ||
            drop.x - drop.speed * 0.18 >= width + 100
          ) {
            resetDrop(drop, width, height, false);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", updateSize);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className={styles.rainContainer} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.rainCanvas} />
    </div>
  );
}

export default RainEffect;
