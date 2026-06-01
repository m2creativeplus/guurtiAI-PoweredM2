'use client';

import Link from 'next/link';
import { ArrowLeft, Scale, UploadCloud, Loader2, ShieldAlert, AlertTriangle, CheckCircle, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import type { Metadata } from 'next';

interface AnalysisResult {
  risk_level: string;
  summary: string;
  document_title: string;
  powered_by: string;
}

export default function TreatyScrutinyPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [agreementTitle, setAgreementTitle] = useState('');
  const [investmentValue, setInvestmentValue] = useState('');
  const [investorOrigin, setInvestorOrigin] = useState('');
  const [freeText, setFreeText] = useState('');

  const handleAnalyze = async () => {
    if (!agreementTitle && !freeText) return;
    setIsAnalyzing(true);
    setResult(null);
    try {
      const response = await fetch('/api/scrutiny', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agreement_title: agreementTitle || 'Untitled Agreement',
          investment_value: investmentValue,
          investor_origin: investorOrigin,
          full_text: freeText,
        }),
      });
      const data = await response.json();
      setResult(data.analysis);
    } catch {
      setResult({
        risk_level: 'Error',
        summary: 'Analysis failed. Check your connection and retry.',
        document_title: agreementTitle,
        powered_by: '',
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleCopy = () => {
    if (result?.summary) {
      navigator.clipboard.writeText(result.summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const riskColor =
    result?.risk_level === 'Critical' ? 'border-red-600/40 bg-red-950/10' :
    result?.risk_level === 'High'     ? 'border-rose-500/40 bg-rose-950/5' :
    result?.risk_level === 'Medium'   ? 'border-amber-500/40 bg-amber-950/5' :
    result?.risk_level === 'Low'      ? 'border-emerald-500/40 bg-emerald-950/5' :
                                        'border-white/5';

  return (
    <div className="min-h-screen bg-[#050507] text-[#F0EEE8]">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-[#008A51]/20 bg-[#050507]/95 backdrop-blur-xl px-6 lg:px-10 py-4 flex items-center gap-4">
        <Link href="/epd" className="p-2 hover:bg-white/5 rounded-lg transition-all text-zinc-500 hover:text-zinc-300" aria-label="Back to EPD">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <div className="text-[10px] font-mono text-[#008A51] tracking-widest uppercase">EPD / Treaty & Investment Scrutiny</div>
          <h1 className="text-lg font-bold text-white">AI-POS — Parliamentary Oversight System</h1>
        </div>
        <div className="ml-auto hidden md:block text-xs text-zinc-600 font-mono">
          Ex-Ante Sovereignty Compliance · Golaha Guurtida
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 lg:px-10 py-10">
        <div className="mb-8">
          <p className="text-zinc-400 text-sm max-w-2xl">
            Submit any foreign treaty, bilateral agreement, or investment portfolio for immediate ex-ante constitutional compliance screening against Somaliland law. Powered by Gemini AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Panel */}
          <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 space-y-5">
            <div className="flex items-center gap-3 mb-2">
              <UploadCloud className="w-5 h-5 text-[#008A51]" />
              <h2 className="font-bold text-white">Document Submission</h2>
            </div>

            <div>
              <label className="text-xs text-zinc-500 font-mono uppercase tracking-wider block mb-1.5">Agreement Title *</label>
              <input
                type="text"
                value={agreementTitle}
                onChange={e => setAgreementTitle(e.target.value)}
                placeholder="e.g. Berbera Port Corridor Investment Agreement"
                className="w-full bg-zinc-950 border border-white/10 focus:border-[#008A51]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-zinc-500 font-mono uppercase tracking-wider block mb-1.5">Investment Value</label>
                <input
                  type="text"
                  value={investmentValue}
                  onChange={e => setInvestmentValue(e.target.value)}
                  placeholder="e.g. $15.4M"
                  className="w-full bg-zinc-950 border border-white/10 focus:border-[#008A51]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-zinc-500 font-mono uppercase tracking-wider block mb-1.5">Investor Origin</label>
                <input
                  type="text"
                  value={investorOrigin}
                  onChange={e => setInvestorOrigin(e.target.value)}
                  placeholder="e.g. UAE, Ethiopia"
                  className="w-full bg-zinc-950 border border-white/10 focus:border-[#008A51]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-zinc-500 font-mono uppercase tracking-wider block mb-1.5">Agreement Text / Summary (optional)</label>
              <textarea
                value={freeText}
                onChange={e => setFreeText(e.target.value)}
                rows={5}
                placeholder="Paste relevant clauses or a summary of the agreement for deeper AI analysis..."
                className="w-full bg-zinc-950 border border-white/10 focus:border-[#008A51]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors resize-none"
              />
            </div>

            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing || (!agreementTitle && !freeText)}
              className="w-full bg-[#008A51] hover:bg-[#007044] disabled:opacity-30 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2.5"
            >
              {isAnalyzing ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Cross-referencing Somaliland Constitution...</>
              ) : (
                <><Scale className="w-4 h-4" /> Run AI-POS Constitutional Scrutiny</>
              )}
            </button>
          </div>

          {/* Results Panel */}
          <div className={`border rounded-2xl p-6 transition-all duration-500 min-h-[400px] ${result ? riskColor : 'bg-zinc-900/30 border-white/5'}`}>
            <h2 className="font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1.5 h-5 rounded-full bg-[#008A51]" />
              AI-POS Sovereignty Risk Assessment
            </h2>

            {!result && !isAnalyzing && (
              <div className="h-64 flex flex-col items-center justify-center text-zinc-600 gap-3">
                <ShieldAlert className="w-14 h-14 opacity-20" />
                <p className="text-sm">Awaiting document submission...</p>
              </div>
            )}

            {isAnalyzing && (
              <div className="h-64 flex flex-col items-center justify-center gap-4 text-amber-400">
                <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
                <p className="text-xs font-mono animate-pulse uppercase tracking-widest">
                  Screening against Somaliland Constitution...
                </p>
              </div>
            )}

            {result && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-400">
                {/* Risk Badge */}
                <div className="flex items-center justify-between bg-zinc-950 rounded-xl px-4 py-3 border border-white/5">
                  <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Overall Risk Level</span>
                  <div className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border ${
                    result.risk_level === 'Critical' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
                    result.risk_level === 'High'     ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' :
                    result.risk_level === 'Medium'   ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' :
                                                       'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                  }`}>
                    {result.risk_level === 'Low' || result.risk_level === 'Medium'
                      ? <CheckCircle className="w-3.5 h-3.5" />
                      : <AlertTriangle className="w-3.5 h-3.5" />}
                    {result.risk_level.toUpperCase()} RISK
                  </div>
                </div>

                {/* AI Analysis */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">AI Constitutional Analysis</span>
                    <button onClick={handleCopy} className="text-zinc-600 hover:text-zinc-300 transition-colors p-1">
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <div className="bg-zinc-950/80 border border-white/5 rounded-xl p-4 text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap max-h-72 overflow-y-auto">
                    {result.summary}
                  </div>
                </div>

                {result.powered_by && (
                  <p className="text-[10px] text-zinc-600 font-mono text-right">{result.powered_by}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
