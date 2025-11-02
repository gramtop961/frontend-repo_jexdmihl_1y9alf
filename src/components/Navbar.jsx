import React from 'react';
import { Sparkles, Globe2 } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 grid place-items-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-white">OrbNet AI</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex h-9 px-3 rounded-lg border border-white/20 text-zinc-200 hover:border-white/40 hover:text-white transition">Sign in</button>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 text-white font-medium shadow-lg shadow-violet-500/20"
            >
              <Globe2 className="h-4 w-4" /> Get started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
