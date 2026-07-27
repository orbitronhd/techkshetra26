import React, { Suspense } from "react";
import { HeroGlitch } from "./HeroGlitch.tsx";
import { Countdown } from "./Countdown.tsx";
import styles from "./css/Page.module.css";

const About = React.lazy(() => import("./About.tsx").then((m) => ({ default: m.About })));
const Tshirts = React.lazy(() => import("./Tshirts.tsx").then((m) => ({ default: m.Tshirts })));
const Events = React.lazy(() => import("./Events.tsx").then((m) => ({ default: m.Events })));
const Gallery = React.lazy(() => import("./Gallery.tsx").then((m) => ({ default: m.Gallery })));
const Footer = React.lazy(() => import("./Footer.tsx").then((m) => ({ default: m.Footer })));

export function HomePage(): React.JSX.Element {
  return (
    <div>
      <HeroGlitch />
      <section style={{ padding: "4rem 2rem" }}>
        <div className={styles.contentBody}>
          <Countdown />
        </div>
      </section>

      <Suspense fallback={null}>
        <About />
        <Tshirts />
        <Events />
        <Gallery />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default HomePage;
