import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { validateEmailFormat } from '../utils/validation';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [fullName, setFullName] = useState('Rahul Sharma');
  const [workEmail, setWorkEmail] = useState('rahul.sharma@gmail'); // Default as shown in Screen 4 to demo error state or user editing
  const [companyName, setCompanyName] = useState('Apex Media Solutions');
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('98765 43210');
  
  const [emailError, setEmailError] = useState('Please enter a valid work email.');
  const [successMsg, setSuccessMsg] = useState(false);

  if (!isOpen) return null;

  const handleEmailChange = (val: string) => {
    setWorkEmail(val);
    const { isValid, error } = validateEmailFormat(val);
    if (!isValid) {
      setEmailError(error === 'Please enter a valid email address.' ? 'Please enter a valid work email.' : error);
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { isValid, error } = validateEmailFormat(workEmail);
    if (!isValid) {
      setEmailError(error === 'Please enter a valid email address.' ? 'Please enter a valid work email.' : error);
      return;
    }

    if (!fullName.trim() || !companyName.trim()) {
      return;
    }

    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      onClose();
      if (onSuccess) onSuccess();
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content free-trial-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        {/* Top Trial Badge */}
        <div className="modal-header-badge-wrap">
          <span className="modal-blue-badge">
            <span className="badge-dot"></span> 14-DAY FREE TRIAL • NO CREDIT CARD REQUIRED
          </span>
        </div>

        <h2 className="modal-title">Start your 14-day free trial</h2>
        <p className="modal-subtitle">
          Get full access to LeadZam CRM for your marketing, sales, and telecalling team.
        </p>

        {successMsg ? (
          <div className="trial-success-box">
            <CheckCircle2 size={48} color="#16a34a" />
            <h3>Free Trial Activated!</h3>
            <p>Redirecting to your new LeadZam CRM workspace...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="trial-form" noValidate>
            {/* Full Name */}
            <div className="input-group">
              <label className="input-label">Full name</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  className="input-field modal-input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Rahul Sharma"
                  required
                />
                {fullName.trim() && (
                  <span className="input-right-icon check-icon">
                    <CheckCircle2 size={18} color="#2563eb" />
                  </span>
                )}
              </div>
            </div>

            {/* Work Email */}
            <div className="input-group">
              <div className="input-label">
                <span>Work email</span>
                {emailError && <span className="invalid-format-tag">Invalid format</span>}
              </div>
              <div className="input-wrapper">
                <input
                  type="email"
                  className={`input-field modal-input ${emailError ? 'has-error' : ''}`}
                  value={workEmail}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  placeholder="name@company.com"
                  required
                />
                {emailError && (
                  <span className="input-right-icon alert-icon">
                    <AlertCircle size={18} color="#dc2626" />
                  </span>
                )}
              </div>
              {emailError && (
                <div className="error-message">
                  <AlertCircle size={14} />
                  <span>{emailError}</span>
                </div>
              )}
            </div>

            {/* Company Name */}
            <div className="input-group">
              <label className="input-label">Company name</label>
              <input
                type="text"
                className="input-field modal-input"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Apex Media Solutions"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="input-group">
              <label className="input-label">Phone number</label>
              <div className="phone-input-row">
                <select 
                  className="country-select"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+971">🇦🇪 +971</option>
                </select>
                <input
                  type="tel"
                  className="input-field modal-input phone-field"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="98765 43210"
                />
              </div>
            </div>

            <p className="terms-disclaimer">
              By registering, you agree to LeadZam's <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>.
            </p>

            <button type="submit" className="btn-primary modal-submit-btn">
              <span>Create Free Account</span>
              <ArrowRight size={18} />
            </button>

            <div className="modal-sub-link">
              Already have an account? <a href="/login">Log in</a>
            </div>

            {/* Modal Bottom Pill */}
            <div className="modal-soc-pill">
              <ShieldCheck size={16} color="#2563eb" />
              <span>SOC2 compliant • Instant setup in under 2 minutes • Cancel anytime</span>
            </div>
          </form>
        )}
      </div>

      <style>{`
        .free-trial-card {
          padding: 36px 32px 28px;
          max-width: 500px;
          border-radius: 16px;
        }
        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          color: #64748b;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s ease;
        }
        .modal-close-btn:hover {
          background: #f1f5f9;
          color: #0f172a;
        }
        .modal-header-badge-wrap {
          margin-bottom: 12px;
        }
        .modal-blue-badge {
          background: #eff6ff;
          color: #2563eb;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          letter-spacing: 0.3px;
        }
        .badge-dot {
          width: 6px;
          height: 6px;
          background: #2563eb;
          border-radius: 50%;
        }
        .modal-title {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
        }
        .modal-subtitle {
          font-size: 13px;
          color: #64748b;
          margin-bottom: 24px;
          line-height: 1.5;
        }
        .modal-input {
          padding-left: 14px;
        }
        .invalid-format-tag {
          font-size: 11px;
          color: #dc2626;
          font-weight: 600;
        }
        .input-right-icon {
          position: absolute;
          right: 12px;
          display: flex;
          align-items: center;
        }
        .phone-input-row {
          display: flex;
          gap: 8px;
        }
        .country-select {
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 0 10px;
          font-size: 13px;
          font-weight: 500;
          outline: none;
        }
        .phone-field {
          flex: 1;
        }
        .terms-disclaimer {
          font-size: 12px;
          color: #64748b;
          margin: 16px 0 20px;
          text-align: left;
        }
        .modal-submit-btn {
          width: 100%;
          padding: 12px;
          font-size: 15px;
        }
        .modal-sub-link {
          text-align: center;
          margin-top: 16px;
          font-size: 13px;
          color: #64748b;
        }
        .modal-sub-link a {
          font-weight: 600;
          color: #2563eb;
        }
        .modal-soc-pill {
          margin-top: 24px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 12px;
          color: #475569;
        }
        .trial-success-box {
          text-align: center;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
      `}</style>
    </div>
  );
};
