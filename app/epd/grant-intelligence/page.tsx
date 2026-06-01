'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Target, ExternalLink, Loader2, Sparkles,
  Clock, DollarSign, CheckCircle2, AlertCircle, TrendingUp, Filter
} from 'lucide-react';

interface Grant {
  _id: string;
  org: string;
  title: string;
  deadline: string;
  amount: string;
  matchScore: number;
  status: string;
  focus: string[];
  description: string;
  donor_country: string;
  contact: string;
}

function MatchBadge({ score }: { score: number }) {
  const color = score >= 90 ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20' :
                score >= 80 ? 'bg-blue-500/15 text-blue-400 border-blue-500/20' :
                              'bg-amber-500/15 text-amber-400 border-amber-500/20';
  return (
    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${color}`}>
      {score}% Match
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const isUrgent = status.includes('URGENT');
  const isOpen = status.includes('Open') || status.includes('Confirmed');
  const color = isUrgent ? 'text-red-400 border-red-500/20 bg-red-500/10' :
                isOpen ? 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10' :
                         'text-zinc-400 border-zinc-500/20 bg-zinc-500/10';
  return (
    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${color} flex items-center gap-1`}>
      {isUrgent && <AlertCircle className="w-3 h-3" />}
      {isOpen && !isUrgent && <CheckCircle2 className="w-3 h-3" />}
      {status}
    </span>
  );
}

export default function GrantIntelligencePage() {
  const [grants, setGrants] = useState<Grant[]>([]);
  const [loading, setLoading] = useState(true);
  const [auditingId, setAuditingId] = useState<string | null>(null);
  const [auditResult, setAuditResult] = useState<{ grantId: string; content: string } | null>(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('/api/grants')
      .then(r => r.json())
      .then(d => {
        setGrants(d.grants || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const runAIAudit = async (grantId: string) => {
    setAuditingId(grantId);
    setAuditResult(null);
    try {
      const res = await fetch('/api/grants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grant_id: grantId, action: 'ai-audit' })
      });
      const data = await res.json();
      setAuditResult({ grantId, content: data.ai_audit || data.error });
    } catch {
      setAuditResult({ grantId, content: 'Analysis failed. Please retry.' });
    } finally {
      setAuditingId(null);
    }
  };

  const filtered = filter === 'all' ? grants :
    grants.filter(g => g.matchScore >= parseInt(filter));

  return (
    <div className="min-h-screen bg-[#050507] text-[#F0EEE8]">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-[#008A51]/20 bg-[#050507]/95 backdrop-blur-xl px-6 lg:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/epd" className="p-2 hover:bg-white/5 rounded-lg transition-all text-zinc-500 hover:text-zinc-300" aria-label="Back to EPD">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="text-[10px] font-mono text-[#008A51] tracking-widest uppercase">EPD / Grant Intelligence</div>
            <h1 className="text-lg font-bold text-white">Parliamentary Grant Engagement Unit (PGEU)</h1>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs text-zinc-500">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          $14.6M+ across {grants.length} verified opportunities
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        {/* Filters */}
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          <Filter className="w-4 h-4 text-zinc-500" />
          <span className="text-sm text-zinc-500">Filter by match score:</span>
          {['all', '90', '80', '70'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                filter === f
                  ? 'bg-[#008A51] text-white'
                  : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
              }`}
            >
              {f === 'all' ? 'All Grants' : `${f}%+ Match`}
            </button>
          ))}
        </div>

        {loading && (
          <div className="flex items-center justify-center py-32 text-zinc-500">
            <Loader2 className="w-6 h-6 animate-spin mr-3" />
            Loading grant intelligence database...
          </div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {filtered.map((grant) => (
              <article
                key={grant._id}
                className="bg-zinc-900/50 border border-white/5 hover:border-[#008A51]/30 rounded-2xl p-6 flex flex-col gap-4 transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-xs font-mono text-zinc-500 mb-1">{grant.org}</div>
                    <h2 className="font-bold text-white text-sm leading-snug">{grant.title}</h2>
                  </div>
                  <MatchBadge score={grant.matchScore} />
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-2">
                  <StatusBadge status={grant.status} />
                  <span className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Deadline: {grant.deadline}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <DollarSign className="w-3 h-3" /> {grant.amount}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed">{grant.description}</p>

                {/* Focus tags */}
                <div className="flex flex-wrap gap-1.5">
                  {grant.focus.map(f => (
                    <span key={f} className="text-[10px] font-mono bg-white/5 text-zinc-400 px-2 py-0.5 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-white/5 flex gap-3">
                  <button
                    onClick={() => runAIAudit(grant._id)}
                    disabled={auditingId === grant._id}
                    className="flex-1 bg-[#008A51]/10 hover:bg-[#008A51]/20 border border-[#008A51]/20 hover:border-[#008A51]/40 text-[#008A51] text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {auditingId === grant._id ? (
                      <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Analysing with AI...</>
                    ) : (
                      <><Sparkles className="w-3.5 h-3.5" /> AI Eligibility Audit</>
                    )}
                  </button>
                  <Link
                    href="/epd/proposal-generator"
                    className="px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Draft Proposal
                  </Link>
                </div>

                {/* AI Audit Result */}
                {auditResult?.grantId === grant._id && (
                  <div className="mt-2 bg-[#008A51]/5 border border-[#008A51]/20 rounded-xl p-4">
                    <div className="text-[10px] font-mono text-[#008A51] uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Sparkles className="w-3 h-3" /> Gemini AI — EPD Eligibility Assessment
                    </div>
                    <div className="text-xs text-zinc-300 leading-relaxed whitespace-pre-wrap max-h-64 overflow-y-auto">
                      {auditResult.content}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            <Target className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>No grants match the selected filter.</p>
          </div>
        )}
      </main>
    </div>
  );
}
