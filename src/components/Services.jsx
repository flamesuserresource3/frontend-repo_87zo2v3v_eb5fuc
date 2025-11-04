import React from 'react';
import { Rocket, Megaphone, BarChart3, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Rocket,
    title: 'Performance Ads',
    desc: 'ROI-first media buying across Meta, Google, YouTube, and TikTok with continuous creative testing.'
  },
  {
    icon: Megaphone,
    title: 'Content & Social',
    desc: 'High-velocity content engines that build authority, awareness, and community across channels.'
  },
  {
    icon: BarChart3,
    title: 'CRO & Analytics',
    desc: 'Experiment-led optimization, funnel diagnostics, and dashboards that make decisions obvious.'
  },
  {
    icon: Globe,
    title: 'SEO & Organic',
    desc: 'Technical SEO, topical authority, and link strategy to earn compounding, defensible traffic.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold sm:text-4xl">What we do</h2>
          <p className="mt-3 text-slate-300">Integrated growth marketing built on insights, not guesses.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 shadow-lg backdrop-blur"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-400/20">
                <s.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <button className="mt-4 text-sm font-medium text-cyan-300 opacity-0 transition group-hover:opacity-100">
                Learn more →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
