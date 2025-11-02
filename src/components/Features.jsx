import React from 'react';
import { Bot, Workflow, Globe2, LineChart, Lock } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI matchmaking by niche',
    desc: 'Vector-level understanding of markets to surface partners, customers, or targets with true semantic fit.'
  },
  {
    icon: Workflow,
    title: 'Deal workflow, end-to-end',
    desc: 'From sourcing to diligence to close — unified pipelines with tasks, notes, and smart nudges.'
  },
  {
    icon: Globe2,
    title: 'Cross-border ready',
    desc: 'Local context, regulation cues, and multilingual profiles to expand with confidence.'
  },
  {
    icon: LineChart,
    title: 'Transparent analytics',
    desc: 'Decision rationales, comparable sets, and attribution you can present to any IC, clearly.'
  },
  {
    icon: Lock,
    title: 'Enterprise-grade security',
    desc: 'SOC 2 alignment, SSO, audit logs, and data residency controls out of the box.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Built for global B2B and private equity teams</h2>
          <p className="mt-3 text-zinc-300">Everything you need to discover, evaluate, and connect — with audit-ready transparency at every step.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition overflow-hidden">
              <div className="p-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/30 grid place-items-center text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{desc}</p>
              </div>
              <div className="pointer-events-none h-1 w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>

        <div id="how" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <p className="text-xs uppercase tracking-wide text-zinc-400">01 • Ingest</p>
            <h4 className="mt-2 font-medium">Connect your CRM and data rooms</h4>
            <p className="mt-2 text-sm text-zinc-300">One-click integrations with Salesforce, HubSpot, Drive, and more keep context synced.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <p className="text-xs uppercase tracking-wide text-zinc-400">02 • Discover</p>
            <h4 className="mt-2 font-medium">AI surfaces high-signal matches</h4>
            <p className="mt-2 text-sm text-zinc-300">Semantic search, lookalike modeling, and niche graphs reveal who to talk to next.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <p className="text-xs uppercase tracking-wide text-zinc-400">03 • Close</p>
            <h4 className="mt-2 font-medium">Transparent, auditable deals</h4>
            <p className="mt-2 text-sm text-zinc-300">Every recommendation includes citations, comparisons, and rationale for IC-ready memos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
