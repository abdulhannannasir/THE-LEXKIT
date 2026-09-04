export default function Footer({ onNavigate }) {
  return (
    <footer style={{ background: "var(--navy)", color: "#e8ecf1", marginTop: 60 }}>
      <div
        className="wrap"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          padding: "28px 24px",
        }}
      >
        <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 17 }}>TheLexKit</div>
        <div style={{ display: "flex", gap: 24, fontSize: 13, color: "#a9b3c0" }}>
          <a href="/terms" onClick={(e) => { e.preventDefault(); onNavigate("terms"); }}>Terms</a>
          <a href="/privacy" onClick={(e) => { e.preventDefault(); onNavigate("privacy"); }}>Privacy</a>
        </div>
      </div>
      <div
        className="wrap"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "14px 24px", fontSize: 12, color: "#8391a3" }}
      >
        © {new Date().getFullYear()} TheLexKit. All rights reserved. Educational legal templates — not legal advice.
      </div>
    </footer>
  );
}
