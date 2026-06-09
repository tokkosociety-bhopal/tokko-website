"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* Header */}
      <header className="flex justify-between items-center px-8 py-5 border-b border-slate-800">
        <h1 className="text-2xl font-bold">Tokko Products</h1>
        <div className="flex gap-4">
          <a href="#products" className="text-slate-300">Products</a>
          <a href="#pricing" className="text-slate-300">Pricing</a>
          <a href="#about" className="text-slate-300">About</a>
          <a href="#contact" className="text-slate-300">Contact</a>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          One Platform. Multiple Solutions.
        </motion.h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Pedicive Hygiene Care brings powerful SaaS products under the Tokko brand — helping schools, societies, families, and businesses manage everything digitally.
        </p>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-teal-500 transition-all"
        >
          <h2 className="text-xl font-semibold mb-2">Tokko School</h2>
          <p className="text-slate-400">School ERP for fees, attendance & exams.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-teal-500 transition-all"
        >
          <h2 className="text-xl font-semibold mb-2">Tokko Society</h2>
          <p className="text-slate-400">Visitor, maintenance & alerts management.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-teal-500 transition-all"
        >
          <h2 className="text-xl font-semibold mb-2">Tokko GST</h2>
          <p className="text-slate-400">GST billing software for businesses.</p>
        </motion.div>

        {/* NEW: Tokko Health Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-teal-500 transition-all"
        >
          <h2 className="text-xl font-semibold mb-2">Tokko Health</h2>
          <p className="text-slate-400">Family Health Monitor - Track BP, sugar, medications with AI insights.</p>
        </motion.div>
      </section>

      {/* Pricing (IMPORTANT for payment gateway) */}
      <section id="pricing" className="py-20 px-6 text-center bg-slate-900">
        <h2 className="text-3xl font-bold mb-10">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="border border-slate-700 rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Basic</h3>
            <p className="text-2xl mt-2">₹499 / month</p>
            <p className="text-slate-400 mt-2">For small schools & societies</p>
          </div>
          <div className="border border-slate-700 rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Standard</h3>
            <p className="text-2xl mt-2">₹999 / month</p>
            <p className="text-slate-400 mt-2">Advanced features included</p>
          </div>
          <div className="border border-slate-700 rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="text-2xl mt-2">Custom</p>
            <p className="text-slate-400 mt-2">For large organizations</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Company</h2>
        <p className="text-slate-400">
          Pedicive Hygiene Care operates Tokko Products, providing SaaS software for schools, societies, families, and businesses across India.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-slate-400">Email: tokkosociety@gmail.com</p>
        <p className="text-slate-400">Website: https://tokko.co.in</p>
      </section>

      {/* Privacy Policies - Updated */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Privacy Policies</h2>
        <p className="text-slate-400 mb-6">
          We respect your privacy. Each product has its own privacy policy detailing how we collect and use data.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="/health/privacy-policy" className="block p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500 transition-all">
            <h3 className="font-semibold mb-1">Tokko Health</h3>
            <p className="text-sm text-slate-400">Family Health Monitor Privacy Policy</p>
          </a>
          <a href="/school/privacy-policy" className="block p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500 transition-all">
            <h3 className="font-semibold mb-1">Tokko School</h3>
            <p className="text-sm text-slate-400">School ERP Privacy Policy</p>
          </a>
          <a href="/society/privacy-policy" className="block p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500 transition-all">
            <h3 className="font-semibold mb-1">Tokko Society</h3>
            <p className="text-sm text-slate-400">Society Management Privacy Policy</p>
          </a>
          <a href="/gst/privacy-policy" className="block p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500 transition-all">
            <h3 className="font-semibold mb-1">Tokko GST</h3>
            <p className="text-sm text-slate-400">GST Billing Privacy Policy</p>
          </a>
        </div>
      </section>

      {/* Terms */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
        <p className="text-slate-400">
          By using Tokko products, you agree to our terms. Users are responsible for maintaining account security and proper use of services.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 text-center p-6 text-slate-500">
        © 2026 Pedicive Hygiene Care (Tokko Products)
      </footer>

    </div>
  );
}