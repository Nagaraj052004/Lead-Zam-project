# LeadZam CRM - Google Stitch UI Implementation

A responsive React + TypeScript + Vite web application reproducing Google Stitch UI screens for **LeadZam CRM**.

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
