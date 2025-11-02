import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import CTASection from './components/CTASection.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <CTASection />
      <footer className="py-10 text-center text-sm text-zinc-400 border-t border-white/10">
        © {new Date().getFullYear()} OrbNet AI — Connecting businesses and private equity with transparent, AI-powered deal flow.
      </footer>
    </div>
  );
}

export default App;
