import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    // Client-side validation only; integrate backend endpoint later if needed
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-8"
          >
            <h3 className="text-2xl font-bold">Let’s grow your revenue</h3>
            <p className="mt-3 text-slate-300">
              Tell us about your goals and we’ll craft a roadmap tailored to your business.
            </p>
            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan-300" />
                hello@novadigital.co
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-300" />
                +1 (555) 123-4567
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
                <label className="mb-2 block text-sm text-slate-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Jane Doe"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-cyan-400/0 transition focus:ring-2"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="jane@company.com"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-cyan-400/0 transition focus:ring-2"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-sm text-slate-300">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Share a bit about your product, audience, and goals."
                rows={6}
                className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-cyan-400/0 transition focus:ring-2"
              />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button
                type="submit"
                className="rounded-md bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
              >
                Send message
              </button>
              {submitted && (
                <span className="text-sm text-emerald-300">Thanks! We’ll be in touch within 24 hours.</span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
