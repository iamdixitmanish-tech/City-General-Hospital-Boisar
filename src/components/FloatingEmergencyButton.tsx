import { Phone, Calendar } from 'lucide-react';
import { HOSPITAL_INFO } from '../hospitalData';

interface FloatingEmergencyProps {
  onOpenAppointment: () => void;
}

export const FloatingEmergencyButton = ({ onOpenAppointment }: FloatingEmergencyProps) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Quick OPD Appointment pill */}
      <button
        onClick={onOpenAppointment}
        className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full hospital-brand-gradient text-white text-xs font-bold shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer border border-sky-400"
      >
        <Calendar className="w-3.5 h-3.5 text-cyan-200" />
        <span>Book OPD (From ₹300)</span>
      </button>

      {/* Primary Emergency Call Floating Button */}
      <a
        href={`tel:${HOSPITAL_INFO.primaryPhone.replace(/\s+/g, '')}`}
        className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-red-600 text-white font-extrabold text-xs shadow-2xl hover:bg-red-700 active:scale-95 transition-all border-2 border-white animate-pulse"
        title="Emergency 24x7 Call"
      >
        <Phone className="w-4 h-4 text-white" />
        <span className="hidden xs:inline">24/7 Emergency:</span>
        <span>{HOSPITAL_INFO.primaryPhone}</span>
      </a>
    </div>
  );
};
