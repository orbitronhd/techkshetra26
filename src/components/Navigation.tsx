import type React from "react";
import { useState, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NAV_ITEMS_LEFT, NAV_ITEMS_RIGHT } from "../types/sun.types.ts";
import type { NavItem } from "../types/sun.types.ts";
import tk26Logo from "../assets/TK26-icon-512.png";
import styles from "./css/Navigation.module.css";

const ALL_NAV_ITEMS: readonly NavItem[] = [...NAV_ITEMS_LEFT, ...NAV_ITEMS_RIGHT];

function NavList({
  items,
}: {
  readonly items: readonly NavItem[];
}): React.JSX.Element {
  return (
    <ul className={styles.navList}>
      {items.map((item) => (
        <li key={item.id} className={styles.navItem}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export function Navigation(): React.JSX.Element {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleHomeClick(): void {
    void navigate("/");
    setMenuOpen(false);
  }

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <div className={styles.blurGradient} aria-hidden="true" />
      <header className={styles.header}>
        <nav className={styles.navLeft} aria-label="Primary navigation left">
          <NavList items={NAV_ITEMS_LEFT} />
        </nav>

        <div className={styles.logoWrapper}>
          <button
            className={styles.logoButton}
            type="button"
            onClick={handleHomeClick}
            aria-label="Techkshetra 26 — go to home"
          >
            <img
              src={tk26Logo}
              alt="Techkshetra 26"
              className={styles.logoImage}
            />
          </button>
        </div>

        <nav className={styles.navRight} aria-label="Primary navigation right">
          <NavList items={NAV_ITEMS_RIGHT} />
        </nav>

        {/* Hamburger button — visible on mobile only */}
        <button
          type="button"
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
        </button>
      </header>

      {/* Mobile fullscreen overlay menu */}
      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileNavList}>
          {ALL_NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navigation;
