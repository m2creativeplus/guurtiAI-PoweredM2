'use client';

import { useState } from 'react';
import { useQuery, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { FilterProvider } from "@/contexts/filter-context"
import { KPIDashboard } from "@/components/dashboard/kpi-dashboard"
import { ThematicFilterBar } from "@/components/dashboard/thematic-filter-bar"
import { StructuredProjects } from "@/components/dashboard/structured-projects"
import { DonorComparison } from "@/components/dashboard/donor-comparison"
import { BudgetAnalysis } from "@/components/dashboard/budget-analysis"
import { DonorWheel } from "@/components/dashboard/donor-wheel"
import { FundingTrends } from "@/components/dashboard/funding-trends"
import { PartnersGrid } from "@/components/dashboard/partners-grid"
import { PartnersNetwork } from "@/components/dashboard/partners-network"
import { DonorTracker } from "@/components/dashboard/donor-tracker"
import { ProjectTimeline } from "@/components/dashboard/project-timeline"
import { EventsTimeline } from "@/components/dashboard/events-timeline"
import { CriticalDeadlines } from "@/components/dashboard/critical-deadlines"
import { PolicyRecommendations } from "@/components/dashboard/policy-recommendations"
import { DonorCollaborationRing } from "@/components/dashboard/donor-collaboration-ring"
import { DiplomaticIntelligenceHub } from "@/components/dashboard/diplomatic-intelligence-hub"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Shield, AlertTriangle, CheckCircle, Clock, Trash2 } from "lucide-react"
import Link from "next/link"
import { DonorActivityRadar } from "@/components/charts/donor-activity-radar"
import { CommitteeEngagementRadial } from "@/components/charts/committee-engagement-radial"
import { FundingDistributionPie } from "@/components/charts/funding-distribution-pie"
import { LegislativeProgressBar } from "@/components/charts/legislative-progress-bar"
import { PartnershipStrengthRadial } from "@/components/charts/partnership-strength-radial"

// Risk badge color map for scrutiny reports
const RISK_COLORS: Record<string, string> = {
  HIGH:     'bg-[#C8102E]/15 text-[#C8102E] border-[#C8102E]/30',
  MEDIUM:   'bg-amber-500/15 text-amber-400 border-amber-500/30',
  LOW:      'bg-[#008A51]/15 text-[#008A51] border-[#008A51]/30',
  CRITICAL: 'bg-red-900/30 text-red-400 border-red-700/40',
};

// Model badge colors for AI drafts
const MODEL_BADGE: Record<string, string> = {
  'sierra-leone': 'bg-[#008A51]/15 text-[#008A51] border-[#008A51]/30',
  'rwanda-kpi':   'bg-blue-500/15 text-blue-400 border-blue-500/30',
  'kenya-psc':    'bg-amber-500/15 text-amber-400 border-amber-500/30',
};

// Models that were AI-generated via NotebookLM
const AI_GENERATED_MODELS = new Set(['sierra-leone', 'rwanda-kpi', 'kenya-psc']);

function Spinner() {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-7 h-7 rounded-full border-2 border-[#008A51] border-t-transparent animate-spin" />
    </div>
  );
}

function LiveDataPanel() {
  const drafts    = useQuery(api.drafts.getDrafts);
  const reports   = useQuery(api.scrutiny.getReports);
  const deleteDraft = useMutation(api.drafts.deleteDraft);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

      {/* ── Saved Proposals ───────────────────────────────────── */}
      <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
        {/* Subtle gradient glow in the background */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#008A51]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex items-center gap-3 mb-5 relative z-10">
          <div className="w-9 h-9 rounded-xl bg-[#008A51]/10 flex items-center justify-center">
            <FileText className="w-4 h-4 text-[#008A51]" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white tracking-wide">Saved Proposals</h2>
            <p className="text-[11px] text-zinc-500 font-mono">Convex · drafts table</p>
          </div>
        </div>

        {drafts === undefined && <Spinner />}

        {drafts !== undefined && drafts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10 text-zinc-600 text-sm gap-2">
            <FileText className="w-8 h-8 opacity-30" />
            <span>No proposals saved yet.</span>
            <Link href="/epd/proposal-generator" className="text-[#008A51] text-xs hover:underline mt-1">
              Open Proposal Generator →
            </Link>
          </div>
        )}

        {drafts !== undefined && drafts.length > 0 && (
          <ul className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
            {drafts.map((draft) => {
              const isExpanded = expandedId === draft._id;
              const isAI = AI_GENERATED_MODELS.has(draft.model_id);
              const modelBadgeClass = MODEL_BADGE[draft.model_id] ?? 'bg-zinc-700/20 text-zinc-400 border-zinc-600/30';
              return (
                  <li
                    key={draft._id}
                    className={`rounded-xl transition-all duration-300 hover-lift ${
                      isExpanded
                        ? 'bg-zinc-950/80 border-[#008A51]/40 shadow-[0_0_18px_rgba(0,138,81,0.12)]'
                        : 'bg-zinc-950/60 border border-white/5 hover:border-white/10'
                    }`}
                  >
                  {/* Card Header — always visible, clickable */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : draft._id)}
                    className="w-full p-4 flex items-start gap-3 text-left"
                    aria-expanded={isExpanded}
                  >
                    <FileText className="w-4 h-4 text-[#008A51] mt-0.5 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <p className="text-sm text-white font-medium truncate">
                          {draft.template_id.toUpperCase()} — {draft.opportunity_id.slice(0, 20)}…
                        </p>
                        {isAI && (
                          <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded-full bg-[#008A51]/10 text-[#008A51] border border-[#008A51]/25 shrink-0">
                            🤖 AI-Generated via NotebookLM
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] font-bold font-mono px-2 py-0.5 rounded border ${modelBadgeClass}`}>
                          {draft.model_id}
                        </span>
                        <span className="text-[10px] text-zinc-600 font-mono flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(draft.created_at).toLocaleDateString('en-GB', {
                            day: '2-digit', month: 'short', year: '2-digit'
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] text-zinc-600 font-mono">
                        {isExpanded ? '▲' : '▼'}
                      </span>
                      <button
                        onClick={(e) => { e.stopPropagation(); deleteDraft({ id: draft._id }); }}
                        title="Delete draft"
                        className="p-1.5 rounded-lg hover:bg-[#C8102E]/15 text-zinc-600 hover:text-[#C8102E] transition-colors"
                        aria-label="Delete draft"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </button>

                  {/* Expanded content preview */}
                  {isExpanded && draft.content && (
                    <div className="px-4 pb-4">
                      <div className="bg-zinc-900/60 border border-white/5 rounded-lg p-3">
                        <p className="text-xs text-zinc-400 leading-relaxed font-mono whitespace-pre-wrap">
                          {draft.content.slice(0, 400)}{draft.content.length > 400 ? '…' : ''}
                        </p>
                      </div>
                      <div className="mt-2 flex justify-end">
                        <Link
                          href="/epd/proposal-generator"
                          className="text-[10px] text-[#008A51] hover:underline font-mono"
                        >
                          Read Full Draft →
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* ── Treaty Reports ────────────────────────────────────── */}
      <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
        {/* Subtle gradient glow in the background */}
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex items-center gap-3 mb-5 relative z-10">
          <div className="w-9 h-9 rounded-xl bg-[#C8102E]/10 flex items-center justify-center">
            <Shield className="w-4 h-4 text-[#C8102E]" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white tracking-wide">Treaty Reports</h2>
            <p className="text-[11px] text-zinc-500 font-mono">Convex · scrutiny_reports table</p>
          </div>
        </div>

        {reports === undefined && <Spinner />}

        {reports !== undefined && reports.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10 text-zinc-600 text-sm gap-2">
            <Shield className="w-8 h-8 opacity-30" />
            <span>No scrutiny reports saved yet.</span>
            <Link href="/epd/treaty-scrutiny" className="text-[#C8102E] text-xs hover:underline mt-1">
              Open Treaty Scrutiny →
            </Link>
          </div>
        )}

        {reports !== undefined && reports.length > 0 && (
          <ul className="space-y-3 max-h-72 overflow-y-auto pr-1">
            {reports.map((report) => {
              const riskKey = report.risk_level.toUpperCase();
              const riskClass = RISK_COLORS[riskKey] ?? RISK_COLORS['LOW'];
              return (
                <li
                  key={report._id}
                  className="bg-zinc-950/60 backdrop-blur-md border border-white/5 rounded-xl p-4 flex items-start gap-3 hover-lift relative z-10"
                >
                  {riskKey === 'HIGH' || riskKey === 'CRITICAL'
                    ? <AlertTriangle className="w-4 h-4 text-[#C8102E] mt-0.5 shrink-0" />
                    : <CheckCircle className="w-4 h-4 text-[#008A51] mt-0.5 shrink-0" />
                  }
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white font-medium truncate">
                      {report.agreement_title}
                    </p>
                    <p className="text-[11px] text-zinc-500 mt-0.5 line-clamp-1">
                      {report.recommendation}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className={`text-[9px] font-bold font-mono px-2 py-0.5 rounded border ${riskClass}`}>
                      {report.risk_level}
                    </span>
                    <span className="text-[10px] text-zinc-600 font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {new Date(report.created_at).toLocaleDateString('en-GB', {
                        day: '2-digit', month: 'short', year: '2-digit'
                      })}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}

export default function DashboardPage() {
  return (
    <FilterProvider>
      <SiteHeader />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button variant="ghost" asChild>
              <Link href="/" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Golaha Guurtida Dashboard</h1>
            <p className="text-muted-foreground text-lg">International Partnerships &amp; Development Tracking</p>
          </div>

          {/* Live Convex Data Panel */}
          <LiveDataPanel />

          {/* New Diplomatic Intelligence Integration */}
          <DiplomaticIntelligenceHub />

          <div className="space-y-6" style={{ contentVisibility: 'auto' }}>
            <KPIDashboard />
            <ThematicFilterBar />

            <div className="space-y-6" style={{ contentVisibility: 'auto' }}>
              <h2 className="text-2xl font-heading font-bold">Visual Analytics</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <DonorActivityRadar />
                <FundingDistributionPie />
              </div>

              <LegislativeProgressBar />

              <div className="grid gap-6 md:grid-cols-2">
                <CommitteeEngagementRadial />
                <PartnershipStrengthRadial />
              </div>
            </div>

            <StructuredProjects />
            <DonorComparison />

            <div className="grid gap-6 md:grid-cols-2">
              <BudgetAnalysis />
              <DonorWheel />
            </div>

            <FundingTrends />
            <PartnersGrid />
            <PartnersNetwork />
            <DonorTracker />
            <ProjectTimeline />
            <CriticalDeadlines />
            <EventsTimeline />
            <PolicyRecommendations />
            <DonorCollaborationRing />
          </div>
        </div>
      </div>
    </FilterProvider>
  )
}
