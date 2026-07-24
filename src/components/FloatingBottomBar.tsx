import type React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./css/FloatingBottomBar.module.css";

export function FloatingBottomBar(): React.JSX.Element {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        // Hide if the footer's top edge crosses into the viewport
        setIsVisible(footerTop > window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger initial check immediately
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.dockWrapper} ${isVisible ? "" : styles.dockWrapperHidden}`}>
      <nav className={styles.dockContainer} aria-label="Floating quick navigation">
        <Link to="/#" className={styles.textLogoItem} aria-label="Scroll to top">
          TK '26
        </Link>

        <Link to="/#" className={styles.dockItem} aria-label="Go to Home">
          <svg className={styles.dockIcon} viewBox="0 0 24 24">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </Link>

        <Link to="/#events" className={styles.dockItem} aria-label="Go to Events">
          <svg className={styles.dockIcon} viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
          </svg>
        </Link>
      </nav>
    </div>
  );
}
