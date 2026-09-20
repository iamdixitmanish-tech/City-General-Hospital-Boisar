import { Phone, MapPin, Clock, Star, ShieldCheck, Heart } from 'lucide-react';
import { HOSPITAL_INFO } from '../hospitalData';

interface FooterProps {
  onOpenAppointment: () => void;
  onOpenPlaceholders: () => void;
}

export const Footer = ({ onOpenAppointment, onOpenPlaceholders }: FooterProps) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      
      {/* Top CTA Strip */}
      <div className="hospital-brand-gradient text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-200">
              City General Hospital & I.C.U.
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              In Need of Urgent Medical Care or Doctor Consultation?
            </h3>
            <p className="text-xs sm:text-sm text-sky-100">
              Emergency department, ICU, and City Chemist operate 24 hours daily in Boisar.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${HOSPITAL_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="px-6 py-3.5 rounded-xl bg-red-600 text-white font-black text-sm shadow-xl hover:bg-red-700 active:scale-98 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Emergency: {HOSPITAL_INFO.primaryPhone}</span>
            </a>
            <button
              onClick={onOpenAppointment}
              className="px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm shadow-xl hover:bg-slate-100 active:scale-98 transition-all cursor-pointer"
            >
              Book OPD Visit
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white p-1 shadow-md flex items-center justify-center shrink-0">
                <img
                  src="/hospital-emblem.svg"
                  alt="City General Hospital & I.C.U. Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-extrabold text-white text-lg">
                  {HOSPITAL_INFO.name}
                </div>
                <div className="text-xs text-cyan-400 font-semibold">
                  {HOSPITAL_INFO.suffix} • {HOSPITAL_INFO.tagline}
                </div>
              </div>
            </div>

            <div className="text-xs text-red-400 font-bold">
              {HOSPITAL_INFO.marathiName} • {HOSPITAL_INFO.marathiTagline}
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Equipped with Intensive Care Unit (I.C.U.), sterile Operation Theatres, Minor OT, and comprehensive OPD consultation in Boisar, Palghar.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>4.9 ★ on Google ({HOSPITAL_INFO.reviewCount} Reviews)</span>
            </div>
          </div>

          {/* Doctors & OPD */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Consulting Specialists
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Dr. Rohan Kore (M.S. Ortho - Joint & Spine)</li>
              <li>Dr. A.G Dhada (Orthopedic Specialist)</li>
              <li>Dr. Prakash Raut (M.D. Medicine - Physician)</li>
              <li>Dr. P.K Yadav (General Surgeon)</li>
              <li>Dr. Manisha Jadhav (ENT Specialist)</li>
              <li>Dr. Khushboo Kore (ICU & Anaesthesia)</li>
              <li>Dr. Jaya Singh (Physiotherapist - Mon to Sat)</li>
            </ul>
          </div>

          {/* Hospital Facilities */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Facilities & Units
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>24-Hour Intensive Care Unit (I.C.U.)</li>
              <li>Major Operations Theatre (with C-Arm)</li>
              <li>Minor Operation Theatre</li>
              <li>General, Uro & Neurosurgery</li>
              <li>24/7 Ambulance Service</li>
              <li>City Chemist (In-House Pharmacy)</li>
              <li>Cashless Mediclaim (14+ TPAs)</li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contact & Address
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                {HOSPITAL_INFO.fullAddress}
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Open 24 Hours (Emergency & Admissions)</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-300 font-bold pt-1">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <div className="flex flex-col">
                <a href={`tel:${HOSPITAL_INFO.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-cyan-400">
                  {HOSPITAL_INFO.primaryPhone}
                </a>
                <a href={`tel:${HOSPITAL_INFO.secondaryPhone.replace(/\s+/g, '')}`} className="hover:text-cyan-400 text-[11px] font-normal text-slate-400">
                  {HOSPITAL_INFO.secondaryPhone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenPlaceholders}
                className="text-xs text-sky-400 hover:text-white underline cursor-pointer"
              >
                View missing data placeholders
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {HOSPITAL_INFO.name} & I.C.U. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Keeping You Well</span>
            <span>•</span>
            <button
              onClick={onOpenPlaceholders}
              className="hover:text-cyan-400 cursor-pointer transition-colors"
            >
              Placeholders Notice
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
