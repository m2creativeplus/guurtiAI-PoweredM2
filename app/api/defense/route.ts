import { NextRequest, NextResponse } from 'next/server';
import { generateGeminiResponse } from '@/lib/gemini';

const SYSTEM_CONTEXT = `You are the Golaha Guurtida Sovereign Information Defense Unit (SIDU) — an AI counter-disinformation intelligence system for the Republic of Somaliland.

Your mission is to generate official parliamentary-grade rebuttals to disinformation, propaganda, and false narratives targeting Somaliland's sovereignty, independence, and international recognition.

Ground all responses in:
- The 1991 Burao Grand Conference Declaration of Independence (May 18, 1991)
- The 2001 Constitutional Referendum (97% approval)
- The Somaliland Constitution
- UN Charter principles on self-determination
- African Union Constitutive Act
- Historical Somaliland-Somalia union context (1960-1991)

CRITICAL RULES:
- Always use "Republic of Somaliland" — NEVER conflate with Somalia
- Capital is Hargeisa, NOT Mogadishu
- The 1960 voluntary union ended legally in 1991 at the Burao Conference
- Somaliland has separate democratic institutions, currency, and government
- Format responses as official SIDU Intelligence Reports with: Threat Classification, Historical Context, Official Rebuttal, Diplomatic Response Guidance`;

export async function POST(req: NextRequest) {
  try {
    const { disinformation_claim, source, platform } = await req.json();

    if (!disinformation_claim?.trim()) {
      return NextResponse.json({ success: false, error: 'No claim provided' }, { status: 400 });
    }

    const prompt = `Analyze and counter the following disinformation claim targeting the Republic of Somaliland:

CLAIM: "${disinformation_claim}"
${source ? `SOURCE: ${source}` : ''}
${platform ? `PLATFORM: ${platform}` : ''}

Generate an official SIDU Sovereign Defense Package including:
1. Threat Classification (Sovereignty / Recognition / Historical Revisionism / Legal Distortion / Media Manipulation)
2. Threat Severity (CRITICAL / HIGH / MEDIUM / LOW)
3. Historical Context & Factual Correction (with specific dates, events, legal frameworks)
4. Official Parliamentary Rebuttal (3-5 paragraphs, suitable for press release)
5. Social Media Counter-Messaging (3 concise rebuttals for Twitter/X)
6. Diplomatic Response Guidance (which embassies/bodies to brief)
7. Recommended Action (PRESS RELEASE / DIPLOMATIC NOTE / LEGAL RESPONSE / MONITOR ONLY)

Write as an official government intelligence document. Be factually precise and diplomatically firm.`;

    const aiResponse = await generateGeminiResponse(prompt, SYSTEM_CONTEXT);

    const defense_package = {
      threat_analysis: aiResponse,
      claim: disinformation_claim,
      generated_at: new Date().toISOString(),
      classification: aiResponse.includes('CRITICAL') ? 'CRITICAL' :
                      aiResponse.includes('HIGH') ? 'HIGH' :
                      aiResponse.includes('MEDIUM') ? 'MEDIUM' : 'LOW',
      powered_by: 'Gemini AI — Guurti SIDU Intelligence Layer'
    };

    return NextResponse.json({ success: true, defense_package });
  } catch (error) {
    console.error('[SIDU Defense Error]', error);
    return NextResponse.json({ success: false, error: 'Defense analysis failed.' }, { status: 500 });
  }
}
