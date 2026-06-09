"use client";

export default function HealthPrivacyPolicy() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-5 border-b border-slate-800">
        <a href="/" className="text-2xl font-bold">Tokko Products</a>
        <div className="flex gap-4">
          <a href="/" className="text-slate-300">Products</a>
          <a href="/health" className="text-slate-300">Tokko Health</a>
          <a href="/#contact" className="text-slate-300">Contact</a>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy - Tokko Health</h1>
        <p className="text-slate-400 italic mb-8">Last Updated: June 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-teal-400">1. Information We Collect</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li><strong>Personal Info:</strong> Name, email (for Google login)</li>
            <li><strong>Health Data:</strong> Blood pressure, sugar levels, weight, pulse, temperature, oxygen levels, medications</li>
            <li><strong>Device Info:</strong> Basic device details for app stability</li>
            <li><strong>Usage Data:</strong> How you interact with the app</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-teal-400">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>To store and display your health records</li>
            <li>To provide AI-powered health insights</li>
            <li>To send medication reminders (if enabled)</li>
            <li>To generate health reports</li>
            <li>To improve app performance</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-teal-400">3. Data Storage & Security</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Data is stored securely on Firebase (Google Cloud)</li>
            <li>We DO NOT sell or share your data with third parties</li>
            <li>You can delete your account and data anytime</li>
            <li>Data is encrypted in transit and at rest</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-teal-400">4. Your Rights</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>View, edit, or delete your data anytime</li>
            <li>Export your health reports</li>
            <li>Completely delete your account</li>
            <li>Opt-out of non-essential features</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-teal-400">5. Third-Party Services</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li><strong>Firebase:</strong> For authentication and database</li>
            <li><strong>Google Sign-In:</strong> For user authentication</li>
            <li><strong>Google ML Kit:</strong> For medicine scanning (OCR)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-teal-400">6. Contact Us</h2>
          <p className="text-slate-300">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-slate-300 mt-2">
            <strong>Email:</strong> privacy@tokko.co.in
          </p>
        </section>

        <a href="/" className="inline-block mt-8 text-teal-400 hover:text-teal-300">
          ← Back to Products
        </a>
      </article>

      {/* Footer */}
      <footer className="border-t border-slate-800 text-center p-6 text-slate-500">
        © 2026 Pedicive Hygiene Care (Tokko Products)
      </footer>

    </div>
  );
}