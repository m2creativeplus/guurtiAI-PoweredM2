# SOMALILAND GOVERNMENT DIGITAL SERVICE & WEBSITE STANDARDS FRAMEWORK (SGDSSF) 2026

## EXECUTIVE SUMMARY
The Somaliland Government Digital Service & Website Standards Framework (SGDSSF) 2026 is the canonical blueprint for the digital transformation of the Republic of Somaliland. Designed by the M2 Creative & Consulting strategic architecture team under the philosophy that "Design is Policy," this framework provides concrete, actionable standards for all ministries, agencies, and state organs in Hargeisa and across the regions. 

This document ensures all digital touchpoints—websites, digital services, mobile applications, and content—project institutional trust, legitimacy, and sovereignty. The framework draws upon the world's leading government digital standards while rigorously protecting the distinct sovereign identity of the Republic of Somaliland.

---

## PART 1 – NATIONAL DIGITAL VISION

### 1.1 Strategic Objective
The Republic of Somaliland must project sovereignty, legitimacy, and operational excellence through its digital presence. Every government website, digital service, and online portal is a digital embassy of Somaliland. The primary goal is to provide citizen-centric, accessible, and highly secure digital services that build institutional trust.

### 1.2 Core Principles
1. **Sovereignty First:** All digital assets must unambiguously reflect the independent status of the Republic of Somaliland.
2. **Citizen-Centricity:** Services must be designed around the needs of the citizen, not the internal structures of government.
3. **Inclusivity & Accessibility:** Digital services must be usable by all citizens, regardless of digital literacy, location, or ability.
4. **Data Security & Privacy:** Government platforms must protect citizen data with the highest international cryptographic and cybersecurity standards.
5. **Interoperability:** Systems must be designed to communicate and share data seamlessly across government departments in Hargeisa.
6. **Agile & Iterative Delivery:** Government digital projects must prioritize delivering working software iteratively over monolithic, long-term deployments.

### 1.3 Compliance & Enforcement
All ministries, agencies, and commissions of the Republic of Somaliland are mandated to align their digital initiatives with the SGDSSF 2026. Compliance will be monitored via the Somaliland Government Digital Ranking System (Part 18).

---

## PART 2 – GOVERNMENT DIGITAL IDENTITY

### 2.1 The Somaliland Sovereign Color Palette
The digital identity of the Republic of Somaliland must strictly adhere to the national colors derived from the flag. No other primary colors (such as light blue) may be used for institutional branding.
- **Somaliland Green:** Primary action color (Hex: #007A3D). Used for primary buttons, headers, and active states.
- **Somaliland Red:** Accent and alert color (Hex: #D22630). Used for critical alerts, error states, and secondary accents.
- **Somaliland White:** Background and negative space (Hex: #FFFFFF).
- **Institutional Black/Charcoal:** Text and typography (Hex: #1A1A1A or #2C2C2C).
- **Gold/Institutional Yellow:** High-level institutional accents, specifically for the Presidency and Guurti (Hex: #D4AF37).

### 2.2 Typography
To ensure legibility, modernity, and a premium institutional feel, all government websites must utilize professional, modern sans-serif typefaces.
- **Primary Typeface:** Inter or Roboto.
- **Secondary/Display Typeface:** Outfit or Playfair Display (for high-level institutional headers).
- **Fallback Typeface:** Arial or system sans-serif.
*System defaults (like Times New Roman) are strictly prohibited for web interfaces.*

### 2.3 The National Emblem & Coat of Arms
- The official Coat of Arms of the Republic of Somaliland must be displayed in the global header of every government website.
- It must be hyperlinked to the main government portal (e.g., gov.sl or govsomaliland.org).
- The emblem must be rendered in high-resolution SVG format to ensure crispness on all displays.
- The use of the five-pointed white star is absolutely banned in all Somaliland digital assets.

### 2.4 Digital Language Policy
- **Primary Languages:** Somali (Af-Soomaali), English, and Arabic.
- Every government website must provide a seamless, prominent language toggle in the global header.
- Translations must be professional and localized, avoiding machine-translated artifacts.

---

## PART 3 – DOMAIN NAME & DIGITAL SOVEREIGNTY

### 3.1 Domain Name Policy
The digital sovereignty of the Republic of Somaliland begins with its domain infrastructure.
- **Target Top-Level Domain (TLD):** The ultimate aspiration is the `.sl` ccTLD.
- **Current Standard:** Until `.sl` is internationally recognized, the official domain structure must utilize `govsomaliland.org` or similar government-controlled central domains (e.g., `mofa.govsomaliland.org`).
- **Strict Prohibition:** Under no circumstances shall any Somaliland government entity use the `.so` domain. This is an absolute violation of digital sovereignty and institutional policy.

### 3.2 Email Infrastructure
- All official government correspondence must originate from official government domains.
- The use of Gmail, Yahoo, Hotmail, or other public email providers for official government business is strictly prohibited.
- Email signatures must follow a standardized national template featuring the national emblem, name, title, ministry, and official contact information.

### 3.3 Data Residency & Hosting Sovereignty
- Whenever feasible, critical citizen data must be hosted on servers physically located within the Republic of Somaliland or within trusted, allied sovereign jurisdictions.
- Government websites must utilize secure, enterprise-grade cloud hosting (e.g., Vercel, AWS, or equivalent) with strict geofencing and DDoS protection (e.g., Cloudflare) to prevent cyber-attacks against state digital infrastructure.

---

## PART 4 – USER EXPERIENCE & SERVICE DESIGN

### 4.1 The "One Government" Experience
Citizens interacting with the Republic of Somaliland online should feel they are dealing with a single, unified entity, regardless of which ministry's page they are visiting.
- Implement a unified "Global Header" and "Global Footer" across all ministry sites.
- Use consistent navigation patterns and terminology.

### 4.2 Service Design Principles
- **Start with user needs:** Conduct user research with actual citizens in Hargeisa and other regions before designing a service.
- **Do the hard work to make it simple:** Complex bureaucratic processes must be simplified for the end-user. The technology should handle the complexity.
- **Design for mobile first:** Given the high penetration of mobile internet in Somaliland, all designs must be optimized for mobile devices before desktop.

### 4.3 UI/UX Component Standards
- **Buttons:** Must have clear, actionable labels (e.g., "Apply for Visa", not "Submit"). Primary buttons use Somaliland Green.
- **Forms:** Must be simplified, using logical grouping, clear labels, and inline validation. Forms must auto-save progress where possible.
- **Search:** Every government site must feature a prominent, robust search function capable of handling Somali and English queries.

---

## PART 5 – ACCESSIBILITY

### 5.1 WCAG 2.1 AA Compliance
All Somaliland government digital services must meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA as a mandatory baseline.

### 5.2 Visual Accessibility
- **Color Contrast:** Text and interactive elements must have a contrast ratio of at least 4.5:1 against their backgrounds.
- **Text Sizing:** Users must be able to resize text up to 200% without loss of content or functionality.
- **Focus Indicators:** Keyboard navigation must be supported with highly visible focus rings around active elements.

### 5.3 Cognitive & Motor Accessibility
- **Clear Language:** Use plain language. Avoid bureaucratic jargon.
- **Tap Targets:** On mobile interfaces, touch targets must be at least 44x44 CSS pixels to ensure they are easily tappable.
- **Screen Reader Support:** All images, charts, and national symbols must have descriptive `alt` text. Form inputs must have programmatically associated labels.

---

## PART 6 – WEBSITE TECHNICAL STANDARDS

### 6.1 Modern Technology Stack
Somaliland government websites must be built using modern, performant, and secure technologies.
- **Frontend:** Next.js (App Router), React, or Vite.
- **Styling:** Tailwind CSS or highly structured Vanilla CSS.
- **CMS:** Headless CMS architectures (e.g., Sanity, Strapi, or secure custom solutions) are preferred over legacy WordPress installations to ensure security and performance.

### 6.2 Performance Optimization (Core Web Vitals)
Government websites must load exceptionally fast on both broadband and mobile networks (3G/4G) common in Somaliland.
- **Largest Contentful Paint (LCP):** Must occur within 2.5 seconds.
- **First Input Delay (FID) / Interaction to Next Paint (INP):** Must be under 100 milliseconds.
- **Cumulative Layout Shift (CLS):** Must be 0.1 or less.
- **Image Optimization:** All images must be served in next-gen formats (WebP/AVIF) and appropriately sized.

### 6.3 Code Quality & Architecture
- Codebases must be written in TypeScript to ensure type safety and reduce runtime errors.
- Version control (Git) must be used for all projects, with a strict review process before deployment to production.
- APIs must be RESTful or GraphQL-based, well-documented, and versioned.

---

## PART 7 – CYBERSECURITY

### 7.1 Baseline Security Posture
- **HTTPS Enforcement:** All government websites and APIs must enforce HTTPS using TLS 1.2 or higher. Unencrypted HTTP connections must be strictly redirected.
- **HSTS:** HTTP Strict Transport Security must be enabled across all domains.
- **WAF:** A Web Application Firewall (e.g., Cloudflare) must be deployed in front of all government web properties to mitigate DDoS attacks and SQL injection attempts.

### 7.2 Application Security
- Protect against OWASP Top 10 vulnerabilities (Injection, Broken Authentication, Sensitive Data Exposure, etc.).
- Form inputs must be strictly validated on both the client and server sides (e.g., using Zod for schema validation).
- Implement robust rate-limiting on all authentication endpoints and public APIs.

### 7.3 Identity & Access Management (IAM)
- Government administrators must use Multi-Factor Authentication (MFA) to access CMS backends and cloud infrastructure.
- Adopt a Principle of Least Privilege for all staff accessing government databases.
- Regular audits of user permissions must be conducted quarterly.

---

## PART 8 – CONTENT DESIGN

### 8.1 Plain Language Policy
Government content must be clear, concise, and easy to understand.
- Write in active voice.
- Use short sentences and paragraphs.
- Avoid bureaucratic jargon and complex legal terminology in citizen-facing content. Where legal terms are necessary, provide clear explanations.

### 8.2 Content Structure
- Use hierarchical, semantic HTML headings (H1, H2, H3) to structure content. Every page must have exactly one H1.
- Use bulleted lists for readability.
- Front-load the most important information (the inverted pyramid style).

### 8.3 Multimedia Content
- **Images:** Must serve a purpose. Avoid generic stock photos. Use high-quality imagery of Somaliland citizens, infrastructure, and leaders.
- **Video:** Must be hosted on scalable platforms (e.g., YouTube/Vimeo embedded) rather than direct server hosting to save bandwidth. All videos must include closed captions.
- **Documents:** PDFs should be avoided for primary information. If a PDF is necessary, it must be accompanied by an HTML summary and must be accessible to screen readers.

---

## PART 9 – SEO FRAMEWORK

### 9.1 Technical SEO
Government websites must be easily discoverable on global search engines to project Somaliland's sovereignty and provide information to the diaspora and international community.
- **Title Tags:** Every page must have a unique, descriptive title tag under 60 characters (e.g., "Apply for Visa | Ministry of Foreign Affairs - Republic of Somaliland").
- **Meta Descriptions:** Every page must have a compelling meta description under 160 characters summarizing the page content.
- **Semantic HTML:** Use proper HTML5 semantic elements (`<header>`, `<main>`, `<article>`, `<nav>`, `<footer>`).

### 9.2 Content Discoverability
- **XML Sitemaps:** Must be automatically generated and submitted to search engines.
- **Robots.txt:** Must be properly configured to allow crawling of public content while blocking sensitive administrative directories.
- **Canonical Tags:** Must be used to prevent duplicate content issues.

### 9.3 Multilingual SEO
- Implement `hreflang` tags to correctly map the Somali, English, and Arabic versions of the site, ensuring search engines deliver the correct language version to the user.

---

## PART 10 – OPEN GOVERNMENT & TRANSPARENCY

### 10.1 Open Data Mandate
The Republic of Somaliland is committed to transparency as a cornerstone of democratic governance.
- Non-sensitive government data (e.g., budget summaries, legislative acts, demographic statistics) must be published in open, machine-readable formats (CSV, JSON, XML).
- A central open data portal should be established to house national datasets.

### 10.2 Legislative Transparency
- Acts of Parliament, presidential decrees, and ministerial directives must be published online promptly in an accessible format.
- The Guurti and House of Representatives should maintain digital records of sessions, committee reports, and passed legislation.

### 10.3 Public Procurement
- All government tenders, bids, and awarded contracts above a defined financial threshold must be published on a central digital procurement portal to ensure fairness, competition, and anti-corruption.

---

## PART 11 – DIGITAL SERVICES

### 11.1 Service Digitization Priority
Government services must transition from paper-based to digital-first.
- **High-Priority Targets:** E-Visas, passport applications, national ID registration, business licensing, and tax payments.
- Services should be designed so that citizens only need to provide their information once (the "Once-Only" principle).

### 11.2 Digital Authentication
- Establish a unified citizen authentication framework (e.g., "Somaliland ID" login) that allows a citizen to access all government services with a single set of credentials.
- Ensure integration with biometric data securely managed by the national registration authority.

### 11.3 Digital Payments
- Government digital services must integrate with local digital financial infrastructure (e.g., Zaad, e-Dahab) to facilitate seamless mobile money payments for government fees and taxes.
- Secure API gateways must be established for payment processing.

---

## PART 12 – SOCIAL MEDIA GOVERNANCE

### 12.1 Official Presence
- All official government social media accounts (X/Twitter, Facebook, LinkedIn) must be verified and clearly indicate they represent the Republic of Somaliland.
- Account names and handles must be standardized (e.g., @SomalilandMFA, @SomalilandMoF).

### 12.2 Content Guidelines
- Social media content must align with the national digital vision and utilize the sovereign color palette (Green/White/Red) in all graphics.
- Information must be accurate, timely, and free of inflammatory rhetoric.
- The use of the Somalia flag emoji (🇸🇴) is strictly prohibited on any official account. When necessary, generic emojis or the Somaliland text must be used.

### 12.3 Crisis Communication
- Digital teams must have clear protocols for disseminating urgent information during national crises, ensuring the official government website and main social media channels are the definitive sources of truth.

---

## PART 13 – MOBILE APPLICATIONS

### 13.1 Justification for Native Apps
- Native mobile applications should only be developed when they provide functionality that a mobile-optimized web application (PWA) cannot provide (e.g., complex offline capabilities, heavy biometric integration).
- For general information dissemination, Progressive Web Apps (PWAs) are preferred to reduce development costs and user friction.

### 13.2 App Store Presence
- Official apps must be published under a verified "Government of Somaliland" developer account on the Apple App Store and Google Play Store.
- Apps must clearly display the national emblem and adhere to the digital identity guidelines in Part 2.

### 13.3 Mobile Security & Privacy
- Mobile apps must encrypt data both in transit and at rest on the device.
- Apps must explicitly request user permissions (e.g., camera, location) only when absolutely necessary and provide clear privacy policies.

---

## PART 14 – AI IN GOVERNMENT

### 14.1 Strategic Implementation
Artificial Intelligence should be leveraged to enhance government efficiency, not replace human judgment in critical sovereign matters.
- **Permitted Uses:** Automating document categorization, powering citizen-facing chatbots for FAQs, translation assistance, and data analysis.
- **Prohibited Uses:** Autonomous decision-making in the justice system, automated denial of citizen services without human review, and deployment of unvetted black-box algorithms.

### 14.2 Sovereign AI Infrastructure
- Where possible, AI models processing sensitive Somaliland government data must be deployed on sovereign infrastructure or highly secure, localized cloud instances.
- Data used to train or fine-tune models must be anonymized to protect citizen privacy.

### 14.3 Transparency in AI
- If a citizen is interacting with an AI (e.g., a chatbot on a ministry website), it must be clearly disclosed that the agent is artificial.
- Automated processes must have a clear mechanism for human appeal.

---

## PART 15 – ANALYTICS & PERFORMANCE KPIs

### 15.1 Data-Driven Governance
Government digital properties must be instrumented to measure performance and user satisfaction continuously.
- **Mandatory Tooling:** Privacy-respecting analytics platforms (e.g., Plausible, Fathom, or self-hosted Matomo) are preferred over Google Analytics to maintain data sovereignty.

### 15.2 Key Performance Indicators (KPIs)
Every digital service must track and report:
1. **Task Completion Rate:** The percentage of users who successfully complete a digital service (e.g., applying for a visa).
2. **Time to Complete:** The average time taken to complete a transaction.
3. **Digital Take-up:** The percentage of transactions completed online versus via traditional paper channels.
4. **User Satisfaction Score (CSAT):** Measured via short post-transaction surveys.
5. **System Uptime:** Must maintain a minimum of 99.9% availability.

### 15.3 Continuous Improvement
Analytics data must be reviewed monthly by ministry digital teams to identify bottlenecks, high-exit pages, and usability issues, feeding directly into iterative improvements.

---

## PART 16 – GOVERNANCE

### 16.1 The Digital Leadership Council
- A central authority (e.g., Ministry of ICT or a dedicated Digital Service Agency) must oversee the implementation of the SGDSSF across all ministries.
- Each ministry must appoint a Chief Digital Officer (CDO) responsible for compliance with these standards within their respective domain.

### 16.2 Approval & Audit Process
- New government websites or major digital services must pass a Digital Standard Assessment by the central authority before going live.
- Existing websites must undergo an annual audit to ensure continued compliance with security, accessibility, and branding standards.

### 16.3 Vendor Management
- Third-party contractors and digital agencies hired by the government must contractually agree to comply with the entirety of the SGDSSF 2026.
- The government retains full intellectual property and source code rights to all bespoke digital services developed by vendors.

---

## PART 17 – DIGITAL MATURITY MODEL

### 17.1 The Somaliland Digital Maturity Framework
Ministries will be assessed across a 5-level maturity model to track their digital transformation progress:
- **Level 1 (Analog):** Mostly paper-based processes. Website is a static brochure with outdated information. No online transactions.
- **Level 2 (Emerging):** Basic website exists. Information is digitized but processes are still manual (e.g., downloading a PDF form to print and submit physically).
- **Level 3 (Transactional):** Core services are digitized. Citizens can submit forms and make payments online. Meets baseline SGDSSF compliance.
- **Level 4 (Integrated):** Services share data across ministries (interoperability). Advanced use of analytics to improve user experience. Mobile-optimized end-to-end.
- **Level 5 (Intelligent):** Proactive service delivery. Utilization of AI for efficiency. Full adherence to open data and total ecosystem integration.

### 17.2 Progression Mandate
All core government ministries in Hargeisa are mandated to reach Level 3 (Transactional) by the end of 2027, and Level 4 (Integrated) by 2029.

---

## PART 18 – SOMALILAND GOVERNMENT DIGITAL RANKING SYSTEM

### 18.1 Ranking Criteria
To foster excellence and accountability, government ministries and agencies will be publicly ranked annually based on their digital performance across five pillars:
1. **Sovereign Identity & Brand Compliance (20%):** Adherence to colors, typography, emblems, and domain policies.
2. **Service Usability & Accessibility (25%):** WCAG compliance, mobile responsiveness, and task completion rates.
3. **Security & Infrastructure (25%):** HTTPS deployment, zero major breaches, robust uptime, and fast load times.
4. **Content Quality & Transparency (15%):** Clarity of language, up-to-date information, and open data availability.
5. **Innovation & Maturity (15%):** Progression on the Digital Maturity Model (Part 17) and implementation of new integrated services.

### 18.2 Publication of Results
- The annual Digital Ranking Report will be published publicly.
- Top-performing ministries will receive digital excellence awards.
- Bottom-performing entities will be required to submit a mandatory remediation roadmap within 60 days.

---

## PART 19 – IMPLEMENTATION ROADMAP 2026-2030

### Phase 1: Standardization & Securitization (2026)
- **Q1-Q2:** Official adoption of the SGDSSF 2026. Audit of all existing government web properties.
- **Q3-Q4:** Enforcement of HTTPS, domain consolidation (migrating all rogue domains to standard governance), and deployment of the global sovereign visual identity (Green/White/Red).

### Phase 2: Core Service Digitization (2027-2028)
- **2027:** Rollout of the unified national authentication gateway. Digitization of top 10 highest-volume citizen transactions (visas, business licenses, basic tax payments).
- **2028:** Implementation of the government digital payment gateway integrated with local mobile money providers. Phasing out of PDF-based forms in favor of web forms.

### Phase 3: Interoperability & Data Ecosystem (2029)
- Establishment of the Government API Gateway to allow secure data sharing between ministries (e.g., linking national ID databases with tax and health records).
- Launch of the National Open Data Portal.

### Phase 4: Intelligent Government (2030)
- Deployment of secure AI-driven analytics for proactive service delivery.
- Achievement of Level 4/5 Digital Maturity across 80% of all national ministries and regional governments.
- Full realization of the Republic of Somaliland as a leading digital administration in the Horn of Africa, projecting absolute sovereignty and technological resilience.

---
*Document formulated and ratified under the architectural governance of M2 Creative & Consulting. Design is Policy.*
