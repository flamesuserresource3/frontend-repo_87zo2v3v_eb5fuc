import React, { useState } from 'react';
import { Mail, Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to Grow Your Business?</h2>
          <p className="mt-3 text-slate-600">Start your 120-leads plan today. We’ll contact you within 24 hours.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
          >
            <h3 className="text-xl font-bold">Prefer talking to a human?</h3>
            <p className="mt-3 text-slate-600">We’re happy to jump on a quick call and map your fastest path to results.</p>
            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <a href="mailto:hello@novadigital.co" className="flex items-center gap-3 hover:text-slate-900">
                <Mail className="h-5 w-5 text-cyan-600" />
                hello@novadigital.co
              </a>
              <a href="tel:+381601234567" className="flex items-center gap-3 hover:text-slate-900">
                <Phone className="h-5 w-5 text-cyan-600" />
                +381 60 123 4567
              </a>
              <div className="flex items-center gap-3 text-slate-700">
                <Calendar className="h-5 w-5 text-cyan-600" />
                Mon–Fri, 9:00–17:00 (CET)
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Jane Doe"
                  className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none ring-cyan-500/0 transition focus:ring-2"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="jane@company.com"
                  className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none ring-cyan-500/0 transition focus:ring-2"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-sm text-slate-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell us about your business and goals."
                rows={6}
                className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none ring-cyan-500/0 transition focus:ring-2"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="rounded-md bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
              >
                Get Started Today
              </button>
              {submitted && (
                <span className="text-sm text-emerald-600">Thanks! We’ll be in touch within 24 hours.</span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
