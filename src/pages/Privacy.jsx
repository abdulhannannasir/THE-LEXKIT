export default function Privacy() {
  return (
    <div className="wrap" style={{ padding: "48px 24px 64px", maxWidth: 720, margin: "0 auto" }}>
      <h1 style={{ fontFamily: "var(--serif)", fontSize: 32, marginBottom: 8, color: "var(--navy)" }}>Privacy Policy</h1>
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>
        Draft — placeholder policy pending full review. Do not rely on this as final before launch.
      </p>

      <h2 style={{ fontFamily: "var(--serif)", fontSize: 19, marginTop: 28 }}>What we collect</h2>
      <p style={{ fontSize: 15, lineHeight: 1.7 }}>
        Currently, this site collects only the email address you provide when joining the waitlist. Once purchases
        are live, this will expand to include billing/order information handled by our payment provider — update
        this section at that time.
      </p>

      <h2 style={{ fontFamily: "var(--serif)", fontSize: 19, marginTop: 28 }}>How we use it</h2>
      <p style={{ fontSize: 15, lineHeight: 1.7 }}>
        Your email is used solely to notify you about the TheLexKit launch and related updates. We do not sell or
        share your email with third parties for marketing purposes.
      </p>

      <h2 style={{ fontFamily: "var(--serif)", fontSize: 19, marginTop: 28 }}>Where it's stored</h2>
      <p style={{ fontSize: 15, lineHeight: 1.7 }}>
        Waitlist data is stored using Supabase, a third-party database provider. [Confirm Supabase's data-hosting
        region and add any required disclosures before launch, particularly if targeting EU/UK visitors under
        GDPR.]
      </p>

      <h2 style={{ fontFamily: "var(--serif)", fontSize: 19, marginTop: 28 }}>Your rights</h2>
      <p style={{ fontSize: 15, lineHeight: 1.7 }}>
        You may request removal of your email from our waitlist at any time by contacting [placeholder — add
        contact email].
      </p>
    </div>
  );
}
