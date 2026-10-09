import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand-col">
          <div className="footer-logo">
            <div className="logo-icon-bg">
              <Zap size={18} />
            </div>
            <span className="brand-name">LeadZam</span>
          </div>
          <p className="footer-desc">
            The high-converting outbound & telecalling CRM designed for sales reps, agents, and scaling enterprises.
          </p>
          <div className="footer-socials">
            <a href="#twitter" aria-label="Twitter" className="social-icon">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="social-icon">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
            <a href="#github" aria-label="GitHub" className="social-icon">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
            </a>
          </div>
          <p className="copyright-text">
            © 2025 LeadZam Technologies Inc. All rights reserved.
          </p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#features">Auto-Dialer Queue</a>
            <a href="#features">Lead Stage Tracking</a>
            <a href="#features">WhatsApp Automation</a>
            <a href="#features">CTI Softphone</a>
            <a href="#features">Call Recording & AI</a>
          </div>

          <div className="footer-col">
            <h4>Solutions</h4>
            <a href="#solutions">Real Estate Telecalling</a>
            <a href="#solutions">Banking & Loans</a>
            <a href="#solutions">Insurance Agencies</a>
            <a href="#solutions">High-Growth Sales</a>
            <a href="#solutions">Outbound Campaigns</a>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <a href="#about">About LeadZam</a>
            <a href="#team">Our Team & Story</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Support & Contact</a>
          </div>

          <div className="footer-col">
            <h4>Legal & Trust</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <a href="#status">System Status</a>
            <a href="#security">SOC-2 Type II</a>
            <a href="#gdpr">GDPR Compliance</a>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: #0b1329;
          color: #94a3b8;
          padding: 64px 24px 32px;
          border-top: 1px solid #1e293b;
        }
        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 64px;
        }
        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .logo-icon-bg {
          width: 32px;
          height: 32px;
          background: #2563eb;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .brand-name {
          font-weight: 700;
          font-size: 20px;
          color: #ffffff;
        }
        .footer-desc {
          font-size: 13px;
          line-height: 1.6;
          color: #64748b;
        }
        .footer-socials {
          display: flex;
          gap: 10px;
        }
        .social-icon {
          width: 32px;
          height: 32px;
          background: #1e293b;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          transition: all 0.2s ease;
        }
        .social-icon:hover {
          background: #2563eb;
          color: white;
        }
        .copyright-text {
          font-size: 12px;
          color: #475569;
          margin-top: 12px;
        }
        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-col h4 {
          color: #f8fafc;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .footer-col a {
          color: #94a3b8;
          font-size: 13px;
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .footer-col a:hover {
          color: #38bdf8;
        }
        @media (max-width: 1024px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 640px) {
          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }
      `}</style>
    </footer>
  );
};
