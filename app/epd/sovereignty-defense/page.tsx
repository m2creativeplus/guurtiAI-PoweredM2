'use client';

import Link from 'next/link';
import { ArrowLeft, Shield, Terminal, Copy, Check, Loader2, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

export default function SovereigntyDefensePage() {
  const [claim, setClaim] = useState('');
  const [source, setSource] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!claim.trim()) return;
    setIsProcessing(true);
    setResult(null);
    try {
      const response = await fetch('/api/defense', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ disinformation_claim: claim, source }),
      });
      const data = await response.json();
      setResult(data.defense_package);
    } catch {
      setResult({ threat_analysis: 'Analysis failed. Please retry.', classification: 'ERROR' });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopy = () => {
    if (result?.threat_analysis) {
      navigator.clipboard.writeText(result.threat_analysis);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const EXAMPLE_CLAIMS = [
    'Somaliland is part of Somalia and has no right to self-determination',
    'The Ethiopia-Somaliland MoU violates Somali territorial integrity',
    'Somaliland\'s 1991 declaration was unconstitutional',
    'Somaliland ports are under foreign sovereign control',
  ];

  return (
    <div className="min-h-screen bg-[#050507] text-[#F0EEE8]">
      <header className="sticky top-0 z-20 border-b border-red-900/30 bg-[#050507]/95 backdrop-blur-xl px-6 lg:px-10 py-4 flex items-center gap-4">
        <Link href="/epd" className="p-2 hover:bg-white/5 rounded-lg transition-all text-zinc-500 hover:text-zinc-300" aria-label="Back to EPD">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <div className="text-[10px] font-mono text-red-400 tracking-widest uppercase">EPD / Sovereignty Defense Unit</div>
          <h1 className="text-lg font-bold text-white">SIDU — Counter-Disinformation Intelligence</h1>
        </div>
        <div className="ml-auto hidden md:flex items-center gap-2 text-xs text-zinc-600 font-mono">
          <Shield className="w-3.5 h-3.5 text-red-400" />
          Golaha Guurtida Sovereign Information Defense
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 lg:px-10 py-10">
        <p className="text-zinc-400 text-sm max-w-2xl mb-8">
          Submit any disinformation claim, false narrative, or propaganda targeting Somaliland's sovereignty. 
          The AI generates official parliamentary-grade rebuttals grounded in constitutional law and verified history.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input */}
          <div className="bg-zinc-900/50 border border-red-900/20 rounded-2xl p-6 space-y-4">
            <h2 className="font-bold text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-red-400" />
              Submit Disinformation Claim
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-zinc-500 font-mono uppercase tracking-wider block mb-1.5">
                  Disinformation Claim *
                </label>
                <textarea
                  value={claim}
                  onChange={e => setClaim(e.target.value)}
                  rows={4}
                  placeholder="Paste the false claim, narrative, or disinformation to counter..."
                  className="w-full bg-zinc-950 border border-white/10 focus:border-red-500/40 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors resize-none"
                  required
                />
              </div>

              <div>
                <label className="text-xs text-zinc-500 font-mono uppercase tracking-wider block mb-1.5">
                  Source / Platform (optional)
                </label>
                <input
                  type="text"
                  value={source}
                  onChange={e => setSource(e.target.value)}
                  placeholder="e.g. Al Jazeera, Twitter/X, UN Statement..."
                  className="w-full bg-zinc-950 border border-white/10 focus:border-red-500/40 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isProcessing || !claim.trim()}
                className="w-full bg-red-600/80 hover:bg-red-600 disabled:opacity-30 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2.5"
              >
                {isProcessing ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Generating SIDU Defense Package...</>
                ) : (
                  <><Shield className="w-4 h-4" /> Generate Sovereignty Defense Package</>
                )}
              </button>
            </form>

            {/* Examples */}
            <div className="pt-4 border-t border-white/5">
              <p className="text-xs text-zinc-600 font-mono mb-3 uppercase tracking-wider">Example claims to test:</p>
              <div className="space-y-2">
                {EXAMPLE_CLAIMS.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setClaim(c)}
                    className="w-full text-left text-xs text-zinc-500 hover:text-zinc-300 bg-zinc-950/60 hover:bg-zinc-900 border border-white/5 hover:border-white/10 rounded-lg px-3 py-2 transition-all"
                  >
                    "{c}"
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Output */}
          <div className={`border rounded-2xl p-6 transition-all duration-500 min-h-[400px] ${
            result ? 'border-red-600/30 bg-red-950/5' : 'bg-zinc-900/30 border-white/5'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-5 rounded-full bg-red-500" />
                SIDU Defense Package
              </h2>
              {result && (
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono px-2 py-1 rounded-full border ${
                    result.classification === 'CRITICAL' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
                    result.classification === 'HIGH' ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' :
                    'bg-amber-500/10 border-amber-500/20 text-amber-400'
                  }`}>
                    {result.classification || 'ANALYZED'}
                  </span>
                  <button onClick={handleCopy} className="p-1.5 hover:bg-white/5 rounded-lg transition-colors text-zinc-500 hover:text-zinc-300">
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              )}
            </div>

            {!result && !isProcessing && (
              <div className="h-64 flex flex-col items-center justify-center text-zinc-600 gap-3">
                <Shield className="w-14 h-14 opacity-15" />
                <p className="text-sm">Submit a claim to generate a defense package.</p>
              </div>
            )}

            {isProcessing && (
              <div className="h-64 flex flex-col items-center justify-center gap-4 text-red-400">
                <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-xs font-mono animate-pulse uppercase tracking-widest">
                  Cross-referencing 1991 Burao Declaration & Somaliland Constitution...
                </p>
              </div>
            )}

            {result && (
              <div className="animate-in fade-in slide-in-from-bottom-3 duration-400">
                <div className="bg-zinc-950/80 border border-white/5 rounded-xl p-4 text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap max-h-[500px] overflow-y-auto">
                  {result.threat_analysis}
                </div>
                {result.powered_by && (
                  <p className="text-[10px] text-zinc-600 font-mono text-right mt-3">{result.powered_by}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
