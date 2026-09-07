import { useState } from "react";
import { joinWaitlist } from "../supabaseClient.js";
import { useReveal } from "../hooks/useReveal.js";
import ParticleField from "../components/ParticleField.jsx";
import TiltCard from "../components/TiltCard.jsx";

function KineticHeadline({ text }) {
  const words = text.split(" ");
  let delay = 0;
  return (
    <>
      {words.map((word, i) => {
        const d = delay;
        delay += 70;
        return (
          <span key={i} className="kinetic-word" style={{ animationDelay: `${d}ms` }}>
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        );
      })}
    </>
  );
}

function Tier({ name, price, tagline, items, featured, status }) {
  return (
    <TiltCard
      featured={featured}
      style={{
        border: featured ? "1px solid rgba(232,193,112,0.5)" : "1px solid var(--rule)",
        borderRadius: 16,
        background: featured
          ? "linear-gradient(180deg, #ffffff 0%, #fdfaf3 100%)"
          : "var(--paper-raised)",
        padding: "30px 26px",
        boxShadow: featured ? "0 20px 50px rgba(15,34,56,0.16)" : "var(--shadow-sm)",
        display: "flex",
        flexDirection: "column",
        opacity: status === "development" ? 0.82 : 1,
      }}
    >
      {featured && (
        <div
          style={{
            position: "absolute",
            top: -12,
            left: 26,
            background: "var(--navy)",
            color: "var(--gold)",
            fontFamily: "var(--mono)",
            fontSize: 10.5,
            letterSpacing: "0.08em",
            padding: "4px 10px",
            borderRadius: 999,
            zIndex: 2,
          }}
        >
          {status === "development" ? "IN DEVELOPMENT" : "AVAILABLE NOW"}
        </div>
      )}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 22, marginBottom: 4 }}>{name}</div>
        <p style={{ fontSize: 13.5, color: "var(--text-muted)", marginBottom: 16, lineHeight: 1.5 }}>{tagline}</p>
        <div style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 34, marginBottom: 18, color: "var(--navy)" }}>
          {price}
        </div>
        <div style={{ marginBottom: 22 }}>
          {items.map((it) => (
            <div key={it} style={{ display: "flex", gap: 8, fontSize: 13.5, marginBottom: 9, lineHeight: 1.4 }}>
              <span style={{ color: status === "development" ? "var(--text-muted)" : "var(--gold-text)", flexShrink: 0 }}>
                {status === "development" ? "\u25CB" : "\u2713"}
              </span>
              <span style={{ color: status === "development" ? "var(--text-muted)" : "inherit" }}>{it}</span>
            </div>
          ))}
        </div>
        <a href="https://whop.com/thelexkit/legal-documents-starter-kit" className="mt-8 block w-full py-3 px-4 bg-[#C5A880] hover:bg-[#b59870] text-[#0A192F] font-bold text-center rounded transition-colors duration-200">Buy Now — $19</a>
      </div>
    </TiltCard>
  );
}

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

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
        border: "1px solid rgba(232,193,112,0.25)",
        borderRadius: 16,
        background: "linear-gradient(180deg, var(--navy) 0%, var(--navy-deep) 100%)",
        color: "#f2f4f7",
        padding: "34px 28px",
        textAlign: "center",
        scrollMarginTop: 100,
        boxShadow: "0 24px 60px rgba(8,20,34,0.35)",
      }}
    >
      <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 21, marginBottom: 8 }}>Get early access</div>
      <p style={{ fontSize: 13.5, color: "#a9b3c0", marginBottom: 18, lineHeight: 1.5 }}>
        Join the waitlist and be first to know when TheLexKit launches &mdash; plus an early-access discount.
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
          You&rsquo;re on the list. We&rsquo;ll email you when it&rsquo;s ready.
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
            {status === "loading" ? "Joining\u2026" : "Join Waitlist"}
          </button>
        </form>
      )}
      {status === "error" && (
        <div style={{ color: "#f0a0a0", fontSize: 12, marginTop: 10 }}>Enter a valid email and try again.</div>
      )}
    </div>
  );
}

function RevealSection({ children, style }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`reveal${visible ? " is-visible" : ""}`} style={style}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* ============ HERO ============ */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "radial-gradient(ellipse at 50% -10%, #16304d 0%, var(--navy) 45%, var(--navy-deep) 100%)",
        }}
      >
        <ParticleField />
        <div className="grain-overlay" />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(232,193,112,0.08), transparent 40%), radial-gradient(circle at 80% 70%, rgba(232,193,112,0.06), transparent 40%)",
          }}
        />

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 840, padding: "0 24px" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(232,193,112,0.1)",
              border: "1px solid rgba(232,193,112,0.35)",
              color: "#e8c170",
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.08em",
              padding: "6px 14px",
              borderRadius: 999,
              marginBottom: 26,
            }}
          >
            LAUNCHING SOON
          </div>

          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(34px, 6vw, 58px)",
              lineHeight: 1.12,
              marginBottom: 22,
              color: "#f7f5f0",
            }}
          >
            <KineticHeadline text="Stop starting every legal document from a blank page." />
          </h1>

          <p
            className="kinetic-word"
            style={{
              animationDelay: "500ms",
              fontSize: 17,
              color: "#b7c0cc",
              lineHeight: 1.65,
              maxWidth: 620,
              margin: "0 auto 34px",
            }}
          >
            TheLexKit is a practical legal documentation system for founders, SMEs, and freelancers &mdash;
            ready-to-edit contracts, notices, and compliance checklists, each with plain-English guidance on
            what you&rsquo;re actually signing.
          </p>

          <div
            className="kinetic-word"
            style={{ animationDelay: "620ms", display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}
          >
            <a href="#waitlist" className="btn btn-gold" style={{ fontSize: 14.5, padding: "13px 26px" }}>
              Join Waitlist
            </a>
            <a
              href="#features"
              className="btn"
              style={{
                fontSize: 14.5,
                padding: "13px 26px",
                background: "transparent",
                border: "1.5px solid rgba(255,255,255,0.25)",
                color: "#f2f4f7",
              }}
            >
              See what&rsquo;s inside
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 28,
            left: "50%",
            transform: "translateX(-50%)",
            width: 1,
            height: 46,
            background: "linear-gradient(180deg, rgba(232,193,112,0.5), transparent)",
            zIndex: 2,
          }}
        />
      </section>

      {/* ============ PRICING ============ */}
      <div className="wrap" style={{ padding: "84px 24px 64px" }} id="features">
        <RevealSection style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26, maxWidth: 1000, margin: "0 auto 64px" }}>
          <div className="lk-tiers" style={{ display: "contents" }}>
            <Tier
              name="Starter Kit"
              price="$19"
              tagline="The current library \u2014 real documents, ready today."
              featured
              status="available"
              items={[
                "Mutual NDA (Professional Edition)",
                "Independent Contractor Agreement",
                "Business Services Agreement",
                "Vendor / Supplier Agreement",
                "Payment Demand Notice",
                "Breach of Contract Notice",
                "Contract Review Checklist",
                "Word + PDF, with plain-English clause guides",
                "Free updates as new documents are added",
              ]}
            />
            <Tier
              name="Professional"
              price="$49"
              tagline="Everything in Starter, plus the expanded library \u2014 in progress."
              status="development"
              items={[
                "Everything in Starter Kit",
                "Website & software development agreements",
                "Statement of Work template",
                "Additional business notices",
                "Expanded compliance checklists",
                "Commercial clause library",
                "Contract & business risk checker",
              ]}
            />
            <Tier
              name="Business"
              price="$99"
              tagline="For growing operations, including trade \u2014 planned."
              status="development"
              items={[
                "Everything in Professional",
                "Import/export compliance section",
                "HR documentation section",
                "Commercial due-diligence tools",
                "12 months of updates",
              ]}
            />
          </div>
        </RevealSection>

        <p style={{ textAlign: "center", fontSize: 12.5, color: "var(--text-muted)", marginTop: -36, marginBottom: 64 }}>
          Starter Kit reflects the current, real document library \u2014 not a future promise. New documents are added regularly, and Starter Kit buyers get them free.
        </p>

        {/* ============ FEATURES ============ */}
        <RevealSection style={{ maxWidth: 780, margin: "0 auto 72px" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: 27, textAlign: "center", marginBottom: 32, color: "var(--navy)" }}>
            Not just templates
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }} className="lk-features">
            {[
              ["Plain-English clause guide", "Understand what each clause does, what to check, and where it gets negotiated \u2014 before you sign."],
              ["Risk-rated", "Every document flags which provisions matter most, so you know where to focus your attention."],
              ["Built for editing", "Word + PDF formats, with every field you need to fill in clearly marked."],
              ["Honest about limits", "Educational templates, not personalized legal advice \u2014 with clear guidance on when to bring in a lawyer."],
            ].map(([title, body]) => (
              <div key={title}>
                <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{title}</div>
                <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* ============ WAITLIST ============ */}
        <RevealSection>
          <WaitlistForm />
          <p style={{ maxWidth: 580, margin: "28px auto 0", fontSize: 12, color: "var(--text-muted)", textAlign: "center", lineHeight: 1.6 }}>
            TheLexKit provides educational templates for general informational purposes. It is not personalized
            legal advice and does not create a lawyer-client relationship. Prices shown are launch estimates and
            may change before release.
          </p>
        </RevealSection>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .lk-tiers { grid-template-columns: 1fr !important; }
          .lk-features { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
