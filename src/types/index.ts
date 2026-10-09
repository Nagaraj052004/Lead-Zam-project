export interface Lead {
  id: string;
  name: string;
  location: string;
  phone: string;
  source: 'Meta Ads' | 'Google Search' | 'WhatsApp Inbound' | 'WhatsApp';
  stage: string;
  lastNote: string;
  dueTime: string;
  category: 'overdue' | 'dueToday' | 'upcoming';
  budget?: string;
}

export interface CallLogData {
  outcome: 'Connected' | 'No answer' | 'Busy' | 'Wrong number' | '';
  stage: string;
  notes: string;
  followUpPreset: 'Tomorrow' | 'In 3 days' | 'Next week' | 'Pick a date';
  followUpDate: string;
  followUpTime: string;
}

export interface SignUpFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  password: string;
  agreeToTerms: boolean;
}

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface FreeTrialFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  countryCode: string;
  phoneNumber: string;
}
