import type React from "react";
import { Footer } from "./Footer.tsx";
import { About } from "./About.tsx";
import { Tshirts } from "./Tshirts.tsx";
import { Events } from "./Events.tsx";
import { Gallery } from "./Gallery.tsx";
import { HeroGlitch } from "./HeroGlitch.tsx";
import { Countdown } from "./Countdown.tsx";
import { FloatingBottomBar } from "./FloatingBottomBar.tsx";
import styles from "./css/Page.module.css";

export function HomePage(): React.JSX.Element {
  return (
    <div>
      <HeroGlitch />
      <section style={{ padding: "4rem 2rem" }}>
        <div className={styles.contentBody}>
          <Countdown />
        </div>
      </section>

      <About />
      <Tshirts />
      <Events />
      <Gallery />
      <FloatingBottomBar />
      <Footer />
    </div>
  );
}

export default HomePage;
