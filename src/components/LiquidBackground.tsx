import type React from "react";
import { useEffect, useRef } from "react";

export function LiquidBackground(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const orbs = [
      {
        x: Math.random(),
        y: Math.random(),
        vx: 0.0008,
        vy: 0.0012,
        radius: 0.7,
        color: "40, 0, 123",
      },
      {
        x: Math.random(),
        y: Math.random(),
        vx: -0.001,
        vy: 0.0008,
        radius: 0.5,
        color: "191, 88, 255",
      },
      {
        x: Math.random(),
        y: Math.random(),
        vx: 0.0012,
        vy: -0.001,
        radius: 0.6,
        color: "248, 119, 212",
      },
    ];

    const render = () => {
      ctx.fillStyle = "#141218";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "screen";

      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -0.2 || orb.x > 1.2) orb.vx *= -1;
        if (orb.y < -0.2 || orb.y > 1.2) orb.vy *= -1;

        const cx = orb.x * canvas.width;
        const cy = orb.y * canvas.height;
        const r = orb.radius * Math.max(canvas.width, canvas.height);

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        gradient.addColorStop(0, `rgba(${orb.color}, 0.3)`);
        gradient.addColorStop(0.4, `rgba(${orb.color}, 0.1)`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = "source-over";

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
