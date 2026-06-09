# Walkthrough: The Ultimate Proposal Generator (NotebookLM Integration)

I have successfully connected your local `notebooklm` agent into the Guurti EPD Next.js Dashboard.

## What Was Built
1. **The NotebookLM Engine API**: A backend serverless endpoint (`/app/api/notebooklm-generator/route.ts`) that intercepts frontend requests and executes the local Python NotebookLM CLI using your secure authentication state.
2. **The "Donor Master" Notebook**: A dedicated NotebookLM workspace (`f15df486-ddf7-4a3f-a0b9-90b0ebeec53e`) was created specifically for generating Guurti EPD proposals. 
3. **The Dual-Track UI**: The Proposal Generator now features two buttons:
   - **Synthesize Fast Draft**: Instantly generates the template-based proposals (the original method).
   - **AI Generate (NotebookLM)**: Calls the NotebookLM API to generate a fully customized, professional proposal directly from the NotebookLM intelligence engine.

## ⚠️ CRITICAL DEPLOYMENT CAVEAT
> [!WARNING]
> Because NotebookLM generation requires the `~/.notebooklm/profiles/default/storage_state.json` file on your MacBook to authenticate with Google, **the AI generation will NOT work on the Vercel-deployed site**.
> 
> To use the AI generation, you MUST run the dashboard locally on your Mac:
> ```bash
> cd "/Volumes/MAC DATA/Antigraphity/M2_PROJECTS_HUB/01_ACTIVE_MISSIONS/guurtiAI-PoweredM2"
> npm run dev
> ```
> *(The Next.js API route has been hardcoded to use your local Python 3.14 installation path).*

## How to Test It
1. Run `npm run dev` in the project directory.
2. Navigate to `http://localhost:3000/epd/proposal-generator`.
3. Select an Opportunity, a Model, and a Template type.
4. Click **"AI Generate (NotebookLM)"**. 
5. The UI will show a pulsing loading state for 15-30 seconds while the CLI communicates with Google's servers, then the perfectly tailored AI-generated proposal will stream into the editor!
6. Click **Save Draft** to store it in your live Convex database.
