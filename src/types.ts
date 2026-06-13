export interface Flight {
  id: string;
  flightNumber: string;
  origin: string;
  aircraftType: string;
  scheduledTime: string;
  actualTime?: string;
  status: 'scheduled' | 'on-time' | 'delayed' | 'departing' | 'airborne' | 'landed' | 'diverted' | 'cancelled';
  terminal: string;
  gate?: string;
  remarks?: string;
}

export interface Settings {
  telegramAlertsEnabled: boolean;
  telegramChannelId?: string;
  refreshInterval: number;
  language: Language;
  showDebug: boolean;
}

export type Language = 'en' | 'ar';

export interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export interface Lib {
  [key: string]: {
    en: string;
    ar: string;
  };
}
