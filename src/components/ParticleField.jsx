import { useEffect, useRef } from "react";

/**
 * A quiet field of drifting gold particles for the hero background.
 * Pure canvas, no dependency. Draws one static frame under
 * prefers-reduced-motion instead of animating.
 */
export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w, h, particles, raf;

    function resize() {
      w = canvas.width = canvas.offsetWidth * dpr;
      h = canvas.height = canvas.offsetHeight * dpr;
    }

    function init() {
      resize();
      const count = Math.min(90, Math.floor((w * h) / 55000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: (Math.random() * 1.4 + 0.4) * dpr,
        vx: (Math.random() - 0.5) * 0.12 * dpr,
        vy: (Math.random() - 0.5) * 0.12 * dpr,
        a: Math.random() * 0.45 + 0.15,
      }));
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        if (!reduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = w;
          if (p.x > w) p.x = 0;
          if (p.y < 0) p.y = h;
          if (p.y > h) p.y = 0;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 193, 112, ${p.a})`;
        ctx.fill();
      }
      if (!reduced) raf = requestAnimationFrame(frame);
    }

    init();
    frame();
    window.addEventListener("resize", init);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />;
}
