import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { SignUpPage } from './pages/SignUpPage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { FreeTrialModal } from './components/FreeTrialModal';

const DemoNavigationController: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [trialModalOpen, setTrialModalOpen] = useState(false);

  const handleSelectScreen = (val: string) => {
    if (val === 'screen1') {
      navigate('/signup');
    } else if (val === 'screen2') {
      navigate('/dashboard');
    } else if (val === 'screen3') {
      navigate('/dashboard');
    } else if (val === 'screen4') {
      setTrialModalOpen(true);
    } else if (val === 'screen5') {
      navigate('/');
    } else if (val === 'login') {
      navigate('/login');
    }
  };

  const getActiveValue = () => {
    if (location.pathname === '/signup') return 'screen1';
    if (location.pathname === '/dashboard') return 'screen2';
    if (location.pathname === '/login') return 'login';
    return 'screen5';
  };

  return (
    <>
      <div className="demo-switcher">
        <span style={{ fontSize: '11px', color: '#94a3b8' }}>⚡ Quick Screen View:</span>
        <select value={getActiveValue()} onChange={(e) => handleSelectScreen(e.target.value)}>
          <option value="screen5">Screen 5: LeadZam Website Landing Page</option>
          <option value="screen1">Screen 1: Sign Up / Create Account Page</option>
          <option value="login">Login Screen</option>
          <option value="screen2">Screen 2: Outbound CRM Dashboard</option>
          <option value="screen3">Screen 3: Log Call Modal (Rohit Sharma)</option>
          <option value="screen4">Screen 4: 14-Day Free Trial Modal Popup</option>
        </select>
      </div>

      <FreeTrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        onSuccess={() => navigate('/dashboard')}
      />
    </>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/follow-ups" element={<DashboardPage />} />
        <Route path="/leads" element={<DashboardPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
      <DemoNavigationController />
    </BrowserRouter>
  );
}

export default App;
