import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Zap,
  Home,
  Users,
  Target,
  MessageSquare,
  Phone,
  BarChart3,
  Settings,
  LogOut,
  Search,
  Headphones,
  Plus,
  Bell,
  Grid,
  ChevronDown,
  ChevronUp,
  PhoneCall,
  Copy,
  CheckCircle2,
  ArrowUpDown,
  X
} from 'lucide-react';
import type { Lead, CallLogData } from '../types';
import { LogCallModal } from '../components/LogCallModal';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  // Active Nav Item
  const [activeTab, setActiveTab] = useState<'home' | 'leads' | 'follow-ups' | 'whatsapp' | 'calls' | 'reports' | 'settings'>('follow-ups');

  // Search & Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [sourceFilter, setSourceFilter] = useState('All');
  const [stageFilter, setStageFilter] = useState('All');
  const [overdueOnly, setOverdueOnly] = useState(false);

  // Selected lead for call modal (Screen 3)
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isLogCallModalOpen, setIsLogCallModalOpen] = useState(false);
  
  // Quick New Lead modal state
  const [newLeadModalOpen, setNewLeadModalOpen] = useState(false);
  const [newLeadName, setNewLeadName] = useState('');
  const [newLeadPhone, setNewLeadPhone] = useState('');

  // Toast notification for copying phone or saving call log
  const [toastMsg, setToastMsg] = useState('');

  // Lead Data State
  const [leads, setLeads] = useState<Lead[]>([
    // Overdue (4)
    {
      id: '1',
      name: 'Rajesh Varma',
      location: 'Whitefield, Bengaluru',
      phone: '+91 98201 44321',
      source: 'Meta Ads',
      stage: 'Site visit scheduled',
      lastNote: 'Asked to call after 6 PM yesterday, missed connect',
      dueTime: 'Yesterday',
      category: 'overdue',
    },
    {
      id: '2',
      name: 'Manish Singhania',
      location: 'DLF Phase 5, Gurgaon',
      phone: '+91 98103 21980',
      source: 'Google Search',
      stage: 'Price quotation sent',
      lastNote: 'Interested in 2BHK, budget 80L, needs loan eligib',
      dueTime: '14 Oct',
      category: 'overdue',
    },
    {
      id: '3',
      name: 'Shalini Nair',
      location: 'Khar West, Mumbai',
      phone: '+91 97692 88410',
      source: 'WhatsApp Inbound',
      stage: 'First discovery call',
      lastNote: 'Requested brochure for Phase 2 villas',
      dueTime: '13 Oct',
      category: 'overdue',
    },
    {
      id: '4',
      name: 'Gaurav Chawla',
      location: 'Gachibowli, Hyderabad',
      phone: '+91 99510 44002',
      source: 'Meta Ads',
      stage: 'Documentation pending',
      lastNote: 'Follow up on bank approval document',
      dueTime: '13 Oct',
      category: 'overdue',
    },

    // Due today (7)
    {
      id: '5',
      name: 'Priya Sundaram',
      location: 'OMR, Chennai',
      phone: '+91 94440 18293',
      source: 'Google Search',
      stage: 'Discovery call',
      lastNote: 'Wants pricing sheet for 3BHK south facing',
      dueTime: '12:00 PM',
      category: 'dueToday',
    },
    {
      id: '6',
      name: 'Vikram Malhotra',
      location: 'Sector 54, Gurgaon',
      phone: '+91 98112 55890',
      source: 'Meta Ads',
      stage: 'Budget discussion',
      lastNote: 'Interested in luxury floor, budget 2.4 Cr',
      dueTime: '12:30 PM',
      category: 'dueToday',
    },
    {
      id: '7',
      name: 'Ananya Sen',
      location: 'Salt Lake, Kolkata',
      phone: '+91 98300 23114',
      source: 'WhatsApp',
      stage: 'Brochure shared',
      lastNote: 'Asked to call during lunch break 1:15 PM',
      dueTime: '1:15 PM',
      category: 'dueToday',
    },
    {
      id: '8',
      name: 'Neha Kulkarni',
      location: 'Baner, Pune',
      phone: '+91 97654 31209',
      source: 'Google Search',
      stage: 'Negotiation',
      lastNote: 'Comparing with Godrej project pricing',
      dueTime: '3:45 PM',
      category: 'dueToday',
    },
    {
      id: '9',
      name: 'Mohammed Farooq',
      location: 'Banjara Hills, Hyderabad',
      phone: '+91 99890 41235',
      source: 'Meta Ads',
      stage: 'First contact',
      lastNote: 'New lead from Sunday campaign, ready for call',
      dueTime: '4:30 PM',
      category: 'dueToday',
    },
    {
      id: '10',
      name: 'Sunita Agarwal',
      location: 'Vastrapur, Ahmedabad',
      phone: '+91 98250 88761',
      source: 'WhatsApp',
      stage: 'Re-engagement',
      lastNote: 'Requested revised payment plan options',
      dueTime: '5:15 PM',
      category: 'dueToday',
    },

    // Upcoming (12)
    {
      id: '11',
      name: 'Deepak Joshi',
      location: 'Indiranagar, Bengaluru',
      phone: '+91 99001 77210',
      source: 'Google Search',
      stage: 'Site visit scheduled',
      lastNote: 'Confirmed site visit for Sunday afternoon',
      dueTime: 'Tomorrow',
      category: 'upcoming',
    },
    {
      id: '12',
      name: 'Kavita Rao',
      location: 'Thane West, Mumbai',
      phone: '+91 98214 30981',
      source: 'Meta Ads',
      stage: 'Loan assistance',
      lastNote: 'Waiting for HDFC pre-approval sanction letter',
      dueTime: 'Tomorrow',
      category: 'upcoming',
    },
    {
      id: '13',
      name: 'Rohan Deshmukh',
      location: 'Kothrud, Pune',
      phone: '+91 98902 44102',
      source: 'WhatsApp',
      stage: 'Discovery call',
      lastNote: 'Prefers morning calls before 11 AM',
      dueTime: 'Tomorrow',
      category: 'upcoming',
    },
    {
      id: '14',
      name: 'Suresh Nambiar',
      location: 'Kakkanad, Kochi',
      phone: '+91 94471 88320',
      source: 'Meta Ads',
      stage: 'Floor plan review',
      lastNote: 'Looking for duplex penthouse layout',
      dueTime: 'Thu, 18 Oct',
      category: 'upcoming',
    }
  ]);

  // Section Collapse state
  const [overdueOpen, setOverdueOpen] = useState(true);
  const [dueTodayOpen, setDueTodayOpen] = useState(true);
  const [upcomingOpen, setUpcomingOpen] = useState(true);
  const [showMoreUpcoming, setShowMoreUpcoming] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const handleCopyPhone = (e: React.MouseEvent, phone: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(phone);
    triggerToast(`Phone number ${phone} copied to clipboard!`);
  };

  const handleOpenCallModal = (lead: Lead) => {
    setSelectedLead(lead);
    setIsLogCallModalOpen(true);
  };

  const handleSaveCallLog = (logData: CallLogData) => {
    if (!selectedLead) return;
    
    // Update stage & last note for selected lead
    setLeads(prev => prev.map(item => {
      if (item.id === selectedLead.id) {
        return {
          ...item,
          stage: logData.stage || item.stage,
          lastNote: logData.notes || `Call logged: ${logData.outcome}`,
        };
      }
      return item;
    }));

    triggerToast(`Call logged as '${logData.outcome}' for ${selectedLead.name}`);
  };

  // Filtered Leads Calculation
  const getFilteredLeads = (cat: 'overdue' | 'dueToday' | 'upcoming') => {
    return leads.filter(item => {
      if (item.category !== cat) return false;
      if (overdueOnly && cat !== 'overdue') return false;

      if (sourceFilter !== 'All' && !item.source.toLowerCase().includes(sourceFilter.toLowerCase())) {
        return false;
      }
      if (stageFilter !== 'All' && item.stage !== stageFilter) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchPhone = item.phone.toLowerCase().includes(q);
        const matchLoc = item.location.toLowerCase().includes(q);
        const matchNote = item.lastNote.toLowerCase().includes(q);
        if (!matchName && !matchPhone && !matchLoc && !matchNote) return false;
      }
      return true;
    });
  };

  const overdueList = getFilteredLeads('overdue');
  const dueTodayList = getFilteredLeads('dueToday');
  const upcomingList = getFilteredLeads('upcoming');

  const renderSourceBadge = (src: string) => {
    if (src === 'Meta Ads') return <span className="badge badge-meta">Meta Ads</span>;
    if (src === 'Google Search') return <span className="badge badge-google">Google Search</span>;
    return <span className="badge badge-whatsapp">WhatsApp</span>;
  };

  return (
    <div className="crm-layout">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="crm-toast">
          <CheckCircle2 size={16} />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Left Sidebar */}
      <aside className="crm-sidebar">
        {/* Workspace Brand Dropdown */}
        <div className="sidebar-brand-box">
          <div className="sidebar-logo">
            <Zap size={18} className="zap-icon" />
            <span className="brand-text">LeadZam</span>
            <span className="blue-dot">●</span>
          </div>
          <div className="org-switcher">
            <span>Shree Realty S</span>
            <ChevronDown size={14} />
          </div>
        </div>

        <div className="nav-section-title">OUTBOUND CRM</div>

        {/* Navigation items matching Screen 2 */}
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            <Home size={18} />
            <span>Home</span>
          </button>

          <button 
            className={`nav-item ${activeTab === 'leads' ? 'active' : ''}`}
            onClick={() => setActiveTab('leads')}
          >
            <Users size={18} />
            <span>Leads</span>
          </button>

          <button 
            className={`nav-item ${activeTab === 'follow-ups' ? 'active' : ''}`}
            onClick={() => setActiveTab('follow-ups')}
          >
            <Target size={18} />
            <span>Follow-ups</span>
          </button>

          <button 
            className={`nav-item ${activeTab === 'whatsapp' ? 'active' : ''}`}
            onClick={() => setActiveTab('whatsapp')}
          >
            <MessageSquare size={18} />
            <span>WhatsApp</span>
          </button>

          <button 
            className={`nav-item ${activeTab === 'calls' ? 'active' : ''}`}
            onClick={() => setActiveTab('calls')}
          >
            <Phone size={18} />
            <span>Calls</span>
          </button>

          <button 
            className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            <BarChart3 size={18} />
            <span>Reports</span>
          </button>

          <button 
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={18} />
            <span>Settings</span>
          </button>
        </nav>

        {/* Sidebar Footer User Pill */}
        <div className="sidebar-user-pill">
          <div className="user-avatar-initials">AK</div>
          <div className="user-info-text">
            <span className="user-name">Amit Kumar</span>
            <span className="user-status"><span className="online-dot"></span> Online</span>
          </div>
          <button className="logout-btn" onClick={() => navigate('/login')} title="Log out">
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="crm-main-area">
        {/* Top Header Bar */}
        <header className="crm-topbar">
          <div className="topbar-search">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search leads by phone, name or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="topbar-right-controls">
            <div className="softphone-status-pill">
              <Headphones size={15} color="#2563eb" />
              <span>Softphone Ready</span>
            </div>

            <button className="btn-primary new-lead-btn" onClick={() => setNewLeadModalOpen(true)}>
              <Plus size={16} />
              <span>New Lead</span>
            </button>

            <div className="icon-btn notification-btn">
              <Bell size={18} />
              <span className="notif-badge">3</span>
            </div>

            <div className="icon-btn">
              <Grid size={18} />
            </div>

            <div className="user-circle-avatar">
              <span>AK</span>
            </div>
          </div>
        </header>

        {/* Workspace Body */}
        <div className="crm-body">
          {/* Main Title & Session Target Bar */}
          <div className="page-header-row">
            <div className="title-left">
              <h1>Today's follow-ups</h1>
              <span className="total-scheduled-pill">23 total scheduled</span>
              <span className="session-target-pill">⏰ IST 11:42 AM • Session target: 35 dials</span>
            </div>

            <div className="actions-right">
              <button className="btn-secondary add-followup-btn" onClick={() => setNewLeadModalOpen(true)}>
                <Plus size={15} />
                <span>Add quick follow-up</span>
              </button>
              <button className="btn-primary bulk-dialer-btn" onClick={() => handleOpenCallModal(leads[0])}>
                <PhoneCall size={15} />
                <span>Bulk dialer queue (23)</span>
              </button>
            </div>
          </div>

          {/* Stat Metric Cards (4 Summary Cards) */}
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-label">Pending calls</span>
              <span className="stat-val">19</span>
            </div>

            <div className="stat-card">
              <span className="stat-label">Overdue alerts</span>
              <span className="stat-val red-text">4</span>
            </div>

            <div className="stat-card">
              <span className="stat-label">Completed today</span>
              <span className="stat-val blue-text">14</span>
            </div>

            <div className="stat-card">
              <span className="stat-label">Avg. call duration</span>
              <span className="stat-val">2m 48s</span>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="filters-bar">
            <div className="filter-search-box">
              <Search size={15} className="search-icon" />
              <input
                type="text"
                placeholder="Search by name, phone (+91), or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="filter-select-group">
              <select value={sourceFilter} onChange={(e) => setSourceFilter(e.target.value)}>
                <option value="All">Source: All (Meta, Google, WA)</option>
                <option value="Meta Ads">Source: Meta Ads</option>
                <option value="Google Search">Source: Google Search</option>
                <option value="WhatsApp">Source: WhatsApp</option>
              </select>

              <select value={stageFilter} onChange={(e) => setStageFilter(e.target.value)}>
                <option value="All">Stage: All active</option>
                <option value="Discovery call">Discovery call</option>
                <option value="Site visit scheduled">Site visit scheduled</option>
                <option value="Price quotation sent">Price quotation sent</option>
                <option value="Documentation pending">Documentation pending</option>
                <option value="Negotiation">Negotiation</option>
              </select>

              <select defaultValue="Amit">
                <option value="Amit">Assigned: Me (Amit Kumar)</option>
                <option value="All">Assigned: Team</option>
              </select>
            </div>

            <div className="filter-overdue-toggle">
              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={overdueOnly}
                  onChange={(e) => setOverdueOnly(e.target.checked)}
                />
                <span>Overdue only</span>
                <span className="overdue-count-badge">4</span>
              </label>
            </div>

            <div className="sort-box">
              <ArrowUpDown size={14} />
              <span>Sort: Due time</span>
            </div>
          </div>

          {/* Lead List Sections */}

          {/* SECTION 1: Overdue (4) */}
          <div className="table-section-box">
            <div className="section-header-bar overdue-bar" onClick={() => setOverdueOpen(!overdueOpen)}>
              <div className="section-title-left">
                {overdueOpen ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                <h3 className="section-title">Overdue ({overdueList.length})</h3>
                <span className="badge-pink-alert">Requires immediate attention</span>
              </div>
              <button 
                className="btn-secondary call-overdue-btn" 
                onClick={(e) => {
                  e.stopPropagation();
                  if (overdueList.length > 0) handleOpenCallModal(overdueList[0]);
                }}
              >
                <PhoneCall size={14} color="#dc2626" />
                <span>Call all overdue</span>
              </button>
            </div>

            {overdueOpen && (
              <div className="table-container">
                <table className="leads-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40px' }}><input type="checkbox" /></th>
                      <th>LEAD NAME</th>
                      <th>PHONE</th>
                      <th>SOURCE</th>
                      <th>STAGE</th>
                      <th>LAST NOTE</th>
                      <th>DUE TIME</th>
                    </tr>
                  </thead>
                  <tbody>
                    {overdueList.map((lead) => (
                      <tr key={lead.id} onClick={() => handleOpenCallModal(lead)} className="lead-row">
                        <td><input type="checkbox" onClick={(e) => e.stopPropagation()} /></td>
                        <td>
                          <div className="lead-name-cell">
                            <span className="lead-name">{lead.name}</span>
                            <span className="lead-location">{lead.location}</span>
                          </div>
                        </td>
                        <td>
                          <div className="phone-cell">
                            <span className="phone-text">{lead.phone}</span>
                            <button className="copy-btn" onClick={(e) => handleCopyPhone(e, lead.phone)} title="Copy phone">
                              <Copy size={13} />
                            </button>
                          </div>
                        </td>
                        <td>{renderSourceBadge(lead.source)}</td>
                        <td><span className="stage-text">{lead.stage}</span></td>
                        <td><span className="note-text">{lead.lastNote}</span></td>
                        <td><span className="due-red-text">{lead.dueTime}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* SECTION 2: Due Today (7) */}
          <div className="table-section-box">
            <div className="section-header-bar due-bar" onClick={() => setDueTodayOpen(!dueTodayOpen)}>
              <div className="section-title-left">
                {dueTodayOpen ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                <h3 className="section-title">Due today ({dueTodayList.length})</h3>
                <span className="badge-blue-pill">Next call at 12:00 PM</span>
              </div>
              <span className="remaining-text">7 leads remaining</span>
            </div>

            {dueTodayOpen && (
              <div className="table-container">
                <table className="leads-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40px' }}><input type="checkbox" /></th>
                      <th>LEAD NAME</th>
                      <th>PHONE</th>
                      <th>SOURCE</th>
                      <th>STAGE</th>
                      <th>LAST NOTE</th>
                      <th>DUE TIME</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dueTodayList.slice(0, 3).map((lead) => (
                      <tr key={lead.id} onClick={() => handleOpenCallModal(lead)} className="lead-row">
                        <td><input type="checkbox" onClick={(e) => e.stopPropagation()} /></td>
                        <td>
                          <div className="lead-name-cell">
                            <span className="lead-name">{lead.name}</span>
                            <span className="lead-location">{lead.location}</span>
                          </div>
                        </td>
                        <td>
                          <div className="phone-cell">
                            <span className="phone-text">{lead.phone}</span>
                            <button className="copy-btn" onClick={(e) => handleCopyPhone(e, lead.phone)} title="Copy phone">
                              <Copy size={13} />
                            </button>
                          </div>
                        </td>
                        <td>{renderSourceBadge(lead.source)}</td>
                        <td><span className="stage-text">{lead.stage}</span></td>
                        <td><span className="note-text">{lead.lastNote}</span></td>
                        <td><span className="due-blue-text">{lead.dueTime}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* CTI Dialer Status Bar Divider matching Screen 2 */}
                <div className="cti-status-bar">
                  <div className="cti-left">
                    <span className="green-cti-dot">●</span>
                    <span>CTI Dialer Connected</span>
                    <span className="cti-sep">•</span>
                    <span>Auto-wrapup: 45s</span>
                    <span className="cti-sep">•</span>
                    <span>Daily target: 14/35 completed (40%)</span>
                  </div>
                  <div className="cti-right">
                    <span>Keyboard shortcut:</span>
                    <kbd className="space-kbd">Space</kbd>
                    <span>to start next dial</span>
                  </div>
                </div>

                <table className="leads-table">
                  <tbody>
                    {dueTodayList.slice(3).map((lead) => (
                      <tr key={lead.id} onClick={() => handleOpenCallModal(lead)} className="lead-row">
                        <td style={{ width: '40px' }}><input type="checkbox" onClick={(e) => e.stopPropagation()} /></td>
                        <td>
                          <div className="lead-name-cell">
                            <span className="lead-name">{lead.name}</span>
                            <span className="lead-location">{lead.location}</span>
                          </div>
                        </td>
                        <td>
                          <div className="phone-cell">
                            <span className="phone-text">{lead.phone}</span>
                            <button className="copy-btn" onClick={(e) => handleCopyPhone(e, lead.phone)} title="Copy phone">
                              <Copy size={13} />
                            </button>
                          </div>
                        </td>
                        <td>{renderSourceBadge(lead.source)}</td>
                        <td><span className="stage-text">{lead.stage}</span></td>
                        <td><span className="note-text">{lead.lastNote}</span></td>
                        <td><span className="due-blue-text">{lead.dueTime}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* SECTION 3: Upcoming (12) */}
          <div className="table-section-box">
            <div className="section-header-bar upcoming-bar" onClick={() => setUpcomingOpen(!upcomingOpen)}>
              <div className="section-title-left">
                {upcomingOpen ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                <h3 className="section-title">Upcoming (12)</h3>
                <span className="subtitle-gray">Tomorrow & later this week</span>
              </div>
              <span className="preview-tag">PREVIEWING {upcomingList.length} OF 12</span>
            </div>

            {upcomingOpen && (
              <div className="table-container">
                <table className="leads-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40px' }}><input type="checkbox" /></th>
                      <th>LEAD NAME</th>
                      <th>PHONE</th>
                      <th>SOURCE</th>
                      <th>STAGE</th>
                      <th>LAST NOTE</th>
                      <th>DUE TIME</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingList.map((lead) => (
                      <tr key={lead.id} onClick={() => handleOpenCallModal(lead)} className="lead-row">
                        <td><input type="checkbox" onClick={(e) => e.stopPropagation()} /></td>
                        <td>
                          <div className="lead-name-cell">
                            <span className="lead-name">{lead.name}</span>
                            <span className="lead-location">{lead.location}</span>
                          </div>
                        </td>
                        <td>
                          <div className="phone-cell">
                            <span className="phone-text">{lead.phone}</span>
                            <button className="copy-btn" onClick={(e) => handleCopyPhone(e, lead.phone)} title="Copy phone">
                              <Copy size={13} />
                            </button>
                          </div>
                        </td>
                        <td>{renderSourceBadge(lead.source)}</td>
                        <td><span className="stage-text">{lead.stage}</span></td>
                        <td><span className="note-text">{lead.lastNote}</span></td>
                        <td><span className="due-gray-text">{lead.dueTime}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="show-more-bar">
                  <button className="show-more-btn" onClick={() => setShowMoreUpcoming(!showMoreUpcoming)}>
                    <span>{showMoreUpcoming ? 'Show fewer leads' : 'Show 8 more upcoming leads'}</span>
                    {showMoreUpcoming ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Log Call Modal (Screen 3) */}
      <LogCallModal
        isOpen={isLogCallModalOpen}
        lead={selectedLead}
        onClose={() => setIsLogCallModalOpen(false)}
        onSave={handleSaveCallLog}
      />

      {/* Quick Add Lead Modal */}
      {newLeadModalOpen && (
        <div className="modal-overlay" onClick={() => setNewLeadModalOpen(false)}>
          <div className="modal-content" style={{ padding: '32px', maxWidth: '460px' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setNewLeadModalOpen(false)}>
              <X size={18} />
            </button>
            <h2 className="modal-title">Add New Lead</h2>
            <p className="modal-subtitle">Enter lead details to add to your daily dialer queue.</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (!newLeadName || !newLeadPhone) return;
              const newLeadObj: Lead = {
                id: String(Date.now()),
                name: newLeadName,
                location: 'Bengaluru',
                phone: newLeadPhone,
                source: 'Meta Ads',
                stage: 'Discovery call',
                lastNote: 'New manual entry lead',
                dueTime: '12:00 PM',
                category: 'dueToday'
              };
              setLeads([newLeadObj, ...leads]);
              setNewLeadModalOpen(false);
              setNewLeadName('');
              setNewLeadPhone('');
              triggerToast(`Lead '${newLeadName}' added successfully!`);
            }}>
              <div className="input-group">
                <label className="input-label">Lead Name <span className="required">*</span></label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="e.g. Ramesh Kumar"
                  value={newLeadName}
                  onChange={(e) => setNewLeadName(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label className="input-label">Phone Number <span className="required">*</span></label>
                <input
                  type="tel"
                  className="input-field"
                  placeholder="+91 98765 43210"
                  value={newLeadPhone}
                  onChange={(e) => setNewLeadPhone(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '12px' }}>
                Add to Queue
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .crm-layout {
          display: flex;
          min-height: 100vh;
          background: #f8fafc;
          color: #0f172a;
        }
        .crm-toast {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 10000;
          background: #0f172a;
          color: #ffffff;
          padding: 12px 20px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        /* Sidebar Styles */
        .crm-sidebar {
          width: 240px;
          background: #ffffff;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }
        .sidebar-brand-box {
          padding: 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 6px;
        }
        .zap-icon {
          color: #2563eb;
        }
        .brand-text {
          font-weight: 700;
          font-size: 16px;
          color: #0f172a;
        }
        .blue-dot {
          color: #2563eb;
          font-size: 12px;
        }
        .org-switcher {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          color: #64748b;
          cursor: pointer;
        }
        .nav-section-title {
          font-size: 11px;
          font-weight: 700;
          color: #94a3b8;
          padding: 16px 20px 8px;
          letter-spacing: 0.5px;
        }
        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 0 12px;
          flex: 1;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 9px 12px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #475569;
          transition: all 0.15s ease;
          width: 100%;
          text-align: left;
        }
        .nav-item:hover {
          background: #f1f5f9;
          color: #0f172a;
        }
        .nav-item.active {
          background: #2563eb;
          color: #ffffff;
          font-weight: 600;
        }
        .sidebar-user-pill {
          padding: 12px 16px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .user-avatar-initials {
          width: 32px;
          height: 32px;
          background: #0f766e;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
        }
        .user-info-text {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .user-name {
          font-size: 13px;
          font-weight: 600;
          color: #0f172a;
        }
        .user-status {
          font-size: 11px;
          color: #16a34a;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .online-dot {
          width: 6px;
          height: 6px;
          background: #16a34a;
          border-radius: 50%;
        }
        .logout-btn {
          color: #94a3b8;
          padding: 4px;
        }
        .logout-btn:hover {
          color: #dc2626;
        }

        /* Topbar */
        .crm-main-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
        }
        .crm-topbar {
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .topbar-search {
          position: relative;
          width: 380px;
        }
        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
        }
        .topbar-search input {
          width: 100%;
          padding: 8px 12px 8px 36px;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 13px;
          outline: none;
        }
        .topbar-right-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .softphone-status-pill {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #2563eb;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .new-lead-btn {
          padding: 8px 14px;
          font-size: 13px;
        }
        .icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          position: relative;
          border: 1px solid #e2e8f0;
        }
        .notif-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          background: #dc2626;
          color: white;
          font-size: 10px;
          font-weight: 700;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .user-circle-avatar {
          width: 34px;
          height: 34px;
          background: #2563eb;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
        }

        /* Body Main Content */
        .crm-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .page-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .title-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .title-left h1 {
          font-size: 22px;
          font-weight: 700;
          color: #0f172a;
        }
        .total-scheduled-pill {
          background: #e2e8f0;
          color: #334155;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
        }
        .session-target-pill {
          font-size: 13px;
          color: #2563eb;
          font-weight: 500;
        }
        .actions-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .add-followup-btn {
          font-size: 13px;
        }
        .bulk-dialer-btn {
          font-size: 13px;
        }

        /* Stat Grid Cards */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .stat-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }
        .stat-label {
          font-size: 13px;
          color: #64748b;
          font-weight: 500;
        }
        .stat-val {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
        }
        .stat-val.red-text { color: #dc2626; }
        .stat-val.blue-text { color: #2563eb; }

        /* Filter Row */
        .filters-bar {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .filter-search-box {
          position: relative;
          flex: 1;
          min-width: 220px;
        }
        .filter-search-box input {
          width: 100%;
          padding: 7px 12px 7px 34px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 13px;
          outline: none;
        }
        .filter-select-group {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .filter-select-group select {
          padding: 7px 12px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 12px;
          color: #334155;
          background: #ffffff;
          outline: none;
        }
        .filter-overdue-toggle {
          display: flex;
          align-items: center;
        }
        .toggle-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #334155;
          font-weight: 500;
          cursor: pointer;
        }
        .overdue-count-badge {
          background: #fee2e2;
          color: #dc2626;
          font-size: 11px;
          font-weight: 700;
          padding: 1px 6px;
          border-radius: 4px;
        }
        .sort-box {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #64748b;
          padding: 6px 10px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          cursor: pointer;
        }

        /* Lead Table Sections */
        .table-section-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
        }
        .section-header-bar {
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          border-bottom: 1px solid #f1f5f9;
          cursor: pointer;
        }
        .section-title-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .section-title {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
        }
        .badge-pink-alert {
          background: #fef2f2;
          color: #dc2626;
          font-size: 11px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 6px;
          border: 1px solid #fecaca;
        }
        .badge-blue-pill {
          background: #e0f2fe;
          color: #0284c7;
          font-size: 11px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 6px;
        }
        .subtitle-gray {
          font-size: 12px;
          color: #64748b;
        }
        .remaining-text, .preview-tag {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
        }
        .call-overdue-btn {
          padding: 5px 12px;
          font-size: 12px;
          color: #dc2626;
          border-color: #fecaca;
        }

        /* Table */
        .table-container {
          overflow-x: auto;
        }
        .leads-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 13px;
        }
        .leads-table th {
          background: #f8fafc;
          color: #64748b;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 10px 16px;
          border-bottom: 1px solid #e2e8f0;
        }
        .leads-table td {
          padding: 14px 16px;
          border-bottom: 1px solid #f1f5f9;
          color: #334155;
          vertical-align: middle;
        }
        .lead-row {
          cursor: pointer;
          transition: background 0.15s ease;
        }
        .lead-row:hover {
          background: #f8fafc;
        }
        .lead-name-cell {
          display: flex;
          flex-direction: column;
        }
        .lead-name {
          font-weight: 700;
          color: #0f172a;
        }
        .lead-location {
          font-size: 11px;
          color: #64748b;
        }
        .phone-cell {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          color: #0f172a;
        }
        .copy-btn {
          color: #94a3b8;
          padding: 2px;
          border-radius: 4px;
        }
        .copy-btn:hover {
          color: #2563eb;
          background: #eff6ff;
        }
        .stage-text {
          color: #475569;
          font-size: 12px;
        }
        .note-text {
          color: #64748b;
          font-size: 12px;
          max-width: 300px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }
        .due-red-text {
          color: #dc2626;
          font-weight: 600;
        }
        .due-blue-text {
          color: #2563eb;
          font-weight: 600;
        }
        .due-gray-text {
          color: #64748b;
          font-weight: 500;
        }

        /* CTI Status Bar */
        .cti-status-bar {
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          color: #475569;
        }
        .cti-left {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
        }
        .green-cti-dot {
          color: #10b981;
        }
        .cti-sep {
          color: #cbd5e1;
        }
        .cti-right {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .space-kbd {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 4px;
          padding: 1px 8px;
          font-size: 11px;
          font-weight: 600;
          color: #0f172a;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        }

        .show-more-bar {
          padding: 12px;
          text-align: center;
          background: #ffffff;
          border-top: 1px solid #f1f5f9;
        }
        .show-more-btn {
          color: #2563eb;
          font-weight: 600;
          font-size: 13px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        @media (max-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .crm-sidebar { width: 70px; }
          .brand-text, .org-switcher, .nav-section-title, .nav-item span, .user-info-text { display: none; }
          .sidebar-nav { align-items: center; }
          .nav-item { justify-content: center; padding: 12px; }
        }
        @media (max-width: 768px) {
          .crm-topbar { flex-direction: column; align-items: stretch; }
          .topbar-search { width: 100%; }
          .stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};
