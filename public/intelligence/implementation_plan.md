# Implementation Plan: Execution Phase (Dashboard Integration & Optimization)

## Goal Description
The objective is to execute all pending tasks on the Guurti AI-Powered Dashboard. This includes resolving the Lighthouse Accessibility and Core Web Vitals issues, and integrating the newly generated Asymmetric Diplomacy and Visa Intelligence assets directly into the user interface so they are immediately accessible to Guurti officials.

## Proposed Changes

### 1. Component: Diplomatic Intelligence Hub
#### [NEW] [diplomatic-intelligence-hub.tsx](file:///Volumes/MAC%20DATA/Antigraphity/M2_PROJECTS_HUB/01_ACTIVE_MISSIONS/guurtiAI-PoweredM2/components/dashboard/diplomatic-intelligence-hub.tsx)
I will build a brand new UI component that acts as the command center for the intelligence we just generated. It will feature:
*   **Asymmetric Strategy Module:** Links/Modals for the Taiwan and Israel playbooks.
*   **Global Visa Protocol Tracker:** Quick-reference cards for the 7 jurisdictions (Five-Eyes, Schengen, Taiwan).
*   **Summer 2026 Engagement Packages:** A grid displaying the 12 events we mapped out.
*   *Design:* It will use the signature M2 glassmorphism and the official Republic of Somaliland color palette.

### 2. Dashboard Integration & Accessibility Fixes
#### [MODIFY] [page.tsx](file:///Volumes/MAC%20DATA/Antigraphity/M2_PROJECTS_HUB/01_ACTIVE_MISSIONS/guurtiAI-PoweredM2/app/dashboard/page.tsx)
*   **Integration:** I will inject the `<DiplomaticIntelligenceHub />` directly below the `LiveDataPanel`.
*   **Accessibility (WCAG 2.2 AA):** I will fix the `heading-order` errors identified in the Lighthouse audit (ensuring strict `h1` -> `h2` -> `h3` hierarchy) and resolve `color-contrast` failures on the risk badges.
*   **Core Web Vitals (LCP):** I will add `content-visibility: auto` to the heavy visual analytics components (like the Radar and Pie charts) to drastically improve Initial Load performance, and ensure any hero elements have `fetchpriority="high"`.

## User Review Required

> [!IMPORTANT]
> **Open Question for You:**
> Should the new "Diplomatic Intelligence Hub" component link out to the raw markdown files we generated, or should I build dedicated UI modals/pages within the Next.js app to display the playbook contents natively?

## Verification Plan
1. Once approved, I will build the new component and apply the accessibility fixes to the main dashboard.
2. I will run a local build check (`npm run build`) to ensure no TypeScript or Next.js routing errors were introduced.
3. I will verify the heading hierarchy manually to ensure WCAG compliance.
