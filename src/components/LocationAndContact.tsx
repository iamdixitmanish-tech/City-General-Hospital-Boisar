import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Share2, 
  Check, 
  Building, 
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import { HOSPITAL_INFO } from '../hospitalData';

interface LocationAndContactProps {
  onOpenPlaceholders: () => void;
}

export const LocationAndContact = ({ onOpenPlaceholders }: LocationAndContactProps) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'City General Hospital & I.C.U.',
        text: `City General Hospital, Boisar - ${HOSPITAL_INFO.fullAddress}. Phone: ${HOSPITAL_INFO.primaryPhone}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${HOSPITAL_INFO.name}: ${HOSPITAL_INFO.fullAddress}. Tel: ${HOSPITAL_INFO.primaryPhone}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="location" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800 border border-sky-300 mb-3">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>Map & Contact Details</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Hospital Location & 24/7 Access
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Conveniently situated along Boisar - Tarapur Road, opposite Harmony Plaza and near State Bank of India (SBI).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact & Address Information */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Main Info Card */}
            <div className="bg-white rounded-2xl border-2 border-sky-200 p-6 sm:p-8 shadow-md space-y-6">
              
              {/* Full Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl hospital-brand-gradient text-white flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                    Hospital Address
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    {HOSPITAL_INFO.fullAddress}
                  </h3>
                  <div className="text-xs text-slate-500 mt-1 font-medium">
                    Landmarks: Opp. Harmony Plaza, Near SBI Bank, Baugh, Boisar (Palghar - 401501)
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Also listed at: {HOSPITAL_INFO.landmarkArea}
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Emergency & Casualty Timings
                  </div>
                  <div className="text-lg font-bold text-slate-900 mt-1 flex items-center gap-2">
                    <span>{HOSPITAL_INFO.timing}</span>
                    <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800">
                      Open 24/7
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Admissions, Trauma Care, ICU, and Pharmacy operational round-the-clock.
                  </div>
                </div>
              </div>

              {/* Phone numbers */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 border border-sky-200 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                    Official Contact Numbers
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href={`tel:${HOSPITAL_INFO.primaryPhone.replace(/\s+/g, '')}`}
                      className="text-base font-extrabold text-slate-900 hover:text-sky-600 transition-colors"
                    >
                      {HOSPITAL_INFO.primaryPhone}
                    </a>
                    <span className="text-slate-300">•</span>
                    <a
                      href={`tel:${HOSPITAL_INFO.secondaryPhone.replace(/\s+/g, '')}`}
                      className="text-base font-extrabold text-slate-900 hover:text-sky-600 transition-colors"
                    >
                      {HOSPITAL_INFO.secondaryPhone}
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">
                    For OPD appointments, emergency ambulance dispatch, and inpatient inquiries.
                  </div>
                </div>
              </div>

              {/* Action Buttons: Directions, Share, Call */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                <a
                  href={HOSPITAL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-2 rounded-xl hospital-brand-gradient text-white text-xs font-bold flex flex-col items-center justify-center gap-1 text-center shadow-sm hover:brightness-110 active:scale-98 transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Directions</span>
                </a>

                <a
                  href={`tel:${HOSPITAL_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="py-3 px-2 rounded-xl bg-red-600 text-white text-xs font-bold flex flex-col items-center justify-center gap-1 text-center shadow-sm hover:bg-red-700 active:scale-98 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Hospital</span>
                </a>

                <button
                  onClick={handleShare}
                  className="py-3 px-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold flex flex-col items-center justify-center gap-1 text-center hover:bg-slate-200 active:scale-98 transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Share Info'}</span>
                </button>
              </div>

            </div>

            {/* Missing Info Placeholder Badge Box */}
            <div className="bg-amber-50/80 border border-amber-300 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-900">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Notice regarding unprovided information:</span>{' '}
                Hospital email, NABH/Reg number, and detailed room categories were not present in the uploaded photos and have been reserved as placeholders.
                <button
                  onClick={onOpenPlaceholders}
                  className="block mt-1 text-sky-800 underline font-semibold cursor-pointer"
                >
                  Inspect all placeholder items &rarr;
                </button>
              </div>
            </div>

          </div>

          {/* Right: Interactive Map Simulation & Surrounding Landmark Guide */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white rounded-2xl border-2 border-sky-200 overflow-hidden shadow-md">
              {/* Map Header */}
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-xs font-bold">City General Hospital on Google Maps</span>
                </div>
                <span className="text-xs text-slate-300 font-mono">Boisar-Tarapur Rd</span>
              </div>

              {/* Map View Frame */}
              <div className="relative h-80 bg-slate-100 flex flex-col items-center justify-center p-6 text-center">
                {/* Visual map route schematic */}
                <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                
                <div className="relative z-10 max-w-sm p-5 bg-white/95 backdrop-blur-md rounded-2xl border border-sky-200 shadow-xl space-y-3">
                  <div className="w-12 h-12 rounded-xl hospital-cyan-gradient text-white flex items-center justify-center mx-auto shadow-md">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">
                      City General Hospital & I.C.U.
                    </h4>
                    <div className="text-xs text-slate-500 mt-1">
                      Opp. Harmony Plaza, near State Bank of India (SBI), Boisar - Tarapur Road, Boisar, Maharashtra 401501
                    </div>
                  </div>
                  <div className="pt-2">
                    <a
                      href={HOSPITAL_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hospital-brand-gradient text-white text-xs font-bold hover:brightness-110 transition-all shadow-xs"
                    >
                      <span>Open Live GPS Navigation</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Key proximity points */}
              <div className="p-4 bg-sky-50/50 border-t border-slate-100 text-xs text-slate-600 grid grid-cols-2 gap-2">
                <div>
                  <span className="font-bold text-slate-900">Landmark 1:</span> Opp. Harmony Plaza
                </div>
                <div>
                  <span className="font-bold text-slate-900">Landmark 2:</span> Near State Bank of India
                </div>
                <div>
                  <span className="font-bold text-slate-900">Highway:</span> Boisar - Tarapur Road
                </div>
                <div>
                  <span className="font-bold text-slate-900">Locality:</span> Ashutosh Nagar, Boisar
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
