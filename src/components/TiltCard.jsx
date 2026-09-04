import { useRef, useState } from "react";

/**
 * Wraps content in a card that tilts in 3D toward the cursor and
 * shows a soft light following the pointer across its surface.
 * The one deliberate "3D" moment on the page — used on the pricing
 * cards only, not scattered across every element.
 */
export default function TiltCard({ children, style, featured }) {
  const ref = useRef(null);
  const reducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 });

  function handleMouseMove(e) {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateX = (py - 0.5) * -8;
    const rotateY = (px - 0.5) * 8;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    setGlow({ x: px * 100, y: py * 100, opacity: 1 });
  }

  function handleMouseLeave() {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
    setGlow((g) => ({ ...g, opacity: 0 }));
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform,
        transformStyle: "preserve-3d",
        transition: "transform 150ms ease-out",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(232,193,112,${
            featured ? 0.22 : 0.14
          }), transparent 55%)`,
          opacity: glow.opacity,
          transition: "opacity 200ms ease-out",
          pointerEvents: "none",
        }}
      />
      {children}
    </div>
  );
}
