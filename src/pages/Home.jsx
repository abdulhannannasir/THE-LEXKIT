import { useState } from "react";
import { joinWaitlist } from "../supabaseClient.js";

function Tier({ name, price, tagline, items, featured }) {
  return (
    <div
      style={{
        border: featured ? "2px solid var(--navy)" : "1px solid var(--rule)",
        borderRadius: 14,
        background: "var(--paper-raised)",
        padding: "28px 24px",
        position: "relative",
        boxShadow: featured ? "var(--shadow-md)" : "var(--shadow-sm)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {featured && (
        <div
          style={{
            position: "absolute",
            top: -12,
            left: 24,
            background: "var(--navy)",
            color: "var(--gold)",
            fontFamily: "var(--mono)",
            fontSize: 10.5,
            letterSpacing: "0.08em",
            padding: "4px 10px",
            borderRadius: 999,
          }}
        >
          MOST POPULAR
        </div>
      )}
      <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 22, marginBottom: 4 }}>{name}</div>
      <p style={{ fontSize: 13.5, color: "var(--text-muted)", marginBottom: 16, lineHeight: 1.5 }}>{tagline}</p>
      <div style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 34, marginBottom: 18, color: "var(--navy)" }}>
        {price}
      </div>
      <div style={{ flex: 1, marginBottom: 20 }}>
        {items.map((it) => (
          <div key={it} style={{ display: "flex", gap: 8, fontSize: 13.5, marginBottom: 9, lineHeight: 1.4 }}>
            <span style={{ color: "var(--gold-text)", flexShrink: 0 }}>✓</span>
            <span>{it}</span>
          </div>
        ))}
      </div>
      <button
        className={featured ? "btn btn-gold" : "btn btn-outline"}
        style={{ width: "100%", padding: "12px 16px", fontSize: 14, borderRadius: 8 }}
        disabled
        title="Launching soon — join the waitlist below"
      >
        Coming Soon
      </button>
    </div>
  );
}

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | done | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      await joinWaitlist(email.trim());
      setStatus("done");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div
      id="waitlist"
      style={{
        maxWidth: 520,
        margin: "0 auto",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 14,
        background: "var(--navy)",
        color: "#f2f4f7",
        padding: "32px 28px",
        textAlign: "center",
        scrollMarginTop: 100,
      }}
    >
      <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Get early access</div>
      <p style={{ fontSize: 13.5, color: "#a9b3c0", marginBottom: 18, lineHeight: 1.5 }}>
        Join the waitlist and be first to know when TheLexKit launches — plus an early-access discount.
      </p>
      {status === "done" ? (
        <div
          style={{
            background: "rgba(180,136,58,0.18)",
            border: "1px solid rgba(180,136,58,0.4)",
            borderRadius: 8,
            padding: "12px 14px",
            fontSize: 13.5,
          }}
        >
          You're on the list. We'll email you when it's ready.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          <input
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: "1 1 220px",
              padding: "12px 14px",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 8,
              fontSize: 14,
              background: "rgba(255,255,255,0.06)",
              color: "#f2f4f7",
            }}
          />
          <button type="submit" className="btn btn-gold" disabled={status === "loading"}>
            {status === "loading" ? "Joining…" : "Join Waitlist"}
          </button>
        </form>
      )}
      {status === "error" && <div style={{ color: "#f0a0a0", fontSize: 12, marginTop: 10 }}>Enter a valid email and try again.</div>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="wrap" style={{ padding: "0 24px 64px" }}>
      {/* Hero */}
      <div style={{ textAlign: "center", padding: "64px 0 44px", maxWidth: 780, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-block",
            background: "var(--gold-soft)",
            border: "1px solid var(--gold-border)",
            color: "var(--gold-text)",
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: "0.08em",
            padding: "6px 14px",
            borderRadius: 999,
            marginBottom: 22,
          }}
        >
          LAUNCHING SOON
        </div>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: 44, lineHeight: 1.15, marginBottom: 18, color: "var(--navy)" }}>
          Stop starting every legal document from a blank page.
        </h1>
        <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.6 }}>
          TheLexKit is a practical legal documentation system for founders, SMEs, and freelancers —
          ready-to-edit contracts, notices, and compliance checklists, each with plain-English guidance
          on what you're actually signing.
        </p>
      </div>

      {/* Pricing tiers */}
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 980, margin: "0 auto 60px" }}
        className="lk-tiers"
      >
        <Tier
          name="Starter"
          price="$19"
          tagline="Try it out with the essentials."
          items={["5 contracts", "5 business notices", "5 compliance checklists", "Clause mini-library"]}
        />
        <Tier
          name="Professional"
          price="$49"
          tagline="The complete toolkit."
          featured
          items={[
            "12 contracts (Word + PDF)",
            "10 business notices",
            "10 compliance checklists",
            "100-clause commercial library",
            "Contract & business risk checker",
            "12 months of updates",
          ]}
        />
        <Tier
          name="Business"
          price="$99"
          tagline="For growing operations, including trade."
          items={[
            "Everything in Professional",
            "Import/export compliance section",
            "HR documentation section",
            "Commercial due-diligence tools",
            "12 months of updates",
          ]}
        />
      </div>

      {/* What makes it different */}
      <div style={{ maxWidth: 780, margin: "0 auto 60px" }}>
        <h2 style={{ fontFamily: "var(--serif)", fontSize: 26, textAlign: "center", marginBottom: 30, color: "var(--navy)" }}>
          Not just templates
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }} className="lk-features">
          {[
            ["Plain-English clause guide", "Understand what each clause does, what to check, and where it gets negotiated — before you sign."],
            ["Risk-rated", "Every document flags which provisions matter most, so you know where to focus your attention."],
            ["Built for editing", "Word + PDF formats, with every field you need to fill in clearly marked."],
            ["Honest about limits", "Educational templates, not personalized legal advice — with clear guidance on when to bring in a lawyer."],
          ].map(([title, body]) => (
            <div key={title}>
              <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{title}</div>
              <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.6 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>

      <WaitlistForm />

      <p style={{ maxWidth: 580, margin: "28px auto 0", fontSize: 12, color: "var(--text-muted)", textAlign: "center", lineHeight: 1.6 }}>
        TheLexKit provides educational templates for general informational purposes. It is not personalized legal
        advice and does not create a lawyer-client relationship. Prices shown are launch estimates and may change
        before release.
      </p>

      <style>{`
        @media (max-width: 860px) {
          .lk-tiers { grid-template-columns: 1fr !important; }
          .lk-features { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
