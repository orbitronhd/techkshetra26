import type React from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./css/FluidCursor.module.css";

export function FluidCursor(): React.JSX.Element | null {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const ringPos = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      const touch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(max-width: 768px)").matches ||
        window.innerWidth <= 768;
      setIsTouchDevice(touch);
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  useEffect(() => {
    if (isTouchDevice) {
      return;
    }

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.pageX;
      mouse.current.y = e.pageY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.left = `${e.pageX}px`;
        dotRef.current.style.top = `${e.pageY}px`;
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const isInteractive =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsActive(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    const render = () => {
      const speed = 0.15;
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * speed;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * speed;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, isTouchDevice]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      className={styles.cursorWrapper}
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s ease" }}
    >
      <div
        ref={ringRef}
        className={`${styles.cursorRing} ${isActive ? styles.cursorRingActive : ""}`}
        style={{
          left: `${window.innerWidth / 2}px`,
          top: `${window.innerHeight / 2}px`,
        }}
      />
      <div
        ref={dotRef}
        className={`${styles.cursorDot} ${isActive ? styles.cursorDotActive : ""}`}
        style={{
          left: `${window.innerWidth / 2}px`,
          top: `${window.innerHeight / 2}px`,
        }}
      />
    </div>
  );
}
