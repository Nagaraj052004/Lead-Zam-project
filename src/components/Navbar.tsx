import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenFreeTrial?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenFreeTrial }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo">
          <div className="logo-icon-bg">
            <Zap className="logo-icon" size={18} />
          </div>
          <span className="brand-name">LeadZam</span>
          <span className="crm-badge">CRM</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          <a href="#features">Features</a>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <Link to="/login" className="login-link">
            Log in
          </Link>
          <button 
            onClick={onOpenFreeTrial ? onOpenFreeTrial : () => navigate('/signup')} 
            className="btn-primary trial-btn"
          >
            <span>Get Free Trial</span>
            <ArrowUpRight size={16} />
          </button>
          
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav">
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#resources" onClick={() => setMobileMenuOpen(false)}>Resources</a>
            <div className="mobile-divider"></div>
            <Link to="/login" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Log in</Link>
            <button 
              className="btn-primary" 
              style={{ width: '100%', marginTop: '8px' }}
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenFreeTrial) onOpenFreeTrial();
                else navigate('/signup');
              }}
            >
              Get Free Trial
            </button>
          </nav>
        </div>
      )}

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #e2e8f0;
          padding: 12px 24px;
        }
        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
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
          font-size: 18px;
          color: #0f172a;
        }
        .crm-badge {
          background: #eff6ff;
          color: #2563eb;
          font-weight: 600;
          font-size: 11px;
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid #bfdbfe;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .desktop-nav a {
          color: #475569;
          font-weight: 500;
          font-size: 14px;
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .desktop-nav a:hover {
          color: #2563eb;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .login-link {
          color: #334155;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
        }
        .login-link:hover {
          color: #2563eb;
        }
        .trial-btn {
          font-size: 13px;
          padding: 8px 16px;
          border-radius: 8px;
        }
        .mobile-toggle {
          display: none;
          color: #334155;
          padding: 4px;
        }
        .mobile-drawer {
          background: white;
          border-bottom: 1px solid #e2e8f0;
          padding: 16px 24px 24px;
        }
        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .mobile-nav a {
          color: #334155;
          font-weight: 500;
          font-size: 15px;
          text-decoration: none;
          padding: 6px 0;
        }
        .mobile-divider {
          height: 1px;
          background: #e2e8f0;
          margin: 8px 0;
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .login-link { display: none; }
          .mobile-toggle { display: block; }
        }
      `}</style>
    </header>
  );
};
