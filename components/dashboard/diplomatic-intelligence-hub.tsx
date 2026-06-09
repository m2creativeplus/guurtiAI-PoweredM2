import { Globe, FileText, ShieldAlert, Award, Target, Users, Radio, Scale } from "lucide-react"

export function DiplomaticIntelligenceHub() {
  return (
    <section className="mb-8 w-full" aria-labelledby="diplomatic-intel-heading">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#008A51]/10 flex items-center justify-center">
          <Globe className="w-5 h-5 text-[#008A51]" aria-hidden="true" />
        </div>
        <div>
          <h2 id="diplomatic-intel-heading" className="text-xl font-bold text-white tracking-wide">Diplomatic Intelligence Hub</h2>
          <p className="text-[12px] text-zinc-400 font-mono">Guurti Asymmetric Strategy & Visa Protocols</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Asymmetric Master Playbook */}
        <div className="glass-card rounded-2xl p-5 border border-[#C8102E]/20 hover:border-[#C8102E]/50 transition-colors relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C8102E]/10 rounded-full blur-2xl pointer-events-none transition-all group-hover:bg-[#C8102E]/20" aria-hidden="true" />
          <ShieldAlert className="w-6 h-6 text-[#C8102E] mb-4 relative z-10" aria-hidden="true" />
          <h3 className="text-sm font-bold text-white mb-2 relative z-10">Asymmetric Master Playbook</h3>
          <p className="text-xs text-zinc-400 mb-4 relative z-10 line-clamp-2">
            The synthesized strategy bypassing multilateral blockades using the Taiwan and Israel diplomatic models.
          </p>
          <a href="/intelligence/Guurti_Asymmetric_Master_Playbook.md" target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-[#C8102E] hover:underline relative z-10 flex items-center gap-1 cursor-pointer">
            Access Dossier →
          </a>
        </div>

        {/* Global Visa Protocols */}
        <div className="glass-card rounded-2xl p-5 border border-[#008A51]/20 hover:border-[#008A51]/50 transition-colors relative overflow-hidden group">
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#008A51]/10 rounded-full blur-2xl pointer-events-none transition-all group-hover:bg-[#008A51]/20" aria-hidden="true" />
          <Globe className="w-6 h-6 text-[#008A51] mb-4 relative z-10" aria-hidden="true" />
          <h3 className="text-sm font-bold text-white mb-2 relative z-10">Global Visa Playbook 2026</h3>
          <p className="text-xs text-zinc-400 mb-4 relative z-10 line-clamp-2">
            Exact timelines, embassy workarounds, and loophole strategies for Five-Eyes, Schengen, and the UAE.
          </p>
          <a href="/intelligence/Somaliland_Visa_Playbook_2026.md" target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-[#008A51] hover:underline relative z-10 flex items-center gap-1 cursor-pointer">
            Open Protocol →
          </a>
        </div>

        {/* 69th CPC Engagement */}
        <div className="glass-card rounded-2xl p-5 border border-amber-500/20 hover:border-amber-500/50 transition-colors relative overflow-hidden group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none transition-all group-hover:bg-amber-500/10" aria-hidden="true" />
          <Award className="w-6 h-6 text-amber-500 mb-4 relative z-10" aria-hidden="true" />
          <h3 className="text-sm font-bold text-white mb-2 relative z-10">69th CPC Engagement</h3>
          <p className="text-xs text-zinc-400 mb-4 relative z-10 line-clamp-2">
            Tactical package for dominating the Society of Clerks at the Table (SoCATT) in Cape Town.
          </p>
          <a href="/intelligence/69th_CPC_Engagement_Package.md" target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-amber-500 hover:underline relative z-10 flex items-center gap-1 cursor-pointer">
            View Strategy →
          </a>
        </div>

        {/* 12 Summer 2026 Packages */}
        <div className="glass-card rounded-2xl p-5 border border-blue-500/20 hover:border-blue-500/50 transition-colors relative overflow-hidden group">
           <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none transition-all group-hover:bg-blue-500/20" aria-hidden="true" />
          <FileText className="w-6 h-6 text-blue-500 mb-4 relative z-10" aria-hidden="true" />
          <h3 className="text-sm font-bold text-white mb-2 relative z-10">Summer 2026 Engagements</h3>
          <p className="text-xs text-zinc-400 mb-4 relative z-10 line-clamp-2">
            The massive 12-event directory covering AU summits, peacebuilding, and legislative forums.
          </p>
          <a href="/intelligence/GUURTI_Events_Summer_2026.md" target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-blue-500 hover:underline relative z-10 flex items-center gap-1 cursor-pointer">
            Browse Directory →
          </a>
        </div>
      </div>


      <div className="flex items-center gap-3 mb-6 mt-10">
        <div className="w-10 h-10 rounded-xl bg-[#C8102E]/10 flex items-center justify-center">
          <Target className="w-5 h-5 text-[#C8102E]" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white tracking-wide">GSRIS & Advocacy Networks</h2>
          <p className="text-[12px] text-zinc-400 font-mono">Global Somaliland Recognition Intelligence System</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: GSRIS Opposition Map */}
        <div className="glass-card rounded-2xl p-5 border border-purple-500/20 hover:border-purple-500/50 transition-colors relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none transition-all group-hover:bg-purple-500/20" aria-hidden="true" />
          <Target className="w-6 h-6 text-purple-500 mb-4 relative z-10" aria-hidden="true" />
          <h3 className="text-sm font-bold text-white mb-2 relative z-10">GSRIS Opposition Map</h3>
          <p className="text-xs text-zinc-400 mb-4 relative z-10 line-clamp-2">
            Category E & F hostile actors, institutional blockers, and top 20 geopolitical opponents.
          </p>
          <a href="/intelligence/GSRIS_Database_D6_D8.md" target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-purple-500 hover:underline relative z-10 flex items-center gap-1 cursor-pointer">
            Access Database →
          </a>
        </div>

        {/* Card 2: Global Advocacy Directory */}
        <div className="glass-card rounded-2xl p-5 border border-emerald-500/20 hover:border-emerald-500/50 transition-colors relative overflow-hidden group">
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none transition-all group-hover:bg-emerald-500/20" aria-hidden="true" />
          <Users className="w-6 h-6 text-emerald-500 mb-4 relative z-10" aria-hidden="true" />
          <h3 className="text-sm font-bold text-white mb-2 relative z-10">Global Advocacy Directory</h3>
          <p className="text-xs text-zinc-400 mb-4 relative z-10 line-clamp-2">
            Tier 1 advocates across the UK APPG, US Congress, and the African democratic platform.
          </p>
          <a href="/intelligence/Global_Advocacy_Database_D1_D3.md" target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-emerald-500 hover:underline relative z-10 flex items-center gap-1 cursor-pointer">
            View Advocates →
          </a>
        </div>

        {/* Card 3: Media Audit 2025-2026 */}
        <div className="glass-card rounded-2xl p-5 border border-cyan-500/20 hover:border-cyan-500/50 transition-colors relative overflow-hidden group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none transition-all group-hover:bg-cyan-500/10" aria-hidden="true" />
          <Radio className="w-6 h-6 text-cyan-500 mb-4 relative z-10" aria-hidden="true" />
          <h3 className="text-sm font-bold text-white mb-2 relative z-10">Comprehensive Media Audit</h3>
          <p className="text-xs text-zinc-400 mb-4 relative z-10 line-clamp-2">
            Dec 2025 – Jun 2026 sentiment analysis and PR tracking of global recognition momentum.
          </p>
          <a href="/intelligence/Global_Advocates_Media_Audit_2025_2026.md" target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-cyan-500 hover:underline relative z-10 flex items-center gap-1 cursor-pointer">
            Read Audit →
          </a>
        </div>

        {/* Card 4: Guurti Strategic Mandate */}
        <div className="glass-card rounded-2xl p-5 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-colors relative overflow-hidden group">
           <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none transition-all group-hover:bg-[#D4AF37]/20" aria-hidden="true" />
          <Scale className="w-6 h-6 text-[#D4AF37] mb-4 relative z-10" aria-hidden="true" />
          <h3 className="text-sm font-bold text-white mb-2 relative z-10">Strategic Mandate & Comms</h3>
          <p className="text-xs text-zinc-400 mb-4 relative z-10 line-clamp-2">
            The formal delineation between Guurti parliamentary diplomacy and SIRI recognition lobbying.
          </p>
          <a href="/intelligence/Guurti_Foreign_Affairs_Strategic_Mandate.md" target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-[#D4AF37] hover:underline relative z-10 flex items-center gap-1 cursor-pointer">
            Open Mandate →
          </a>
        </div>
      </div>
    </section>
  )
}
