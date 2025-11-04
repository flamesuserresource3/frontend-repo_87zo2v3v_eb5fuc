import React from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Pricing from './components/Pricing.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Services />
      <Pricing />
      <Contact />
      <footer className="border-t border-white/10 bg-slate-950/80 py-10 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-2 font-semibold text-white">NovaDigital</div>
          © {new Date().getFullYear()} NovaDigital. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
