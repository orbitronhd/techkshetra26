import type React from "react";
import { useEffect, useState } from "react";
import styles from "./css/InitialLoader.module.css";

export function InitialLoader(): React.JSX.Element | null {
  const [phase, setPhase] = useState<"loading" | "closing" | "done">("loading");
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null,
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const loadingTimer = setTimeout(() => {
      setPhase("closing");
    }, 1000);

    const doneTimer = setTimeout(() => {
      setPhase("done");
    }, 1500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(loadingTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") {
    return null;
  }

  const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(max-width: 768px)").matches ||
    window.innerWidth <= 768;

  const leftPos = mousePos && !isTouchDevice ? `${mousePos.x}px` : "50%";
  const topPos = mousePos && !isTouchDevice ? `${mousePos.y}px` : "50%";

  const clipPathStyle =
    phase === "closing"
      ? `circle(4px at ${leftPos} ${topPos})`
      : `circle(150% at 50% 50%)`;

  return (
    <div
      className={`${styles.loaderContainer} ${phase === "closing" ? styles.closing : ""}`}
      style={{ clipPath: clipPathStyle }}
    >
      <div
        className={styles.circle}
        style={{ left: leftPos, top: topPos }}
      ></div>
    </div>
  );
}
