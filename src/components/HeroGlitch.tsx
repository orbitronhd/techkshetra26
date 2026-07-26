import type React from "react";
import { useEffect, useState } from "react";
import angelImage from "./Tshirt Elements (4).png";
import styles from "./css/HeroGlitch.module.css";

export function HeroGlitch(): React.JSX.Element {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const textX = mousePosition.x * 20;
  const textY = mousePosition.y * 20;
  
  const fgX = mousePosition.x * -40;
  const fgY = mousePosition.y * -40;

  return (
    <div className={styles.heroContainer}>
      {/* Background layer */}
      <div className={styles.backgroundLayer}></div>
      
      {/* Text layer */}
      <div 
        className={styles.textLayer}
        style={{ transform: `translate(${textX}px, ${textY}px)` }}
      >
        <h1 className={styles.massiveText}>TECHKSHETRA</h1>
      </div>

      {/* Foreground image layer */}
      <div 
        className={styles.foregroundLayer}
        style={{ transform: `translate(${fgX}px, ${fgY}px)` }}
      >
        <img 
          src={angelImage} 
          alt="Angel" 
          className={styles.angelImage} 
        />
      </div>
    </div>
  );
}
