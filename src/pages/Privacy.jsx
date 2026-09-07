import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Privacy({ onNavigate }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Header onNavigate={onNavigate} />
      <main className="flex-grow max-w-3xl mx-auto px-6 py-32 w-full">
        <h1 className="text-4xl font-serif font-bold text-[#0A192F] mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none text-slate-700 space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#C5A880]">Last Updated: September 2026</p>
          
          <h2 className="text-2xl font-serif text-[#0A192F] mt-8 mb-4">1. Information We Collect</h2>
          <p>We collect basic information necessary to process your orders and deliver your digital products. This includes your email address (for delivery and waitlist notifications) and basic contact information provided during checkout.</p>
          
          <h2 className="text-2xl font-serif text-[#0A192F] mt-8 mb-4">2. Payment Processing</h2>
          <p>We use <strong>Whop</strong> as our merchant of record and payment processor. TheLexKit never collects, stores, or processes your credit card numbers or sensitive financial data directly. All payment data is handled securely by Whop.</p>
          
          <h2 className="text-2xl font-serif text-[#0A192F] mt-8 mb-4">3. How We Use Your Data</h2>
          <p>Your email is used strictly to deliver purchased products, provide updates about your purchases, or notify you if you joined our waitlist. We do not sell or rent your personal information to third parties.</p>
          
          <h2 className="text-2xl font-serif text-[#0A192F] mt-8 mb-4">4. Third-Party Services</h2>
          <p>Our website utilizes Vercel Web Analytics to understand general site traffic and usage patterns. This data is anonymized and does not track individual user identities across the web.</p>
          
          <h2 className="text-2xl font-serif text-[#0A192F] mt-8 mb-4">5. Contact Us</h2>
          <p>For questions or requests regarding your data, please contact us at Abdulhannannasir666@gmail.com.</p>
        </div>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
