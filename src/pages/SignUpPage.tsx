import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, User, Mail, Building, Lock, Eye, EyeOff, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { validateEmailFormat } from '../utils/validation';

export const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('John Doe');
  const [workEmail, setWorkEmail] = useState('name@company.com'); // Match exact image example state or blank
  const [companyName, setCompanyName] = useState('Acme Corp');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const [emailError, setEmailError] = useState('Please enter a valid email address.'); // Image 1 shows this exact red error
  const [nameError, setNameError] = useState('');
  const [companyError, setCompanyError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [termsError, setTermsError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successState, setSuccessState] = useState(false);

  const handleEmailChange = (val: string) => {
    setWorkEmail(val);
    const { isValid, error } = validateEmailFormat(val);
    if (!isValid) {
      setEmailError(error);
    } else {
      setEmailError('');
    }
  };

  const getPasswordStrength = () => {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password) || /[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (password.length >= 12) score++;
    return Math.max(score, 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Email format validation
    const { isValid: isEmailValid, error: eErr } = validateEmailFormat(workEmail);
    if (!isEmailValid) {
      setEmailError(eErr);
    } else {
      setEmailError('');
    }

    // 2. Required fields
    let hasError = !isEmailValid;

    if (!fullName.trim()) {
      setNameError('Please enter your full name.');
      hasError = true;
    } else {
      setNameError('');
    }

    if (!companyName.trim()) {
      setCompanyError('Please enter your company or team name.');
      hasError = true;
    } else {
      setCompanyError('');
    }

    if (!password || password.length < 8) {
      setPasswordError('Password must be at least 8 characters.');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (!agreeToTerms) {
      setTermsError('You must agree to the Terms of Service and Privacy Policy.');
      hasError = true;
    } else {
      setTermsError('');
    }

    if (hasError) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessState(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    }, 1000);
  };

  const strength = getPasswordStrength();

  return (
    <div className="auth-page-container">
      {/* Top Header Navigation */}
      <header className="auth-header">
        <Link to="/" className="auth-brand">
          <div className="brand-icon">
            <Zap size={18} />
          </div>
          <span className="brand-title">LeadZam</span>
        </Link>
        <div className="auth-header-links">
          <Link to="/" className="header-link">← Back to website</Link>
          <a href="#support" className="header-link">Support</a>
        </div>
      </header>

      {/* Main Auth Card Container */}
      <main className="auth-content">
        <div className="auth-card">
          {/* Card Brand Header */}
          <div className="card-top-logo">
            <div className="brand-icon lg-icon">
              <Zap size={22} />
            </div>
            <span className="card-brand-name">LeadZam</span>
            <span className="crm-pill">CRM</span>
          </div>

          <h1 className="auth-title">Create your account</h1>
          <div className="trial-badge-row">
            <span>Start your 14-day free trial.</span>
            <span className="no-credit-badge">No credit card required</span>
          </div>

          {/* Google Workspace Button */}
          <button className="google-btn" onClick={() => alert('Google Workspace OAuth demo trigger')}>
            <svg className="google-icon" width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>Sign up with Google Workspace</span>
          </button>

          {/* Divider */}
          <div className="auth-divider">
            <span>OR SIGN UP WITH EMAIL</span>
          </div>

          {successState ? (
            <div className="signup-success">
              <CheckCircle2 size={48} color="#16a34a" />
              <h2>Account Created Successfully!</h2>
              <p>Welcome to LeadZam CRM. Redirecting to your workspace...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="auth-form">
              {/* Full Name */}
              <div className="input-group">
                <label className="input-label">
                  <span>Full name <span className="required">*</span></span>
                </label>
                <div className="input-wrapper">
                  <User size={16} className="input-icon" />
                  <input
                    type="text"
                    className={`input-field ${nameError ? 'has-error' : ''}`}
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                {nameError && (
                  <div className="error-message">
                    <AlertCircle size={14} />
                    <span>{nameError}</span>
                  </div>
                )}
              </div>

              {/* Work Email */}
              <div className="input-group">
                <div className="input-label">
                  <span>Work email <span className="required">*</span></span>
                  <span className="label-subtext">Instant team invite ready</span>
                </div>
                <div className="input-wrapper">
                  <Mail size={16} className="input-icon" />
                  <input
                    type="email"
                    className={`input-field ${emailError ? 'has-error' : ''}`}
                    placeholder="name@company.com"
                    value={workEmail}
                    onChange={(e) => handleEmailChange(e.target.value)}
                  />
                </div>
                {emailError && (
                  <div className="error-message">
                    <AlertCircle size={14} />
                    <span>{emailError}</span>
                  </div>
                )}
              </div>

              {/* Company / Team Name */}
              <div className="input-group">
                <label className="input-label">
                  <span>Company / Team name <span className="required">*</span></span>
                </label>
                <div className="input-wrapper">
                  <Building size={16} className="input-icon" />
                  <input
                    type="text"
                    className={`input-field ${companyError ? 'has-error' : ''}`}
                    placeholder="Acme Corp"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                {companyError && (
                  <div className="error-message">
                    <AlertCircle size={14} />
                    <span>{companyError}</span>
                  </div>
                )}
              </div>

              {/* Password */}
              <div className="input-group">
                <label className="input-label">
                  <span>Password <span className="required">*</span></span>
                </label>
                <div className="input-wrapper">
                  <Lock size={16} className="input-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className={`input-field ${passwordError ? 'has-error' : ''}`}
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                {/* Password strength indicators matching Screen 1 */}
                <div className="strength-bar-row">
                  <div className={`strength-segment ${strength >= 1 ? 'active-weak' : ''}`}></div>
                  <div className={`strength-segment ${strength >= 2 ? 'active-medium' : ''}`}></div>
                  <div className={`strength-segment ${strength >= 3 ? 'active-strong' : ''}`}></div>
                  <div className={`strength-segment ${strength >= 4 ? 'active-super' : ''}`}></div>
                </div>
                <div className="strength-hint">
                  At least 8 characters with letters & numbers
                </div>
                {passwordError && (
                  <div className="error-message">
                    <AlertCircle size={14} />
                    <span>{passwordError}</span>
                  </div>
                )}
              </div>

              {/* Terms Checkbox */}
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                  />
                  <span>
                    I agree to LeadZam's <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>, and consent to service emails.
                  </span>
                </label>
                {termsError && (
                  <div className="error-message">
                    <AlertCircle size={14} />
                    <span>{termsError}</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-primary submit-auth-btn"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Creating Account...' : 'Create Account'}</span>
                <ArrowRight size={18} />
              </button>

              {/* Sign In Navigation Link */}
              <div className="auth-footer-link">
                Already have an account? <Link to="/login" className="signin-nav-link">Sign in →</Link>
              </div>
            </form>
          )}
        </div>

        {/* Security Badges Row Below Card */}
        <div className="security-badges-container">
          <div className="badges-inline">
            <span>🔒 256-bit SSL encrypted</span>
            <span className="dot">•</span>
            <span>🛡️ SOC-2 Type II Certified</span>
            <span className="dot">•</span>
            <span>☁️ GDPR Compliant</span>
          </div>

          <div className="sla-status-pill">
            <span className="status-dot-green"></span>
            <span>All systems operational • 99.99% Cloud SLA</span>
          </div>
        </div>
      </main>

      {/* Outer Page Footer */}
      <footer className="auth-outer-footer">
        <div>© 2025 LeadZam Technologies Inc. All rights reserved.</div>
        <div className="footer-links-row">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#status">System Status</a>
        </div>
      </footer>

      <style>{`
        .auth-page-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f4ff 0%, #f8fafc 50%, #eff6ff 100%);
          display: flex;
          flex-direction: column;
          font-family: 'Inter', sans-serif;
        }
        .auth-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
        }
        .auth-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .brand-icon {
          width: 32px;
          height: 32px;
          background: #2563eb;
          color: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .brand-icon.lg-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
        }
        .brand-title {
          font-weight: 700;
          font-size: 18px;
          color: #0f172a;
        }
        .auth-header-links {
          display: flex;
          gap: 20px;
        }
        .header-link {
          color: #64748b;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
        }
        .header-link:hover {
          color: #2563eb;
        }
        .auth-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px 16px;
        }
        .auth-card {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.08);
          width: 100%;
          max-width: 480px;
          padding: 36px 36px 32px;
          border: 1px solid #e2e8f0;
          text-align: center;
        }
        .card-top-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 16px;
        }
        .card-brand-name {
          font-weight: 700;
          font-size: 20px;
          color: #0f172a;
        }
        .crm-pill {
          background: #eff6ff;
          color: #2563eb;
          font-size: 11px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid #bfdbfe;
        }
        .auth-title {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
        }
        .trial-badge-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 13px;
          color: #64748b;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .no-credit-badge {
          background: #e6f7f0;
          color: #0d8a57;
          font-size: 12px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 4px;
        }
        .google-btn {
          width: 100%;
          background: #f0f4f9;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 11px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #334155;
          transition: background 0.15s ease;
        }
        .google-btn:hover {
          background: #e2e8f0;
        }
        .auth-divider {
          display: flex;
          align-items: center;
          margin: 20px 0;
          color: #94a3b8;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .auth-divider::before, .auth-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e2e8f0;
        }
        .auth-divider span {
          padding: 0 12px;
        }
        .auth-form {
          text-align: left;
        }
        .label-subtext {
          font-size: 11px;
          color: #64748b;
          font-weight: 400;
        }
        .password-toggle-btn {
          position: absolute;
          right: 12px;
          color: #94a3b8;
          display: flex;
          align-items: center;
          padding: 4px;
        }
        .strength-bar-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
          margin-top: 8px;
        }
        .strength-segment {
          height: 4px;
          background: #e2e8f0;
          border-radius: 2px;
          transition: background 0.2s ease;
        }
        .active-weak { background: #ef4444; }
        .active-medium { background: #f59e0b; }
        .active-strong { background: #3b82f6; }
        .active-super { background: #10b981; }

        .strength-hint {
          font-size: 12px;
          color: #64748b;
          margin-top: 6px;
        }
        .checkbox-group {
          margin: 18px 0 20px;
        }
        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: #475569;
          line-height: 1.4;
          cursor: pointer;
        }
        .checkbox-label input {
          margin-top: 3px;
          accent-color: #2563eb;
        }
        .submit-auth-btn {
          width: 100%;
          padding: 13px;
          font-size: 15px;
          border-radius: 10px;
        }
        .auth-footer-link {
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
          color: #64748b;
        }
        .signin-nav-link {
          color: #2563eb;
          font-weight: 600;
          text-decoration: none;
        }
        .security-badges-container {
          margin-top: 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .badges-inline {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #475569;
          font-weight: 500;
          flex-wrap: wrap;
          justify-content: center;
        }
        .sla-status-pill {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 6px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #334155;
          font-weight: 500;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .status-dot-green {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
        }
        .auth-outer-footer {
          padding: 24px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: #64748b;
          border-top: 1px solid rgba(226, 232, 240, 0.6);
        }
        .footer-links-row {
          display: flex;
          gap: 20px;
        }
        .footer-links-row a {
          color: #64748b;
          text-decoration: none;
        }
        .signup-success {
          padding: 30px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        @media (max-width: 640px) {
          .auth-header { padding: 16px 20px; }
          .auth-card { padding: 24px 20px; }
          .auth-outer-footer {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};
