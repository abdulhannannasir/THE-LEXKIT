export default function Header({ onNavigate }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        background: "var(--paper-raised)",
        borderBottom: "1px solid var(--rule)",
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
              background: "var(--navy)",
              color: "var(--gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--serif)",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            L
          </span>
          <span style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 21, color: "var(--navy)" }}>
            TheLexKit
          </span>
        </a>
        <a
          href="#waitlist"
          className="btn"
          style={{ fontSize: 13, padding: "10px 18px" }}
        >
          Join Waitlist
        </a>
      </div>
    </header>
  );
}
