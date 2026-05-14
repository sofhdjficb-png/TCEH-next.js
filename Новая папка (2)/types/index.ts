export interface CookieConsent {
  consentVersion: string;
  savedAt: string;
  source: "cookie-banner";
  categories: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
  };
}

export interface ContactFormData {
  name: string;
  phone: string;
  consent: boolean;
  honeypot?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  price: string;
}

export interface ReviewItem {
  id: string;
  text: string;
  source: string;
  date: string;
}

export interface CaseItem {
  id: string;
  title: string;
  before: string;
  action: string;
  result: string;
}
