import type React from "react";
import { useEffect, useState } from "react";


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

export function Countdown(): React.JSX.Element {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2026-08-05T00:00:00+05:30").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
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
