export interface Doctor {
  id: string;
  name: string;
  nameMr?: string;
  degree?: string;
  department: string;
  specialties: string[];
  specialtiesMr?: string[];
  fees: {
    consulting: number | string;
    followUp?: number | string;
    emergency?: number | string;
    isPlaceholder?: boolean;
  };
  scheduleNote?: string;
}

export interface Review {
  author: string;
  rating: number;
  timeAgo?: string;
  text: string;
}

export interface Facility {
  id: string;
  title: string;
  titleMr?: string;
  description: string;
  badge?: string;
  iconName: string;
  photoCaption?: string;
}

export interface OPDRecord {
  department: string;
  doctorName: string;
  consulting: number;
  followUp: number;
  emergency: number;
}
