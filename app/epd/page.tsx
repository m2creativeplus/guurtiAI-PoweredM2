import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Scale, Target, Shield, Globe, BookOpen, Cpu, Brain,
  ArrowRight, TrendingUp, FileText, Users, Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'External Partnerships Department (EPD)',
  description: 'The Golaha Guurtida External Partnerships Department — AI-powered intelligence platform for grant acquisition, parliamentary diplomacy, and sovereignty defense for the Republic of Somaliland.',
};

const EPD_MODULES = [
  {
    href: '/epd/grant-intelligence',
    icon: Target,
    title: 'Grant Intelligence',
    subtitle: 'PGEU — Parliamentary Grant Engagement Unit',
    description: 'Live database of verified donor opportunities. AI-scored match analysis against Guurti mandate. 8 active grants totalling $14.6M+.',
    badge: 'LIVE DATA',
    badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
    accentColor: 'border-emerald-500/30 hover:border-emerald-500/50',
  },
  {
    href: '/epd/proposal-generator',
    icon: FileText,
    title: 'Proposal Generator',
    subtitle: 'AI-Powered EOI & Concept Note Drafting',
    description: 'Generate professional grant proposals, Expressions of Interest, and Concept Notes aligned to the Guurti mandate. Three strategic positioning models.',
    badge: 'AI GEMINI',
    badgeColor: 'bg-blue-500/15 text-blue-400 border-blue-500/20',
    accentColor: 'border-blue-500/30 hover:border-blue-500/50',
  },
  {
    href: '/epd/sovereignty-defense',
    icon: Shield,
    title: 'Sovereignty Defense Unit',
    subtitle: 'SIDU — Counter-Disinformation Intelligence',
    description: 'AI-powered counter-disinformation engine. Generate official parliamentary rebuttals to false narratives targeting Somaliland\'s independence and recognition.',
    badge: 'AI GEMINI',
    badgeColor: 'bg-red-500/15 text-red-400 border-red-500/20',
    accentColor: 'border-red-500/30 hover:border-red-500/50',
  },
  {
    href: '/epd/treaty-scrutiny',
    icon: Scale,
    title: 'Treaty & Investment Scrutiny',
    subtitle: 'AI-POS — Parliamentary Oversight System',
    description: 'Ex-ante constitutional compliance analysis for foreign treaties, bilateral agreements, and investment portfolios. Powered by Somaliland constitutional law database.',
    badge: 'AI GEMINI',
    badgeColor: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
    accentColor: 'border-amber-500/30 hover:border-amber-500/50',
  },
  {
    href: '/epd/parliamentary-diplomacy',
    icon: Globe,
    title: 'Parliamentary Diplomacy',
    subtitle: 'Friendship Groups & Bilateral Relations',
    description: 'Draft official diplomatic communications, MoUs, and friendship group establishment letters for parliament-to-parliament engagement. Target 40 parliaments.',
    badge: 'AI GEMINI',
    badgeColor: 'bg-purple-500/15 text-purple-400 border-purple-500/20',
    accentColor: 'border-purple-500/30 hover:border-purple-500/50',
  },
  {
    href: '/epd/strategic-intelligence',
    icon: Brain,
    title: 'Strategic Intelligence',
    subtitle: 'Geopolitical & Donor Briefings',
    description: 'AI-generated intelligence briefings on international recognition opportunities, donor community sentiment, and geopolitical developments affecting Somaliland.',
    badge: 'AI GEMINI',
    badgeColor: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
    accentColor: 'border-cyan-500/30 hover:border-cyan-500/50',
  },
  {
    href: '/epd/sovereign-workspace',
    icon: Cpu,
    title: 'Sovereign Workspace',
    subtitle: 'NotebookLM & Research Intelligence',
    description: 'Integrated knowledge workspace with 14 source documents including the Somaliland Constitution, IPU guides, and traditional peace agreements.',
    badge: 'CONNECTED',
    badgeColor: 'bg-zinc-500/15 text-zinc-400 border-zinc-500/20',
    accentColor: 'border-zinc-500/30 hover:border-zinc-500/50',
  },
  {
    href: '/epd/capacity-development',
    icon: BookOpen,
    title: 'Capacity Development',
    subtitle: 'Parliamentary Academy & Training',
    description: 'Structured learning tracks for Guurti staff on parliamentary procedures, international relations, grant writing, and digital governance.',
    badge: 'ACADEMY',
    badgeColor: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/20',
    accentColor: 'border-indigo-500/30 hover:border-indigo-500/50',
  },
];

const STATS = [
  { value: '$14.6M+', label: 'Active grant opportunities', icon: TrendingUp },
  { value: '8', label: 'Verified donor programmes', icon: Target },
  { value: '40', label: 'Target parliamentary partners', icon: Users },
  { value: '5', label: 'AI-powered tools', icon: Zap },
];

export default function EPDHubPage() {
  return (
    <div className="min-h-screen bg-[#050507] text-[#F0EEE8]">
      {/* Header */}
      <header className="border-b border-[#008A51]/20 bg-[#050507]/95 backdrop-blur-xl sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 hover:bg-white/5 rounded-lg transition-all text-zinc-500 hover:text-zinc-300"
              aria-label="Return to homepage"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
            </Link>
            <div>
              <div className="text-[10px] font-mono text-[#008A51] tracking-[0.3em] uppercase mb-0.5">
                Golaha Guurtida — Republic of Somaliland
              </div>
              <h1 className="text-lg font-bold text-white tracking-tight">
                External Partnerships Department
              </h1>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-zinc-500">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            EPD Intelligence Platform — Active
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        {/* Hero */}
        <section aria-labelledby="epd-heading" className="mb-16">
          <div className="inline-flex items-center gap-2 bg-[#008A51]/10 border border-[#008A51]/20 text-[#008A51] text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#008A51] animate-pulse" />
            EPD / External Partnerships Department
          </div>
          <h2 id="epd-heading" className="text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mb-6">
            AI-Powered Parliamentary<br />
            <span className="text-[#008A51]">Diplomacy & Intelligence</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl leading-relaxed mb-8">
            The Golaha Guurtida EPD platform consolidates grant intelligence, diplomatic communications, 
            sovereignty defense, and strategic analytics into a single operational system. 
            Designed for the Foreign Affairs & International Cooperation Committee.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-zinc-900/60 border border-white/5 rounded-2xl p-5 flex flex-col gap-1"
              >
                <stat.icon className="w-4 h-4 text-[#008A51] mb-1" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-zinc-500 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Module Grid */}
        <section aria-labelledby="modules-heading">
          <h2 id="modules-heading" className="sr-only">EPD Operational Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {EPD_MODULES.map((mod) => (
              <Link
                key={mod.href}
                href={mod.href}
                className={`group bg-zinc-900/40 border ${mod.accentColor} rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 hover:bg-zinc-900/70 hover:-translate-y-0.5`}
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <mod.icon className="w-5 h-5 text-zinc-300" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded-full border ${mod.badgeColor}`}>
                    {mod.badge}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1 group-hover:text-[#008A51] transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-[11px] text-zinc-500 font-mono mb-3 leading-tight">
                    {mod.subtitle}
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-zinc-600 group-hover:text-[#008A51] transition-colors">
                    Open module
                  </span>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-[#008A51] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer note */}
        <footer className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-zinc-600">
            Golaha Guurtida — External Partnerships Department (EPD) · Republic of Somaliland · Hargeisa
          </p>
          <p className="text-xs text-zinc-700 mt-1">
            AI features powered by Google Gemini. All outputs require human review before official use.
          </p>
        </footer>
      </main>
    </div>
  );
}
