import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms({ onNavigate }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Header onNavigate={onNavigate} />
      <main className="flex-grow max-w-3xl mx-auto px-6 py-32 w-full">
        <h1 className="text-4xl font-serif font-bold text-[#0A192F] mb-8">Terms of Use</h1>
        <div className="prose prose-slate max-w-none text-slate-700 space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#C5A880]">Last Updated: September 2026</p>
          
          <h2 className="text-2xl font-serif text-[#0A192F] mt-8 mb-4">1. Educational Purpose Only</h2>
          <p>TheLexKit provides legal templates, checklists, and guides for general educational and informational purposes. <strong>We are not a law firm, and our products are not a substitute for personalized legal advice.</strong> Using our templates does not create an attorney-client relationship.</p>
          
          <h2 className="text-2xl font-serif text-[#0A192F] mt-8 mb-4">2. Digital Products & Refund Policy</h2>
          <p>Due to the nature of instant digital downloads, all sales are final. <strong>We do not offer refunds</strong> once a product has been accessed or downloaded. If you encounter a technical issue with a file, please contact us for a replacement.</p>
          
          <h2 className="text-2xl font-serif text-[#0A192F] mt-8 mb-4">3. Permitted Use</h2>
          <p>When you purchase a product from TheLexKit, you are granted a non-exclusive, non-transferable license to use, edit, and modify the documents for your own personal or internal business use. You may not resell, redistribute, or publicly share the unmodified templates.</p>
          
          <h2 className="text-2xl font-serif text-[#0A192F] mt-8 mb-4">4. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising from these terms or your use of the products shall be subject to the exclusive jurisdiction of the courts located in Lahore, Pakistan.</p>
          
          <h2 className="text-2xl font-serif text-[#0A192F] mt-8 mb-4">5. Contact</h2>
          <p>If you have questions about these Terms, please contact us at Abdulhannannasir666@gmail.com.</p>
        </div>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
