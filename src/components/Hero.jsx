import React from 'react';
import Spline from '@splinetool/react-spline';
import { ShieldCheck, Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft radial overlay for readability (non-interfering) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_0%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_45%,rgba(0,0,0,0.85)_100%)]" />

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs text-zinc-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Live deal intelligence for B2B + Private Equity
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
              Connect the world's businesses with AI transparency
            </h1>
            <p className="mt-5 text-lg text-zinc-300">
              OrbNet AI maps company niches across continents, uncovers strategic fits, and runs
              fully transparent deal workflows for private equity — all in one place.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-white text-black font-medium hover:bg-zinc-100 transition"
              >
                Get a demo
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-black/50 border border-white/20 text-white hover:border-white/40 transition"
              >
                Explore features
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-300">
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-lg bg-emerald-500/15 text-emerald-400 grid place-items-center">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                Transparent, auditable AI decision trail
              </div>
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-lg bg-cyan-500/15 text-cyan-400 grid place-items-center">
                  <Building2 className="h-4 w-4" />
                </span>
                240k+ companies indexed by niche
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
