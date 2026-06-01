import { NextRequest, NextResponse } from 'next/server';
import { generateGeminiResponse } from '@/lib/gemini';

const SYSTEM_CONTEXT = `You are the Golaha Guurtida EPD Strategic Intelligence Analyst. You analyze geopolitical events, donor trends, and international developments to surface actionable intelligence for the Republic of Somaliland's House of Elders (Golaha Guurtida).

Focus areas:
- International recognition opportunities
- Donor community sentiment toward Somaliland
- Parliamentary diplomacy openings
- Regional security intelligence relevant to Somaliland
- Trade and economic partnership opportunities
- Risks to Somaliland's sovereignty and democratic legitimacy`;

export async function POST(req: NextRequest) {
  try {
    const { query, category } = await req.json();

    const prompt = `Generate a strategic intelligence briefing for the Golaha Guurtida EPD on the following topic:

QUERY: ${query || 'Current international recognition opportunities for Somaliland'}
CATEGORY: ${category || 'General Intelligence'}
DATE: ${new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}

Provide:
1. SITUATION ASSESSMENT — Current geopolitical context
2. KEY INTELLIGENCE ITEMS — 3-5 actionable intelligence points
3. OPPORTUNITIES IDENTIFIED — Specific diplomatic or funding windows
4. RISK INDICATORS — Threats to monitor
5. RECOMMENDED EPD ACTIONS — Specific steps for the Foreign Affairs Committee
6. PRIORITY RATING (CRITICAL / HIGH / MEDIUM / LOW)

Format as an official EPD Intelligence Briefing. Reference real institutions, real programs, and verifiable context.`;

    const aiResponse = await generateGeminiResponse(prompt, SYSTEM_CONTEXT);

    return NextResponse.json({
      success: true,
      briefing: aiResponse,
      generated_at: new Date().toISOString(),
      category: category || 'General',
      powered_by: 'Gemini AI — Guurti EPD Intelligence Layer'
    });
  } catch (error) {
    console.error('[Intelligence API Error]', error);
    return NextResponse.json({ success: false, error: 'Intelligence analysis failed.' }, { status: 500 });
  }
}
