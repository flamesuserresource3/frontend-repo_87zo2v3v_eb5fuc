import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Top navigation */}
      <div className="relative z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/20 ring-1 ring-cyan-300/30">
              <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
            </span>
            <span className="text-lg font-semibold tracking-tight">NovaDigital</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-slate-300 hover:text-white">Services</a>
            <a href="#pricing" className="text-sm text-slate-300 hover:text-white">Pricing</a>
            <a href="#contact" className="text-sm text-slate-300 hover:text-white">Contact</a>
            <a href="#contact" className="rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20">Get started</a>
          </nav>
        </div>
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* subtle gradient overlay to increase contrast; pointer-events-none so it stays interactive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-24 pt-16 md:grid-cols-2 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-slate-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Growth-focused digital marketing
          </span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Modern marketing for brands that want to scale
          </h1>
          <p className="mt-5 max-w-prose text-slate-300">
            We combine data, creativity, and technology to help you acquire and retain customers. SEO, paid media, content, and CRO—engineered to perform.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="rounded-md bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-cyan-300">Book a free strategy call</a>
            <a href="#services" className="rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">Explore services</a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 text-center text-sm text-slate-300 sm:max-w-md">
            <div className="rounded-lg bg-white/5 p-4 backdrop-blur">
              <div className="text-2xl font-bold text-white">250%+</div>
              Avg. ROI
            </div>
            <div className="rounded-lg bg-white/5 p-4 backdrop-blur">
              <div className="text-2xl font-bold text-white">50M+</div>
              Ad spend managed
            </div>
            <div className="rounded-lg bg-white/5 p-4 backdrop-blur">
              <div className="text-2xl font-bold text-white">120+</div>
              Clients served
            </div>
          </div>
        </motion.div>
        <div className="relative hidden md:block"></div>
      </div>
    </section>
  );
}
