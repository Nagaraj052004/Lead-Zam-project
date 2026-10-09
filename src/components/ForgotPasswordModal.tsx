import React, { useState } from 'react';
import { X, Mail, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { validateEmailFormat } from '../utils/validation';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { isValid, error } = validateEmailFormat(email);
    if (!isValid) {
      setEmailError(error);
      return;
    }
    setEmailError('');
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content forgot-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <h2 className="modal-title">Reset your password</h2>
        <p className="modal-subtitle">
          Enter the work email address associated with your LeadZam account and we will send you a reset link.
        </p>

        {submitted ? (
          <div className="reset-success-box">
            <CheckCircle2 size={44} color="#16a34a" />
            <h3>Password Reset Email Sent</h3>
            <p>We've sent a recovery link to <strong>{email.trim()}</strong>. Please check your inbox.</p>
            <button className="btn-secondary" style={{ marginTop: '16px' }} onClick={onClose}>
              Back to Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="input-group">
              <label className="input-label">Work email address <span className="required">*</span></label>
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  className={`input-field ${emailError ? 'has-error' : ''}`}
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) {
                      const { isValid, error } = validateEmailFormat(e.target.value);
                      if (isValid) setEmailError('');
                      else setEmailError(error);
                    }
                  }}
                />
              </div>
              {emailError && (
                <div className="error-message">
                  <AlertCircle size={14} />
                  <span>{emailError}</span>
                </div>
              )}
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '12px', padding: '12px' }}>
              <span>Send Reset Link</span>
              <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>

      <style>{`
        .forgot-card {
          padding: 32px;
          max-width: 440px;
        }
        .reset-success-box {
          text-align: center;
          padding: 24px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
      `}</style>
    </div>
  );
};
