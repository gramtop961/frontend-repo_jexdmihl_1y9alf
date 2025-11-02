import React from 'react';

export default function CTASection() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/10 to-cyan-500/10">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_80%_-10%,rgba(139,92,246,0.35),transparent)]" />
          <div className="relative p-10 md:p-14">
            <div className="max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Bring clarity to dealmaking and partnerships</h3>
              <p className="mt-3 text-zinc-200">Start with a free strategy session. We’ll map your niche graph, surface 50 high-signal targets, and show the transparent AI rationale behind each match.</p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white text-black font-medium hover:bg-zinc-100 transition"
              >
                Book a demo
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-black/50 border border-white/20 text-white hover:border-white/40 transition"
              >
                View pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
