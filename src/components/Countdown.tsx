import type React from "react";
import { useEffect, useState, useRef } from "react";
import confetti from "canvas-confetti";

function DigitBlock({ digit }: { digit: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        border: "none",
        boxShadow: "none",
        margin: "0 0.01em",
        width: "0.78em",
        height: "1.1em",
        lineHeight: 1,
        boxSizing: "border-box",
        flexShrink: 0,
        fontVariantNumeric: "tabular-nums",
      }}
    >
      <span
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          lineHeight: 1,
          textAlign: "center",
        }}
      >
        {digit}
      </span>
    </span>
  );
}

function Separator() {
  return (
    <span
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 0.06em",
        color: "rgba(191, 88, 255, 0.6)",
        width: "0.38em",
        height: "1.1em",
        lineHeight: 1,
        flexShrink: 0,
      }}
    >
      :
    </span>
  );
}

const TARGET_DATE = new Date("2026-09-15T09:00:00+05:30").getTime();

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

function calculateTimeLeft(targetTime: number): TimeLeft {
  const now = Date.now();
  const distance = targetTime - now;

  if (distance <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    days: days.toString().padStart(2, "0"),
    hours: hours.toString().padStart(2, "0"),
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
  };
}

export function Countdown(): React.JSX.Element {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(TARGET_DATE),
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasFiredConfettiRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const triggerConfetti = () => {
      if (hasFiredConfettiRef.current) return;
      hasFiredConfettiRef.current = true;
      
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    };

    const updateCountdown = () => {
      const remaining = calculateTimeLeft(TARGET_DATE);
      setTimeLeft(remaining);
      const isFinished = 
        remaining.days === "00" &&
        remaining.hours === "00" &&
        remaining.minutes === "00" &&
        remaining.seconds === "00" &&
        Date.now() >= TARGET_DATE;
        
      if (isFinished && isVisible) {
        triggerConfetti();
      }
      return isFinished;
    };

    const isFinished = updateCountdown();
    let interval: NodeJS.Timeout | undefined;
    
    if (!isFinished) {
      interval = setInterval(() => {
        if (updateCountdown()) {
          clearInterval(interval);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        maxWidth: "100vw",
        margin: "0 auto",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-family-heading)",
        overflow: "hidden",
        padding: "0",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(0.9rem, 3vw, 2rem)",
          fontWeight: "normal",
          marginBottom: "1rem",
          color: "rgba(255, 255, 255, 0.8)",
          lineHeight: 1.1,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        A new dawn begins in...
      </h2>
      <div
        style={{
          fontSize: "clamp(1.2rem, 7.4vw, 7rem)",
          lineHeight: 1.1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontVariantNumeric: "tabular-nums",
          whiteSpace: "nowrap",
          fontWeight: 900,
          width: "100%",
          maxWidth: "96vw",
          margin: "0 auto",
        }}
      >
        {timeLeft.days.split("").map((d, i) => (
          <DigitBlock key={`d-${i}`} digit={d} />
        ))}
        <Separator />
        {timeLeft.hours.split("").map((d, i) => (
          <DigitBlock key={`h-${i}`} digit={d} />
        ))}
        <Separator />
        {timeLeft.minutes.split("").map((d, i) => (
          <DigitBlock key={`m-${i}`} digit={d} />
        ))}
        <Separator />
        {timeLeft.seconds.split("").map((d, i) => (
          <DigitBlock key={`s-${i}`} digit={d} />
        ))}
      </div>
    </div>
  );
}
