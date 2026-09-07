export default function Privacy() {
  return (
    <div className="wrap" style={{ padding: "48px 24px 64px", maxWidth: 720, margin: "0 auto" }}>
      <h1 style={{ fontFamily: "var(--serif)", fontSize: 32, marginBottom: 8, color: "var(--navy)" }}>Privacy Policy</h1>
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>
        Last updated: September 2026
      </p>

      <h2 style={{ fontFamily: "var(--serif)", fontSize: 19, marginTop: 28 }}>1. Information We Collect</h2>
      <p style={{ fontSize: 15, lineHeight: 1.7 }}>
        We collect basic information necessary to process your orders and deliver your digital products. This
        includes your email address (for delivery and waitlist notifications) and basic contact information
        provided during checkout.
      </p>

      <h2 style={{ fontFamily: "var(--serif)", fontSize: 19, marginTop: 28 }}>2. Payment Processing</h2>
      <p style={{ fontSize: 15, lineHeight: 1.7 }}>
        We use Whop as our merchant of record and payment processor. TheLexKit never collects, stores, or
        processes your credit card numbers or sensitive financial data directly. All payment data is handled
        securely by Whop.
      </p>

      <h2 style={{ fontFamily: "var(--serif)", fontSize: 19, marginTop: 28 }}>3. How We Use Your Data</h2>
      <p style={{ fontSize: 15, lineHeight: 1.7 }}>
        Your email is used strictly to deliver purchased products, provide updates about your purchases, or
        notify you if you joined our waitlist. We do not sell or rent your personal information to third parties.
      </p>

      <h2 style={{ fontFamily: "var(--serif)", fontSize: 19, marginTop: 28 }}>4. Third-Party Services</h2>
      <p style={{ fontSize: 15, lineHeight: 1.7 }}>
        Our website utilizes Vercel Web Analytics to understand general site traffic and usage patterns. This
        data is anonymized and does not track individual user identities across the web.
      </p>

      <h2 style={{ fontFamily: "var(--serif)", fontSize: 19, marginTop: 28 }}>5. Contact Us</h2>
      <p style={{ fontSize: 15, lineHeight: 1.7 }}>
        For questions or requests regarding your data, please contact us at{" "}
        <a href="mailto:Abdulhannannasir666@gmail.com" style={{ color: "var(--navy)", textDecoration: "underline" }}>
          Abdulhannannasir666@gmail.com
        </a>.
      </p>
    </div>
  );
}
