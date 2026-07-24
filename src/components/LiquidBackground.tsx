import type React from "react";
import styles from "./css/LiquidBackground.module.css";

export function LiquidBackground(): React.JSX.Element {
  return (
    <div className={styles.backgroundContainer} aria-hidden="true">
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />
    </div>
  );
}
