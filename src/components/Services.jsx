import React from 'react';
import { Megaphone, BarChart3, Target, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Megaphone,
    title: 'Social Media Strategy & Consulting',
    desc: 'Custom playbooks, channel selection, and content calendars built for your market and goals.'
  },
  {
    icon: Video,
    title: 'Content Creation & Publishing',
    desc: 'Short-form video, carousels, and copy that convert. Planned, produced, and published for you.'
  },
  {
    icon: Target,
    title: 'Local Advertising Campaigns',
    desc: 'Highly targeted Meta/Google ads to reach Serbian customers ready to buy—tracked and optimized.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Optimization',
    desc: 'Dashboards, A/B tests, and continuous improvements to keep performance trending up.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold sm:text-4xl">How We Help You Grow</h2>
          <p className="mt-3 text-slate-600">Practical, ROI-focused services that turn attention into customers.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 ring-1 ring-cyan-200">
                <s.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              <button className="mt-4 text-sm font-medium text-cyan-700 opacity-0 transition group-hover:opacity-100">
                See details →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Mini process */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold">How it works</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {["Free Strategy Call", "Custom Campaign Setup", "Ongoing Optimization"].map((step, i) => (
                <div key={step} className="rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-sm">
                  <div className="mb-1 text-xs font-semibold text-cyan-700">Step {i + 1}</div>
                  <div className="font-medium text-slate-900">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
