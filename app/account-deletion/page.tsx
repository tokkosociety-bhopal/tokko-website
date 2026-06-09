"use client";

export default function AccountDeletion() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <header className="flex justify-between items-center px-8 py-5 border-b border-slate-800">
        <a href="/" className="text-2xl font-bold">Tokko Products</a>
        <div className="flex gap-4">
          <a href="/" className="text-slate-300">Products</a>
          <a href="/health" className="text-slate-300">Tokko Health</a>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Account Deletion Request</h1>
        <p className="text-slate-400 mb-8">Tokko Health - Family Health Monitor</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-teal-400">How to Delete Your Account</h2>
          <p className="text-slate-300 mb-4">
            We respect your right to privacy. If you wish to delete your Tokko Health account and all associated data, please follow these steps:
          </p>
          
          <h3 className="text-xl font-semibold mb-2 mt-4">Option 1: Delete from Within the App</h3>
          <ol className="list-decimal list-inside text-slate-300 space-y-2 ml-4">
            <li>Open the Tokko Health app</li>
            <li>Go to <strong>Settings</strong></li>
            <li>Select <strong>Account</strong></li>
            <li>Tap <strong>Delete Account</strong></li>
            <li>Confirm your decision</li>
          </ol>

          <h3 className="text-xl font-semibold mb-2 mt-4">Option 2: Email Us</h3>
          <p className="text-slate-300 mb-2">
            If you cannot access your account, you can request deletion by emailing us at:
          </p>
          <p className="text-teal-400 font-semibold">
            privacy@tokko.co.in
          </p>
          <p className="text-slate-300 mt-2">
            Please include your registered email address and mention "Account Deletion Request" in the subject line.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-teal-400">What Data is Deleted?</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
            <li>Personal information (name, email)</li>
            <li>All health records (BP, sugar, weight, etc.)</li>
            <li>Medication history and reminders</li>
            <li>App activity logs</li>
            <li>Device information</li>
            <li>All uploaded documents and reports</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-teal-400">Data Retention Period</h2>
          <p className="text-slate-300">
            After you request account deletion:
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
            <li>Your account will be deactivated immediately</li>
            <li>All personal data will be permanently deleted within <strong>30 days</strong></li>
            <li>Backup copies may be retained for up to <strong>90 days</strong> for legal compliance</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-teal-400">Contact Us</h2>
          <p className="text-slate-300">
            For any questions about account deletion or data privacy:
          </p>
          <p className="text-slate-300 mt-2">
            <strong>Email:</strong> privacy@tokko.co.in<br/>
            <strong>Response Time:</strong> Within 7 business days
          </p>
        </section>

        <a href="/" className="inline-block mt-8 text-teal-400 hover:text-teal-300">
          ← Back to Products
        </a>
      </article>

      <footer className="border-t border-slate-800 text-center p-6 text-slate-500">
        © 2026 Pedicive Hygiene Care (Tokko Products)
      </footer>
    </div>
  );
}