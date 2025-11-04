import React from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Pricing from './components/Pricing.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Services />
      <Pricing />
      <Contact />
      <footer className="border-t border-slate-200 bg-white py-10 text-center text-sm text-slate-600">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-2 font-semibold text-slate-900">NovaDigital</div>
          © {new Date().getFullYear()} NovaDigital. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
