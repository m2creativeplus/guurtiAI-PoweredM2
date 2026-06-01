import { NextRequest, NextResponse } from 'next/server';
import { generateGeminiResponse } from '@/lib/gemini';

const SYSTEM_CONTEXT = `You are the Golaha Guurtida (House of Elders) AI-POS Legal Compliance Engine for the Republic of Somaliland.

Your role is to perform ex-ante sovereignty scrutiny on foreign treaties, bilateral agreements, investment portfolios, and international contracts submitted for parliamentary review.

You assess documents against:
- Somaliland Constitution (Articles 12, 61, and all sovereignty provisions)
- Somaliland Investment Law
- Somaliland Public Finance Management Act
- UNCLOS maritime sovereignty provisions
- Somaliland National Development Plan 2022-2026

Your output must be formal, authoritative, and structured as an official parliamentary legal opinion.
Always reference specific constitutional articles. Always use "Republic of Somaliland" — never "Somalia/Somaliland".
Format your response as a structured legal assessment with: Risk Level, Summary, Flagged Constitutional Provisions, and Official Recommendation.`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { agreement_title, investment_value, investor_origin, full_text } = body;

    const documentSummary = full_text
      ? full_text.slice(0, 3000)
      : `Agreement: ${agreement_title || 'Untitled'} | Value: ${investment_value || 'Undisclosed'} | Origin: ${investor_origin || 'Unknown'}`;

    const prompt = `Perform an ex-ante constitutional scrutiny assessment on the following document submitted to the Golaha Guurtida Foreign Affairs & International Cooperation Committee:

DOCUMENT SUMMARY:
${documentSummary}

Provide a formal AI-POS (AI Parliamentary Oversight System) Legal Assessment including:
1. Overall Risk Level (Critical / High / Medium / Low)
2. Executive Summary (3-4 sentences)
3. Flagged Constitutional Provisions (list each article with explanation)
4. Sovereignty Compliance Score (0-100)
5. Official Guurti Recommendation (APPROVE / CONDITIONAL APPROVE / BLOCK / MANDATORY REVIEW)
6. Required Remedial Actions before ratification

Be specific, cite Somaliland law, and write as an official government AI system.`;

    const aiResponse = await generateGeminiResponse(prompt, SYSTEM_CONTEXT);

    // Parse structured response or return as-is
    const analysis = {
      risk_level: aiResponse.includes('Critical') ? 'Critical' :
                  aiResponse.includes('High') ? 'High' :
                  aiResponse.includes('Medium') ? 'Medium' : 'Low',
      summary: aiResponse,
      generated_at: new Date().toISOString(),
      document_title: agreement_title || 'Submitted Agreement',
      powered_by: 'Gemini AI — Guurti EPD Intelligence Layer'
    };

    return NextResponse.json({ success: true, analysis });
  } catch (error) {
    console.error('[AI-POS Scrutiny Error]', error);
    return NextResponse.json(
      { success: false, error: 'Analysis failed. Please retry.' },
      { status: 500 }
    );
  }
}
