export default function Privacy() {
  return (
    <div className="wrap" style={{ padding: "48px 24px 64px", maxWidth: 720, margin: "0 auto" }}>
      <h1 style={{ fontFamily: "var(--serif)", fontSize: 32, marginBottom: 8, color: "var(--navy)" }}>Privacy Policy</h1>
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>
        Last updated: September 2026
      </p>

      <h2 style={{ fontFamily: "var(--serif)", fontSize: 19, marginTop: 28 }}>What we collect</h2>
      <p style={{ fontSize: 15, lineHeight: 1.7 }}>
        If you join our waitlist, we collect the email address you provide. If you make a purchase, our payment
        processor (Whop) collects your email, name, and payment details directly to process the transaction and
        deliver your files \u2014 TheLexKit does not receive or store your card or payment information.
      </p>

      <h2 style={{ fontFamily: "var(--serif)", fontSize: 19, marginTop: 28 }}>How we use it</h2>
      <p style={{ fontSize: 15, lineHeight: 1.7 }}>
        We use your email to deliver purchased files, notify you about new documents added to your purchased tier,
        and respond to support questions. We do not sell or share your email with third parties for marketing
        purposes.
      </p>

      <h2 style={{ fontFamily: "var(--serif)", fontSize: 19, marginTop: 28 }}>Where it's stored</h2>
      <p style={{ fontSize: 15, lineHeight: 1.7 }}>
        Waitlist emails are stored using Supabase, a third-party database provider. Purchase and payment information
        is handled directly by Whop, our payment processor, under their own privacy policy.
      </p>

      <h2 style={{ fontFamily: "var(--serif)", fontSize: 19, marginTop: 28 }}>Your rights</h2>
      <p style={{ fontSize: 15, lineHeight: 1.7 }}>
        You may request removal of your email from our waitlist, or ask what information we hold about you, at any
        time by contacting the email below.
      </p>

      <h2 style={{ fontFamily: "var(--serif)", fontSize: 19, marginTop: 28 }}>Contact</h2>
      <p style={{ fontSize: 15, lineHeight: 1.7 }}>
        Questions about this policy can be sent to{" "}
        <a href="mailto:Abdulhannannasir666@gmail.com" style={{ color: "var(--navy)", textDecoration: "underline" }}>
          Abdulhannannasir666@gmail.com
        </a>.
      </p>
    </div>
  );
}
