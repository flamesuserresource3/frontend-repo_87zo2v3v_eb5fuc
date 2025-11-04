import React from 'react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: '$1,500',
    cadence: '/mo',
    highlight: false,
    points: [
      '1 core channel (SEO or Paid)',
      'Monthly reporting',
      'Email support'
    ]
  },
  {
    name: 'Growth',
    price: '$4,000',
    cadence: '/mo',
    highlight: true,
    points: [
      '2-3 channels managed',
      'Weekly sprints + dashboards',
      'Dedicated strategist',
      'Creative testing framework'
    ]
  },
  {
    name: 'Scale',
    price: 'Custom',
    cadence: '',
    highlight: false,
    points: [
      'Full-funnel orchestration',
      'Cross-functional squad',
      'Advanced analytics & CRO',
      'SLAs & quarterly planning'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Pick the plan that matches your goals. No hidden fees, ever.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative rounded-2xl border p-6 shadow-sm ${
                t.highlight
                  ? 'border-cyan-300 bg-cyan-50'
                  : 'border-slate-200 bg-white'
              }`}
            >
              {t.highlight && (
                <span className="absolute right-4 top-4 rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 ring-1 ring-cyan-200">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-extrabold">{t.price}</span>
                <span className="mb-1 text-slate-600">{t.cadence}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    {p}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition ${
                t.highlight
                  ? 'bg-cyan-600 text-white hover:bg-cyan-500'
                  : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50'
              }`}>
                Choose {t.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
