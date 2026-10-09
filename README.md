# LeadZam CRM UI Implementation

A responsive React + TypeScript + Vite web application reproducing UI screens for **LeadZam CRM**.

---

## 🚀 Live Demo & Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Quick Start Instructions
```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
http://127.0.0.1:5173
```

### Build for Production
```bash
# Typecheck & build bundle
npm run build
```

---

## 🎨 Implemented Screens & Feature Mapping

| Screen # | Reference Design | URL Path | Interactive Features |
|---|---|---|---|
| **Screen 1** | **Sign Up / Create Account Page** | `/signup` | • Google Workspace Sign-Up<br>• Full name, Work email, Company name, Password fields<br>• Password strength indicator bar<br>• **Strict Email Format Validation**<br>• Terms & Privacy consent checkbox<br>• Working navigation to Sign In (`/login`)<br>• SSL, SOC-2, GDPR & SLA badges |
| **Screen 2** | **Outbound CRM Dashboard** | `/dashboard` | • Collapsible Overdue (4), Due Today (7), Upcoming (12) lead lists<br>• Stats cards: Pending calls, Overdue alerts, Completed today, Avg duration<br>• Top search bar & stage/source filters<br>• Softphone Ready header indicator<br>• 1-Click Copy Phone button & toast notification<br>• CTI Dialer keyboard shortcut banner |
| **Screen 3** | **Log Call Modal** | Click any lead in `/dashboard` | • Call outcomes (Connected, No answer, Busy, Wrong number)<br>• Call outcome required validation<br>• Stage update dropdown<br>• Discussion notes textarea<br>• Next follow-up date & time presets |
| **Screen 4** | **14-Day Free Trial Modal** | Trigger via "Get Free Trial" buttons | • Full name, Work email, Company name, Phone number fields<br>• Inline validation (`Invalid format` tag)<br>• SOC2 compliance pill |
| **Screen 5** | **LeadZam Full Website Landing Page** | `/` | • Hero section with interactive mockup<br>• 5 Key Feature Cards<br>• Integration Hub (Meta Ads, Google Search, WhatsApp)<br>• 6 Solution / Offering Cards<br>• Founder & CEO profile & quote<br>• FAQ Accordion<br>• Transparent Pricing with Monthly / Annual (Save 20%) toggle<br>• Dark Navy Bottom CTA Section & Footer |

---

## ✉️ Email Validation Rules

Implemented in `src/utils/validation.ts`:
- **Empty Email**: `"Please enter your email address."`
- **Invalid Format**: `"Please enter a valid email address."`
- **Rules**:
  - Trims leading/trailing whitespace.
  - Requires domain name with a dot after `@` (e.g. `nagaraj@gmail.com`).
  - Rejects `nagaraj`, `nagaraj@`, `nagaraj@gmail`, `@gmail.com`, `nagaraj gmail.com`.
  - Displays red border (`.has-error`) and inline error message below field.

---

## 📱 Tested Breakpoints
- **Desktop**: 1440px, 1280px
- **Tablet**: 768px
- **Mobile**: 390px, 360px

---

## 🤖 AI Usage Notes

### 1. Which AI tools did you use?
- **Antigravity AI (powered by Gemini 3.6 Flash)**: Used for code generation, UI component scaffolding, design system architecture, and form validation auditing.

### 2. How did AI help with the audit, design, or frontend implementation?
- **Audit**: Assisted in auditing reference UI designs to break down necessary screen layouts, modal states, interactive components, and routing structures.
- **Design**: Generated curated CSS color tokens, glassmorphism cards, responsive flex/grid layouts, dynamic micro-animations, and typography scales matching professional CRM design aesthetics.
- **Frontend Implementation**: Rapidly generated Vite + React + TypeScript component structures (`SignUp`, `Dashboard`, `LogCallModal`, `TrialModal`, `LandingPage`), router configuration, and state management hooks.

### 3. Describe one AI suggestion that you changed, rejected, or improved, and why.
- **AI Suggestion**: The AI initially suggested a loose regular expression for email validation (`/^\S+@\S+\.\S+$/`), which allowed edge cases like `user@domain` without TLD checking or whitespace sanitization.
- **Change & Improvement**: I rejected the simple regex and built a strict, multi-step email validation module in `src/utils/validation.ts`. The revised logic requires a valid top-level domain after `@`, handles whitespace trimming, displays distinct error messages ("Please enter your email address" vs "Please enter a valid email address"), and dynamically toggles the red border (`.has-error`) UI state.

### 4. What did you personally verify instead of trusting the AI output?
- **Build & Type Safety**: Personally ran `npm run build` and verified zero TypeScript errors, broken imports, or missing symbol references.
- **Interactive Workflows**: Manually verified user flows including sign-up form validation, free trial modal triggers, call logging state updates, phone number 1-click copying, and billing period price calculations.
- **Responsive Layouts**: Tested visual layouts across desktop (1440px, 1280px), tablet (768px), and mobile (390px, 360px) breakpoints in browser developer tools to ensure zero layout overflow or clipped content.

