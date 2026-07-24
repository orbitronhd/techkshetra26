import type React from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: string;
  baseOpacity?: number;
  enableBlur?: boolean;
  baseRotation?: number;
  blurStrength?: number;
}

export function ScrollReveal({
  children,
  baseOpacity = 0.1,
  enableBlur = false,
  baseRotation = 3,
  blurStrength = 4,
}: ScrollRevealProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll(".reveal-word");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          opacity: baseOpacity,
          rotationZ: baseRotation,
          filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
          y: 20,
        },
        {
          opacity: 1,
          rotationZ: 0,
          filter: "blur(0px)",
          y: 0,
          duration: 1.5,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "center 45%",
            scrub: 1,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [baseOpacity, enableBlur, baseRotation, blurStrength]);

  const words = children.split(" ").map((word, idx) => (
    <span
      key={idx}
      className="reveal-word"
      style={{
        display: "inline-block",
        marginRight: "0.25em",
        willChange: "transform, opacity, filter",
      }}
    >
      {word}
    </span>
  ));

  return (
    <span ref={containerRef} style={{ display: "inline-block" }}>
      {words}
    </span>
  );
}

export default ScrollReveal;
