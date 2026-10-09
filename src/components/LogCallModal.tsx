import React, { useState } from 'react';
import { X, Calendar, Clock, Save, AlertCircle } from 'lucide-react';
import type { Lead, CallLogData } from '../types';

interface LogCallModalProps {
  isOpen: boolean;
  lead?: Lead | null;
  onClose: () => void;
  onSave: (log: CallLogData) => void;
}

export const LogCallModal: React.FC<LogCallModalProps> = ({
  isOpen,
  lead,
  onClose,
  onSave,
}) => {
  const targetLeadName = lead ? lead.name : 'Rohit Sharma';
  const targetLeadPhone = lead ? lead.phone : '+91 98204 11820';
  const targetLeadSource = lead ? lead.source : 'Meta Ads';
  const targetLeadStage = lead ? lead.stage : 'Site visit scheduled';

  const [outcome, setOutcome] = useState<'Connected' | 'No answer' | 'Busy' | 'Wrong number' | ''>('');
  const [stage, setStage] = useState(targetLeadStage);
  const [notes, setNotes] = useState('');
  const [followUpPreset, setFollowUpPreset] = useState<'Tomorrow' | 'In 3 days' | 'Next week' | 'Pick a date'>('Tomorrow');
  const [followUpDate, setFollowUpDate] = useState('2023-10-19');
  const [followUpTime, setFollowUpTime] = useState('11:00');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!outcome) {
      setErrorMsg('Choose a call outcome to continue');
      return;
    }
    setErrorMsg('');
    onSave({
      outcome,
      stage,
      notes,
      followUpPreset,
      followUpDate,
      followUpTime,
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content log-call-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        {/* Header */}
        <div className="log-call-header">
          <h2 className="modal-title">Log call with {targetLeadName}</h2>
          <p className="modal-subtitle">
            {targetLeadPhone} • {targetLeadSource} (Phase 2 Luxury Apartments)
          </p>
        </div>

        <form onSubmit={handleSave} className="log-call-form">
          {/* Section 1: Call outcome */}
          <div className="form-section">
            <div className="section-label-row">
              <span className="section-label">Call outcome <span className="required">*</span></span>
              <span className="required-tag">Required</span>
            </div>

            <div className="outcome-grid">
              {(['Connected', 'No answer', 'Busy', 'Wrong number'] as const).map((item) => (
                <button
                  type="button"
                  key={item}
                  className={`outcome-btn ${outcome === item ? 'active' : ''}`}
                  onClick={() => {
                    setOutcome(item);
                    setErrorMsg('');
                  }}
                >
                  {item}
                </button>
              ))}
            </div>

            {errorMsg && (
              <div className="error-message outcome-error">
                <AlertCircle size={14} />
                <span>{errorMsg}</span>
              </div>
            )}
          </div>

          {/* Section 2: Update lead stage */}
          <div className="form-section">
            <label className="section-label">Update lead stage</label>
            <select
              className="stage-select"
              value={stage}
              onChange={(e) => setStage(e.target.value)}
            >
              <option value="Discovery call">Discovery call</option>
              <option value="Site visit scheduled">Site visit scheduled</option>
              <option value="Price quotation sent">Price quotation sent</option>
              <option value="Documentation pending">Documentation pending</option>
              <option value="Negotiation">Negotiation</option>
              <option value="Closed Won">Closed Won</option>
              <option value="Re-engagement">Re-engagement</option>
            </select>
          </div>

          {/* Section 3: Call notes */}
          <div className="form-section">
            <label className="section-label">Call notes</label>
            <textarea
              className="notes-textarea"
              placeholder="Summarize call discussion, objections, budget updates, or next steps..."
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>

          {/* Section 4: Next follow-up date & time */}
          <div className="form-section">
            <label className="section-label">Next follow-up date & time</label>
            <div className="preset-row">
              {(['Tomorrow', 'In 3 days', 'Next week', 'Pick a date'] as const).map((preset) => (
                <button
                  type="button"
                  key={preset}
                  className={`preset-btn ${followUpPreset === preset ? 'active' : ''}`}
                  onClick={() => setFollowUpPreset(preset)}
                >
                  {preset === 'Pick a date' ? <Calendar size={13} /> : null}
                  <span>{preset}</span>
                </button>
              ))}
            </div>

            <div className="datetime-row">
              <div className="datetime-field">
                <Calendar size={15} className="field-icon" />
                <input
                  type="date"
                  value={followUpDate}
                  onChange={(e) => setFollowUpDate(e.target.value)}
                  className="dt-input"
                />
              </div>
              <div className="datetime-field">
                <Clock size={15} className="field-icon" />
                <input
                  type="time"
                  value={followUpTime}
                  onChange={(e) => setFollowUpTime(e.target.value)}
                  className="dt-input"
                />
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary save-btn">
              <Save size={16} />
              <span>Save and schedule</span>
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .log-call-card {
          padding: 32px;
          max-width: 580px;
          border-radius: 14px;
        }
        .log-call-header {
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 16px;
          margin-bottom: 20px;
        }
        .log-call-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .section-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .section-label {
          font-size: 13px;
          font-weight: 600;
          color: #334155;
        }
        .required {
          color: #dc2626;
        }
        .required-tag {
          font-size: 11px;
          color: #dc2626;
          font-weight: 500;
        }
        .outcome-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }
        .outcome-btn {
          padding: 10px 4px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          color: #334155;
          background: #ffffff;
          transition: all 0.15s ease;
          text-align: center;
        }
        .outcome-btn:hover {
          border-color: #94a3b8;
          background: #f8fafc;
        }
        .outcome-btn.active {
          border-color: #dc2626;
          background: #fef2f2;
          color: #dc2626;
          font-weight: 600;
          box-shadow: 0 0 0 1px #dc2626;
        }
        .outcome-error {
          margin-top: 4px;
        }
        .stage-select {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 14px;
          color: #0f172a;
          background: #ffffff;
          outline: none;
        }
        .stage-select:focus {
          border-color: #2563eb;
        }
        .notes-textarea {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 13px;
          color: #0f172a;
          outline: none;
          resize: vertical;
        }
        .notes-textarea:focus {
          border-color: #2563eb;
        }
        .preset-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .preset-btn {
          padding: 7px 14px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          color: #475569;
          background: #f8fafc;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.15s ease;
        }
        .preset-btn:hover {
          background: #edf2f7;
        }
        .preset-btn.active {
          background: #eff6ff;
          border-color: #bfdbfe;
          color: #2563eb;
          font-weight: 600;
        }
        .datetime-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 4px;
        }
        .datetime-field {
          position: relative;
          display: flex;
          align-items: center;
        }
        .field-icon {
          position: absolute;
          left: 12px;
          color: #64748b;
        }
        .dt-input {
          width: 100%;
          padding: 9px 12px 9px 36px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 13px;
          color: #0f172a;
          background: #ffffff;
          outline: none;
        }
        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 8px;
          border-top: 1px solid #f1f5f9;
          padding-top: 16px;
        }
        @media (max-width: 500px) {
          .outcome-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .datetime-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
