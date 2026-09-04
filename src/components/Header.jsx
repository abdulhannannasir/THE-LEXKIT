import { useEffect, useState } from "react";

export default function Header({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 520);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(250, 248, 244, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
        transition: "background 300ms var(--ease), border-color 300ms var(--ease)",
      }}
    >
      <div
        className="wrap"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 24px" }}
      >
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("home");
          }}
          style={{ display: "flex", alignItems: "center", gap: 10 }}
        >
          <span
            style={{
              width: 30,
              height: 30,
              borderRadius: 7,
              background: scrolled ? "var(--navy)" : "rgba(232,193,112,0.15)",
              border: scrolled ? "none" : "1px solid rgba(232,193,112,0.4)",
              color: "var(--gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--serif)",
              fontWeight: 700,
              fontSize: 16,
              transition: "background 300ms var(--ease), border-color 300ms var(--ease)",
            }}
          >
            L
          </span>
          <span
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 700,
              fontSize: 21,
              color: scrolled ? "var(--navy)" : "#f4f1ea",
              transition: "color 300ms var(--ease)",
            }}
          >
            TheLexKit
          </span>
        </a>
        <a
          href="#waitlist"
          className={scrolled ? "btn" : "btn btn-gold"}
          style={{ fontSize: 13, padding: "10px 18px" }}
        >
          Join Waitlist
        </a>
      </div>
    </header>
  );
}
