import { NextRequest, NextResponse } from 'next/server';
import { generateGeminiResponse } from '@/lib/gemini';

const SYSTEM_CONTEXT = `You are the Golaha Guurtida Parliamentary Diplomacy AI — a specialist in drafting official parliamentary diplomatic communications for the Republic of Somaliland.

You draft communications on behalf of the:
- Office of the Speaker, Golaha Guurtida (House of Elders)
- Committee on Foreign Affairs & International Cooperation
- Parliamentary Friendship Groups Unit (PGEU)

All documents must:
- Use formal parliamentary diplomatic language
- Reference "Republic of Somaliland" — never "Somalia/Somaliland"
- Reflect Somaliland's democratic legitimacy and institutional track record
- Position the Guurti as an upper chamber with 82 traditional elders and modern governance roles
- Be ready for immediate dispatch to target parliamentary bodies

Document types supported:
- Expression of Interest (EOI) letters
- Memoranda of Understanding (MoU) draft frameworks
- Diplomatic Note Verbale
- Friendship Group Establishment Letters
- Invitation Letters for official visits
- Joint Statement frameworks`;

export async function POST(req: NextRequest) {
  try {
    const { target_parliament, target_country, document_type, key_points, context } = await req.json();

    const prompt = `Draft an official ${document_type || 'diplomatic communication'} from the Golaha Guurtida (House of Elders) of the Republic of Somaliland to the ${target_parliament || 'target parliamentary body'} of ${target_country || 'the target nation'}.

${key_points?.length ? `Key points to include:\n${key_points.map((p: string, i: number) => `${i+1}. ${p}`).join('\n')}` : ''}
${context ? `Additional context: ${context}` : ''}

Requirements:
- Use proper diplomatic salutation and closing
- Include today's date: ${new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
- Reference specific areas of proposed cooperation
- Highlight Somaliland's democratic stability and parliamentary track record
- Include appropriate reference numbers and classifications
- Make it immediately usable — no placeholders

Draft a complete, professional diplomatic document ready for dispatch.`;

    const aiResponse = await generateGeminiResponse(prompt, SYSTEM_CONTEXT);

    return NextResponse.json({
      success: true,
      draft_content: aiResponse,
      metadata: {
        target: target_parliament,
        document_type,
        generated_at: new Date().toISOString(),
        powered_by: 'Gemini AI — Guurti Parliamentary Diplomacy Unit'
      }
    });
  } catch (error) {
    console.error('[Diplomacy Draft Error]', error);
    return NextResponse.json({ success: false, error: 'Document generation failed.' }, { status: 500 });
  }
}
