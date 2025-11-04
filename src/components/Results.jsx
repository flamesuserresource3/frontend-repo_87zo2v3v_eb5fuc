import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, BarChart3, Users } from 'lucide-react';

export default function Results() {
  return (
    <section id="results" className="relative w-full bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 ring-1 ring-cyan-200">
                <Shield className="h-5 w-5" />
              </span>
              <h2 className="text-2xl font-bold">Our Promise: 120 Leads in 90 Days</h2>
            </div>
            <a href="#contact" className="rounded-md bg-cyan-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500">Get my plan</a>
          </div>
          <p className="mt-4 max-w-3xl text-slate-600">
            We put our money where our mouth is. If we don’t generate at least 120 qualified leads in 90 days, we work for free until we do.
          </p>
          <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-slate-700 sm:grid-cols-2 sm:pl-6">
            <li>Qualifying offer and budget agreed upfront</li>
            <li>We manage strategy, content, ads, and optimization</li>
            <li>Weekly reporting and clear next steps</li>
            <li>Cancel anytime if we don’t deliver</li>
          </ul>
        </motion.div>

        {/* Success snapshots */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {[
            { title: 'Local Café', stat: '+180% engagement', icon: Star, desc: 'Scaled Instagram Reels and local targeting to drive foot traffic.' },
            { title: 'Auto Service', stat: '+150 leads / 90 days', icon: BarChart3, desc: 'Google + Meta lead forms with content retargeting.' },
            { title: 'Fitness Studio', stat: '3.4x ROAS', icon: Users, desc: 'UGC content + lookalike audiences increased trial signups.' }
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 ring-1 ring-cyan-200">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold text-cyan-700">{c.title}</div>
              <div className="mt-1 text-xl font-bold">{c.stat}</div>
              <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold">What Our Clients Say</h3>
            <p className="mt-2 text-slate-600">Real voices from Serbian businesses growing with us.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[ 
              { quote: 'They delivered more leads in 2 months than we had all year.', name: 'Milan, Auto Service' },
              { quote: 'Clear strategy, great content, and results that showed up fast.', name: 'Jelena, Café Owner' }
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-3 text-slate-700">“{t.quote}”</p>
                <div className="mt-3 text-sm font-semibold text-slate-900">{t.name}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why choose us */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { title: 'Local Expertise', desc: 'Serbian market insights, local culture, and language-native content.' },
              { title: 'Data-Driven', desc: 'We obsess over metrics and iterate fast for compounding growth.' },
              { title: 'Transparent', desc: 'Weekly reports, clear plans, and our results-first guarantee.' }
            ].map((w) => (
              <div key={w.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-sm shadow-sm">
                <div className="text-sm font-semibold text-cyan-700">{w.title}</div>
                <p className="mt-1 text-slate-700">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
