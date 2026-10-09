import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Play,
  ArrowRight,
  PhoneCall,
  Layers,
  Clock,
  BarChart2,
  Smartphone,
  ChevronDown,
  ChevronUp,
  Check
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FreeTrialModal } from '../components/FreeTrialModal';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const [freeTrialOpen, setFreeTrialOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the 14-day free trial work?",
      a: "You get full, unrestricted access to all LeadZam features for 14 days with zero credit card required. Invite your team, import leads, and start auto-dialing right away."
    },
    {
      q: "Can I import my existing leads from CSV or Excel?",
      a: "Yes! You can import leads via 1-click CSV upload or connect directly with Google Sheets, Meta Ads, WordPress, or Zapier for automatic real-time lead sync."
    },
    {
      q: "Does LeadZam support WhatsApp Business API?",
      a: "Yes, LeadZam integrates natively with WhatsApp Business API allowing you to send automated brochure PDFs, follow-up messages, and interactive templates directly from the CRM."
    },
    {
      q: "Can I use my existing telecalling phone numbers?",
      a: "Absolutely. LeadZam connects with major cloud telephony providers (Exotel, MCube, Knowlarity, Twilio) so you can keep your existing caller IDs."
    },
    {
      q: "Are there any hidden setup fees or long-term contracts?",
      a: "No hidden fees whatsoever. All plans are pay-as-you-go with transparent pricing. You can upgrade, downgrade, or cancel anytime."
    }
  ];

  return (
    <div className="landing-container">
      {/* Navbar */}
      <Navbar onOpenFreeTrial={() => setFreeTrialOpen(true)} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="section-container hero-grid">
          <div className="hero-content">
            <div className="hero-pill-badge">
              <span className="pill-dot"></span>
              <span>LEAD-CONVERTING OUTBOUND CRM PLATFORM</span>
            </div>

            <h1 className="hero-headline">
              Turn Every Lead Into a <span className="highlight-blue">Sales Opportunity</span>
            </h1>

            <p className="hero-subline">
              LeadZam is the ultimate outbound & inbound telecalling CRM for real estate, finance, insurance, and high-growth sales teams. Auto-dial faster, track follow-ups, and close more deals.
            </p>

            {/* Metrics Row */}
            <div className="hero-metrics-row">
              <div className="metric-item">
                <span className="metric-val">10,000+</span>
                <span className="metric-lbl">Active reps</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <span className="metric-val">4.9/5</span>
                <span className="metric-lbl">Rating (500+ reviews)</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <span className="metric-val">45%</span>
                <span className="metric-lbl">Avg. conversion boost</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="hero-cta-group">
              <button className="btn-primary hero-main-btn" onClick={() => setFreeTrialOpen(true)}>
                <span>Start 14-Day Free Trial</span>
                <ArrowRight size={18} />
              </button>

              <button className="btn-secondary hero-demo-btn" onClick={() => navigate('/dashboard')}>
                <Play size={16} fill="#2563eb" color="#2563eb" />
                <span>Watch 2-min demo</span>
              </button>
            </div>

            {/* Trust integrations logos */}
            <div className="trust-logos-box">
              <span className="trust-label">Natively integrated with:</span>
              <div className="logos-inline">
                <span className="logo-chip">Meta Ads</span>
                <span className="logo-chip">Google Search</span>
                <span className="logo-chip">WhatsApp</span>
                <span className="logo-chip">Zapier</span>
                <span className="logo-chip">Webhooks</span>
              </div>
            </div>
          </div>

          {/* Hero Right Interactive Mockup with real image */}
          <div className="hero-mockup-wrapper">
            <div className="mockup-glass-card">
              <div className="mockup-top-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="window-title font-semibold">LeadZam Outbound CRM Workspace</span>
              </div>
              <img
                src="/Images/Hero section image.png"
                alt="LeadZam Outbound CRM Platform Workspace"
                className="hero-img-display"
                onClick={() => navigate('/dashboard')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="features-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-kicker">KEY FEATURES</span>
            <h2>Everything you need to turn leads into customers</h2>
            <p>A clean, easy-to-use telecalling and lead management system designed for scale.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-box">
                <PhoneCall size={22} color="#2563eb" />
              </div>
              <h3>Auto-dialer & queue</h3>
              <p>Smart daily call queues, auto-dialing, and zero wait time between calls to maximize agent talk time.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <Layers size={22} color="#2563eb" />
              </div>
              <h3>Stage management</h3>
              <p>Track lead stages from discovery call to site visit, negotiation, payment, and deal closing.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <Clock size={22} color="#2563eb" />
              </div>
              <h3>Follow-ups</h3>
              <p>Never miss a follow-up with instant overdue alerts, SMS/WhatsApp triggers, and calendar sync.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <BarChart2 size={22} color="#2563eb" />
              </div>
              <h3>Team Analytics</h3>
              <p>Real-time team leaderboard, call duration metrics, daily target progress, and conversion reports.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <Smartphone size={22} color="#2563eb" />
              </div>
              <h3>Empower Remote Teams</h3>
              <p>Work from anywhere with desktop and mobile softphone integration and cloud CTI connectivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="integrations-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-kicker">INTEGRATIONS</span>
            <h2>Bring all your leads into one place</h2>
            <p>Instantly connect with all marketing platforms and ads channels. No manual CSV uploads needed.</p>
          </div>

          <div className="integrations-grid">
            <div className="integ-badge">
              <img src="/icons/selfhst_meta.png" alt="Meta Ads" className="integ-img-icon" />
              <span>Meta Ads</span>
              <span className="integ-sub">Instant lead sync</span>
            </div>
            <div className="integ-badge">
              <img src="/icons/logos_google-ads.png" alt="Google Search" className="integ-img-icon" />
              <span>Google Search</span>
              <span className="integ-sub">Form captures</span>
            </div>
            <div className="integ-badge">
              <img src="/icons/dashicons_admin-site-alt3.png" alt="WordPress" className="integ-img-icon" />
              <span>WordPress</span>
              <span className="integ-sub">Webform webhook</span>
            </div>
            <div className="integ-badge">
              <img src="/icons/clarity_form-line.png" alt="Google Sheets" className="integ-img-icon" />
              <span>Google Sheets</span>
              <span className="integ-sub">Two-way sync</span>
            </div>
            <div className="integ-badge">
              <span className="integ-icon">⚡</span>
              <span>Zapier</span>
              <span className="integ-sub">Auto triggers</span>
            </div>
            <div className="integ-badge">
              <span className="integ-icon">🔗</span>
              <span>Custom Webhook</span>
              <span className="integ-sub">REST API payload</span>
            </div>
            <div className="integ-badge">
              <span className="integ-icon">🇮🇳</span>
              <span>IndiaMART</span>
              <span className="integ-sub">Inbound leads</span>
            </div>
            <div className="integ-badge">
              <img src="/icons/logos_whatsapp-icon.png" alt="WhatsApp API" className="integ-img-icon" />
              <span>WhatsApp API</span>
              <span className="integ-sub">Chat & Brochures</span>
            </div>
          </div>

          <div className="view-more-link">
            <a href="#integrations">View all 40+ integrations →</a>
          </div>
        </div>
      </section>

      {/* Solutions / Offerings Grid */}
      <section id="solutions" className="solutions-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-kicker">WHAT WE OFFER</span>
            <h2>What does LeadZam offer?</h2>
            <p>Purpose-built features designed for high-performance sales and outbound telecalling teams.</p>
          </div>

          <div className="solutions-cards-grid">
            <div className="solution-card">
              <div className="solution-thumb-bg">
                <img src="/Images/Bright CRM pipeline view on large monitor, clean white office, kanban board with colorful cards.png" alt="Real-time Lead Distribution" className="solution-img" />
              </div>
              <div className="solution-card-body">
                <span className="sol-tag">LEAD DISTRIBUTION</span>
                <h4>Real-time Lead Distribution</h4>
                <p>Auto-assign incoming leads to available agents instantly based on rules and agent availability.</p>
                <a href="#read" className="sol-link">Read more →</a>
              </div>
            </div>

            <div className="solution-card">
              <div className="solution-thumb-bg">
                <img src="/Images/Bright smartphone screen showing messaging interface on white table, clean minimal setup, daylight.png" alt="Omnichannel Communication" className="solution-img" />
              </div>
              <div className="solution-card-body">
                <span className="sol-tag">COMMUNICATION</span>
                <h4>Omnichannel Communication</h4>
                <p>Connect via WhatsApp, SMS, and Voice Calls directly from the CRM panel with zero tab switching.</p>
                <a href="#read" className="sol-link">Read more →</a>
              </div>
            </div>

            <div className="solution-card">
              <div className="solution-thumb-bg">
                <img src="/Images/Person on phone call at bright white desk with laptop showing call recording interface, natural light.png" alt="Automated Follow-up Reminders" className="solution-img" />
              </div>
              <div className="solution-card-body">
                <span className="sol-tag">AUTOMATION</span>
                <h4>Automated Follow-up Reminders</h4>
                <p>Smart notifications and automated calendar triggers ensure no lead is forgotten or left stale.</p>
                <a href="#read" className="sol-link">Read more →</a>
              </div>
            </div>

            <div className="solution-card">
              <div className="solution-thumb-bg">
                <img src="/Images/Clean analytics dashboard on bright white background showing bar charts and conversion metrics.png" alt="Smart Call Recording & AI Transcripts" className="solution-img" />
              </div>
              <div className="solution-card-body">
                <span className="sol-tag">AI TRANSCRIPTS</span>
                <h4>Smart Call Recording & AI Transcripts</h4>
                <p>Review agent calls and get automated summaries for quality assurance and training.</p>
                <a href="#read" className="sol-link">Read more →</a>
              </div>
            </div>

            <div className="solution-card">
              <div className="solution-thumb-bg">
                <img src="/Images/Bright workspace with multiple screens showing lead analytics dashboards, white desk, natural light.png" alt="WhatsApp API Automation" className="solution-img" />
              </div>
              <div className="solution-card-body">
                <span className="sol-tag">WHATSAPP API</span>
                <h4>WhatsApp API Automation</h4>
                <p>Send automated greetings, brochure PDFs, and follow-up templates automatically after calls.</p>
                <a href="#read" className="sol-link">Read more →</a>
              </div>
            </div>

            <div className="solution-card">
              <div className="solution-thumb-bg">
                <img src="/Images/Bright office with large monitor showing colorful campaign performance charts, open plan, daylight.png" alt="Click-to-Call Softphone Integration" className="solution-img" />
              </div>
              <div className="solution-card-body">
                <span className="sol-tag">CTI SOFTPHONE</span>
                <h4>Click-to-Call Softphone Integration</h4>
                <p>Dial leads with one click using integrated cloud telephony systems without manual typing.</p>
                <a href="#read" className="sol-link">Read more →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder / Testimonial Profile Section */}
      <section className="founder-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-kicker">THE TEAM BEHIND LEADZAM</span>
            <h2>Who's behind LeadZam</h2>
          </div>

          <div className="founder-card-box">
            <div className="founder-avatar-wrap">
              <img
                src="/Images/Himanshu Mishra - Founder Leadzam Private Limited.png"
                alt="Himanshu Mishra - Founder Leadzam"
                className="founder-img-circle"
              />
            </div>

            <div className="founder-info font-sans">
              <h3 className="founder-name">Himanshu Mishra</h3>
              <p className="founder-role">Founder & CEO, LeadZam</p>

              <blockquote className="founder-quote">
                "We built LeadZam because existing CRMs were overly complex and failed sales agents who needed fast, clean daily dialers. Our focus is 100% on execution, speed, and driving real revenue for sales teams."
              </blockquote>

              <a href="#story" className="founder-story-link">See our story & team →</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="resources" className="faq-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-kicker">FAQS</span>
            <h2>Frequently asked questions</h2>
            <p>Everything you need to know about the product, trial, and pricing.</p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-question-btn"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} color="#2563eb" /> : <ChevronDown size={18} color="#64748b" />}
                  </button>
                  {isOpen && (
                    <div className="faq-answer-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-kicker">PRICING</span>
            <h2>Simple, transparent pricing for growing teams</h2>
            <p>Choose the plan that fits your business. Scale up or down anytime.</p>

            {/* Toggle */}
            <div className="pricing-toggle-wrap">
              <span className={billingCycle === 'monthly' ? 'active-label' : ''}>Monthly</span>
              <button
                className={`toggle-switch ${billingCycle === 'yearly' ? 'yearly-on' : ''}`}
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              >
                <span className="switch-handle"></span>
              </button>
              <span className={billingCycle === 'yearly' ? 'active-label' : ''}>
                Yearly <span className="save-badge">Save 20%</span>
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="pricing-cards-grid">
            {/* Starter Plan */}
            <div className="price-card">
              <span className="plan-name">Starter</span>
              <div className="price-tag">
                <span className="currency">$</span>
                <span className="amount">0</span>
                <span className="period">/ free forever</span>
              </div>
              <button className="btn-secondary plan-btn" onClick={() => setFreeTrialOpen(true)}>
                Start Free Plan
              </button>
              <ul className="plan-features">
                <li><Check size={16} color="#16a34a" /> 1 Agent License</li>
                <li><Check size={16} color="#16a34a" /> 100 Leads / month</li>
                <li><Check size={16} color="#16a34a" /> Manual follow-ups</li>
                <li><Check size={16} color="#16a34a" /> Basic reporting</li>
                <li><Check size={16} color="#16a34a" /> Email support</li>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="price-card">
              <span className="plan-name">Pro</span>
              <div className="price-tag">
                <span className="currency">$</span>
                <span className="amount">{billingCycle === 'yearly' ? '24' : '29'}</span>
                <span className="period">/ agent / month</span>
              </div>
              <button className="btn-primary plan-btn" onClick={() => setFreeTrialOpen(true)}>
                Claim Pro Trial
              </button>
              <ul className="plan-features">
                <li><Check size={16} color="#16a34a" /> Unlimited Leads</li>
                <li><Check size={16} color="#16a34a" /> Auto-dialer Queue</li>
                <li><Check size={16} color="#16a34a" /> WhatsApp API Integration</li>
                <li><Check size={16} color="#16a34a" /> Overdue Call Reminders</li>
                <li><Check size={16} color="#16a34a" /> Team Analytics & Leaderboard</li>
                <li><Check size={16} color="#16a34a" /> Priority 24/7 support</li>
              </ul>
            </div>

            {/* Enterprise Plan (Featured Dark Card matching Screen 5) */}
            <div className="price-card featured-dark-card">
              <div className="featured-badge">MOST POPULAR</div>
              <span className="plan-name">Enterprise</span>
              <div className="price-tag">
                <span className="currency">$</span>
                <span className="amount">{billingCycle === 'yearly' ? '64' : '79'}</span>
                <span className="period">/ agent / month</span>
              </div>
              <button className="btn-primary plan-btn dark-btn" onClick={() => setFreeTrialOpen(true)}>
                Get Enterprise Trial
              </button>
              <ul className="plan-features light-features">
                <li><Check size={16} color="#38bdf8" /> Everything in Pro</li>
                <li><Check size={16} color="#38bdf8" /> Dedicated Account Manager</li>
                <li><Check size={16} color="#38bdf8" /> Custom Telephony CTI Integration</li>
                <li><Check size={16} color="#38bdf8" /> AI Call Recording & Transcripts</li>
                <li><Check size={16} color="#38bdf8" /> 99.99% SLA Guarantee</li>
                <li><Check size={16} color="#38bdf8" /> Dedicated Server & Security</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bottom-cta-section">
        <div className="section-container">
          <div className="cta-banner-box">
            <span className="cta-kicker">GET STARTED TODAY</span>
            <h2 className="cta-headline">
              Ready to Manage Leads and Optimize Campaigns from one CRM?
            </h2>
            <p className="cta-subtext">
              Join 10,000+ sales reps and telecallers who close deals faster every day with LeadZam.
            </p>

            <div className="cta-buttons-row">
              <button className="btn-primary cta-white-btn" onClick={() => setFreeTrialOpen(true)}>
                Start 14-Day Free Trial
              </button>
              <button className="btn-secondary cta-outline-btn" onClick={() => navigate('/dashboard')}>
                Schedule Demo
              </button>
            </div>

            <div className="cta-guarantees-row">
              <span>✓ 14-day free trial</span>
              <span>•</span>
              <span>✓ No credit card required</span>
              <span>•</span>
              <span>✓ Instant 2-min setup</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* 14-Day Free Trial Modal (Screen 4) */}
      <FreeTrialModal
        isOpen={freeTrialOpen}
        onClose={() => setFreeTrialOpen(false)}
        onSuccess={() => navigate('/dashboard')}
      />

      <style>{`
        .landing-container {
          background: #ffffff;
          overflow-x: hidden;
        }
        .section-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        /* Hero Section */
        .hero-section {
          background: radial-gradient(circle at 50% 0%, #eff6ff 0%, #ffffff 70%);
          padding-top: 40px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .hero-pill-badge {
          background: #eff6ff;
          color: #2563eb;
          border: 1px solid #bfdbfe;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
        }
        .pill-dot {
          width: 6px;
          height: 6px;
          background: #2563eb;
          border-radius: 50%;
        }
        .hero-headline {
          color: #0B1C30;
          font-family: 'Inter', sans-serif;
          font-size: 60px;
          font-style: normal;
          font-weight: 700;
          line-height: 64.8px;
          letter-spacing: -1.5px;
          margin-bottom: 18px;
        }
        .highlight-blue {
          color: #2563EB;
          font-family: 'Inter', sans-serif;
          font-size: 60px;
          font-style: normal;
          font-weight: 700;
          line-height: 64.8px;
          letter-spacing: -1.5px;
        }
        .hero-subline {
          font-size: 16px;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 28px;
        }
        .hero-metrics-row {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 32px;
        }
        .metric-item {
          display: flex;
          flex-direction: column;
        }
        .metric-val {
          font-size: 20px;
          font-weight: 800;
          color: #0f172a;
        }
        .metric-lbl {
          font-size: 12px;
          color: #64748b;
        }
        .metric-divider {
          width: 1px;
          height: 28px;
          background: #cbd5e1;
        }
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 32px;
        }
        .hero-main-btn {
          padding: 14px 24px;
          font-size: 15px;
          border-radius: 10px;
        }
        .hero-demo-btn {
          padding: 14px 20px;
          font-size: 15px;
          border-radius: 10px;
        }
        .trust-logos-box {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .trust-label {
          font-size: 12px;
          color: #94a3b8;
          font-weight: 600;
          letter-spacing: 0.3px;
        }
        .logos-inline {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .logo-chip {
          background: #f1f5f9;
          color: #475569;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
        }

        /* Mockup Card */
        .hero-mockup-wrapper {
          position: relative;
        }
        .mockup-glass-card {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
          border: 1px solid #cbd5e1;
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        .mockup-glass-card:hover {
          transform: translateY(-4px);
        }
        .hero-img-display {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          cursor: pointer;
        }
        .integ-img-icon {
          width: 36px;
          height: 36px;
          object-fit: contain;
        }
        .solution-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .solution-card:hover .solution-img {
          transform: scale(1.04);
        }
        img.founder-img-circle {
          width: 200px;
          height: 200px;
          border-radius: 100px;
          border: 4px solid #FFF;
          object-fit: cover;
          box-shadow: 0 0 0 3px #D4E4FF, 0 6px 16px 0 rgba(2, 23, 80, 0.07), 0 2px 6px 0 rgba(2, 23, 80, 0.05);
          flex-shrink: 0;
        }
        .mockup-top-bar {
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .window-dots {
          display: flex;
          gap: 6px;
        }
        .window-dots .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .window-dots .red { background: #ef4444; }
        .window-dots .yellow { background: #f59e0b; }
        .window-dots .green { background: #10b981; }
        .window-title {
          font-size: 12px;
          color: #64748b;
        }
        .mockup-body {
          padding: 24px;
          cursor: pointer;
        }
        .mockup-header-flex {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        .mockup-badge {
          background: #fef2f2;
          color: #dc2626;
          font-size: 11px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
          display: inline-block;
          margin-bottom: 8px;
        }
        .mockup-lead-title {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
        }
        .mockup-lead-sub {
          font-size: 12px;
          color: #64748b;
        }
        .mockup-call-now-btn {
          background: #2563eb;
          color: white;
          border-radius: 8px;
          padding: 8px 14px;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .mockup-stage-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #475569;
          margin-bottom: 16px;
        }
        .stage-pill {
          background: #eff6ff;
          color: #2563eb;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 4px;
        }
        .mockup-stats-mini {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          background: #f1f5f9;
          padding: 12px;
          border-radius: 8px;
          font-size: 11px;
          color: #475569;
          text-align: center;
          margin-bottom: 16px;
        }
        .m-stat span { display: block; margin-bottom: 2px; }
        .m-stat strong { font-size: 14px; color: #0f172a; }

        .mockup-click-hint {
          text-align: center;
          font-size: 12px;
          color: #2563eb;
          font-weight: 600;
        }

        /* Center Headers */
        .section-header-center {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 56px;
        }
        .section-kicker {
          font-size: 12px;
          font-weight: 800;
          color: #2563eb;
          letter-spacing: 1px;
          display: block;
          margin-bottom: 8px;
        }
        .section-header-center h2 {
          color: #0B1C30;
          font-family: 'Inter', sans-serif;
          font-size: 38px;
          font-style: normal;
          font-weight: 700;
          line-height: 44px;
          letter-spacing: -1px;
          margin-bottom: 12px;
        }
        .section-header-center p {
          font-size: 16px;
          color: #64748b;
        }

        /* Features Grid / Why LeadZam Section */
        .features-section {
          background: #ffffff;
        }
        .features-section .section-container {
          display: flex;
          max-width: 1280px;
          padding: 64px 32px;
          flex-direction: column;
          align-items: center;
          gap: 64px;
          align-self: stretch;
          margin: 0 auto;
        }
        .features-grid {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 24px;
          align-self: stretch;
          flex-wrap: wrap;
        }
        .feature-card {
          display: flex;
          padding: 24px;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          flex: 1 0 0;
          min-width: 220px;

          border-radius: 16px;
          border: 1px solid rgba(226, 232, 240, 0.80);
          background: #F8FAFC;
          transition: all 0.2s ease;
        }
        .feature-card:hover {
          background: #ffffff;
          border-color: #2563eb;
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.08);
          transform: translateY(-3px);
        }
        .feature-icon-box {
          width: 44px;
          height: 44px;
          background: #eff6ff;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .feature-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .feature-card p {
          font-size: 14px;
          color: #64748b;
          line-height: 1.5;
        }

        /* Integrations */
        .integrations-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }
        .integ-badge {
          display: flex;
          padding: 20px;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          justify-self: stretch;
          border-radius: 28px;
          border: 1px solid #E5E7EB;
          background: #FFF;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          transition: all 0.2s ease;
          font-weight: 600;
          font-size: 15px;
          color: #1F2937;
          text-align: center;
        }
        .integ-badge:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
          border-color: #2563EB;
        }
        .integ-icon {
          font-size: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          background: #F3F4F6;
          border-radius: 18px;
        }
        .integ-sub {
          font-size: 12px;
          color: #6B7280;
          font-weight: 400;
        }
        .view-more-link {
          text-align: center;
        }
        .view-more-link a {
          font-weight: 700;
          font-size: 14px;
        }

        /* Solutions Grid ("What does Lead Site offer?") */
        .solutions-section {
          background: #f8fafc;
        }
        .solutions-section .section-container {
          display: flex;
          max-width: 1280px;
          padding: 64px 24px;
          flex-direction: column;
          align-items: flex-start;
          gap: 56px;
          align-self: stretch;
          margin: 0 auto;
        }
        .solutions-section .section-header-center {
          text-align: left;
          margin: 0;
          max-width: 100%;
        }
        .solutions-cards-grid {
          display: grid;
          min-height: 892px;
          row-gap: 20px;
          column-gap: 20px;
          align-self: stretch;
          grid-template-rows: 425px 447px;
          grid-template-columns: repeat(6, minmax(0, 1fr));
        }
        .solution-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          grid-column: span 2;
          justify-self: stretch;

          border-radius: 28px;
          border: 1px solid #E5E7EB;
          background: #FFF;
          overflow: hidden;
          transition: all 0.2s ease;
          height: 100%;
        }
        .solution-card:hover {
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          transform: translateY(-4px);
          border-color: #2563EB;
        }
        .solution-thumb-bg {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .th-1 { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); }
        .th-2 { background: linear-gradient(135deg, #065f46 0%, #10b981 100%); }
        .th-3 { background: linear-gradient(135deg, #7c2d12 0%, #f97316 100%); }
        .th-4 { background: linear-gradient(135deg, #581c87 0%, #8b5cf6 100%); }
        .th-5 { background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%); }
        .th-6 { background: linear-gradient(135deg, #1e293b 0%, #475569 100%); }

        .thumb-icon-overlay {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .solution-card-body {
          padding: 20px;
        }
        .sol-tag {
          font-size: 10px;
          font-weight: 800;
          color: #2563eb;
          letter-spacing: 0.5px;
          display: block;
          margin-bottom: 6px;
        }
        .solution-card-body h4 {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .solution-card-body p {
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 16px;
        }
        .sol-link {
          font-size: 13px;
          font-weight: 600;
          color: #2563eb;
        }

        /* Founder Section ("Who's behind Leadzam") */
        .founder-section .section-container {
          display: flex;
          max-width: 1400px;
          width: 100%;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          margin: 0 auto;
          padding: 64px 24px;
        }
        .founder-card-box {
          min-height: 380px;
          align-self: stretch;

          border-radius: 20px;
          border: 1px solid rgba(2, 23, 80, 0.10);
          background: #FFF;
          box-shadow: 0 1px 2px 0 rgba(2, 23, 80, 0.05), 0 1px 1px 0 rgba(2, 23, 80, 0.04);
          padding: 48px;
          display: flex;
          align-items: center;
          gap: 40px;
          max-width: 1100px;
          margin: 0 auto;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .founder-card-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(2, 23, 80, 0.08);
        }
        .founder-img-circle {
          width: 200px;
          height: 200px;
          border-radius: 100px;
          border: 4px solid #FFF;
          background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
          box-shadow: 0 0 0 3px #D4E4FF, 0 6px 16px 0 rgba(2, 23, 80, 0.07), 0 2px 6px 0 rgba(2, 23, 80, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          font-weight: 800;
          color: #ffffff;
          flex-shrink: 0;
        }
        .founder-info {
          flex: 1;
        }
        .founder-name {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
        }
        .founder-role {
          font-size: 13px;
          color: #2563eb;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .founder-quote {
          font-size: 15px;
          color: #334155;
          font-style: italic;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .founder-story-link {
          font-size: 13px;
          font-weight: 700;
          color: #2563eb;
        }

        /* FAQ */
        .faq-section {
          background: #ffffff;
        }
        .faq-accordion-list {
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-item {
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.15s ease;
        }
        .faq-item.open {
          border-color: #bfdbfe;
        }
        .faq-question-btn {
          width: 100%;
          padding: 18px 24px;
          background: #ffffff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
          text-align: left;
        }
        .faq-answer-body {
          padding: 0 24px 20px;
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
        }

        /* Pricing Section */
        .pricing-section {
          background: #f8fafc;
        }
        .pricing-toggle-wrap {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          padding: 6px 16px;
          border-radius: 30px;
          margin-top: 20px;
          font-size: 14px;
          font-weight: 600;
          color: #64748b;
        }
        .active-label {
          color: #0f172a;
        }
        .toggle-switch {
          width: 44px;
          height: 24px;
          background: #cbd5e1;
          border-radius: 12px;
          position: relative;
          transition: background 0.2s ease;
          padding: 2px;
        }
        .toggle-switch.yearly-on {
          background: #2563eb;
        }
        .switch-handle {
          width: 20px;
          height: 20px;
          background: #ffffff;
          border-radius: 50%;
          display: block;
          transition: transform 0.2s ease;
        }
        .toggle-switch.yearly-on .switch-handle {
          transform: translateX(20px);
        }
        .save-badge {
          background: #dc2626;
          color: white;
          font-size: 11px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .pricing-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1080px;
          margin: 0 auto;
        }
        .price-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .featured-dark-card {
          background: #0f172a;
          color: #ffffff;
          border-color: #1e293b;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.3);
        }
        .featured-badge {
          position: absolute;
          top: -12px;
          right: 24px;
          background: #2563eb;
          color: white;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 20px;
          letter-spacing: 0.5px;
        }
        .plan-name {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .price-tag {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 20px;
        }
        .price-tag .currency { font-size: 24px; font-weight: 700; }
        .price-tag .amount { font-size: 44px; font-weight: 800; }
        .price-tag .period { font-size: 13px; color: #64748b; }
        .featured-dark-card .period { color: #94a3b8; }
        .plan-btn {
          width: 100%;
          padding: 12px;
          font-size: 14px;
          margin-bottom: 24px;
        }
        .dark-btn {
          background: #2563eb;
        }
        .plan-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 13px;
          color: #475569;
        }
        .plan-features li {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .light-features {
          color: #cbd5e1;
        }

        /* Bottom CTA */
        .bottom-cta-section {
          background: #ffffff;
        }
        .cta-banner-box {
          background: linear-gradient(135deg, #0b192c 0%, #1e293b 100%);
          border-radius: 24px;
          padding: 64px 32px;
          text-align: center;
          color: #ffffff;
          box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.4);
        }
        .cta-kicker {
          font-size: 12px;
          font-weight: 800;
          color: #38bdf8;
          letter-spacing: 1px;
          display: block;
          margin-bottom: 12px;
        }
        .cta-headline {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 14px;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }
        .cta-subtext {
          font-size: 16px;
          color: #94a3b8;
          margin-bottom: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .cta-buttons-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        .cta-white-btn {
          background: #ffffff;
          color: #0f172a;
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 700;
        }
        .cta-white-btn:hover {
          background: #f1f5f9;
        }
        .cta-outline-btn {
          border-color: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          padding: 14px 24px;
          font-size: 15px;
        }
        .cta-outline-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        .cta-guarantees-row {
          display: flex;
          justify-content: center;
          gap: 12px;
          font-size: 13px;
          color: #94a3b8;
        }

        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr; }
          .features-grid, .solutions-cards-grid, .pricing-cards-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .hero-headline { font-size: 32px; }
          .features-grid, .solutions-cards-grid, .pricing-cards-grid { grid-template-columns: 1fr; }
          .founder-card-box { flex-direction: column; text-align: center; }
          .cta-buttons-row { flex-direction: column; }
        }
      `}</style>
    </div>
  );
};
