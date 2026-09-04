import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
      setProgress(scrollHeight > 0 ? Math.min(100, (scrollTop / scrollHeight) * 100) : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 3,
        width: `${progress}%`,
        background: "linear-gradient(90deg, var(--gold), #e8c170)",
        zIndex: 200,
        transition: "width 100ms linear",
        boxShadow: progress > 0.5 ? "0 0 8px rgba(232,193,112,0.6)" : "none",
      }}
    />
  );
}
