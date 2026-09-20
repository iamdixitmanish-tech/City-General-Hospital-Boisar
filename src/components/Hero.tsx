import { motion } from 'motion/react';
import { Phone, Calendar, MapPin, ShieldAlert, Star, CheckCircle2, Clock, Building2, ArrowRight } from 'lucide-react';
import { HOSPITAL_INFO } from '../hospitalData';

interface HeroProps {
  onOpenAppointment: () => void;
}

export const Hero = ({ onOpenAppointment }: HeroProps) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-sky-50/70 via-white to-slate-50">
      {/* Background building-inspired cyan/blue architectural accents */}
      <div className="absolute top-0 right-0 -z-10 w-full lg:w-2/3 h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800 border border-sky-300">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                Official Healthcare Centre • Boisar, Palghar
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                4.9 ★ Rating on Google ({HOSPITAL_INFO.reviewCount} Reviews)
              </span>
            </div>

            {/* Main Title & Marathi Title */}
            <div className="space-y-2">
              <div className="text-sm font-bold text-red-600 tracking-wider uppercase">
                {HOSPITAL_INFO.marathiName}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                {HOSPITAL_INFO.name}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-800">
                  & I.C.U.
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-sky-800 tracking-wide">
                &ldquo;{HOSPITAL_INFO.tagline}&rdquo;
              </p>
            </div>

            {/* Quick description strictly based on images */}
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              Equipped with specialized 24-Hour Intensive Care Unit (I.C.U.), Advanced Operations Theatre with C-Arm fluoroscopy, Minor OT, and comprehensive OPD consultations in Orthopedic, Internal Medicine, General Surgery, ENT, and Physiotherapy.
            </p>

            {/* Highlights Grid matching building & signs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white border-2 border-sky-100 shadow-xs hover:border-sky-300 transition-colors">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm mb-1">
                  <Clock className="w-4 h-4 text-cyan-600" />
                  <span>24 Hours Open</span>
                </div>
                <div className="text-xs text-slate-500">Round-the-clock emergency & ICU admission</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border-2 border-sky-100 shadow-xs hover:border-sky-300 transition-colors">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Cashless Available</span>
                </div>
                <div className="text-xs text-slate-500">14+ TPA & Insurance partners accepted</div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-white border-2 border-sky-100 shadow-xs hover:border-sky-300 transition-colors">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm mb-1">
                  <Building2 className="w-4 h-4 text-sky-600" />
                  <span>City Chemist</span>
                </div>
                <div className="text-xs text-slate-500">In-house pharmacy & surgical supplies</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl hospital-brand-gradient text-white text-base font-bold shadow-lg shadow-sky-600/20 hover:brightness-110 active:scale-98 transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-cyan-200" />
                <span>Book OPD Consultation</span>
              </button>

              <a
                href={`tel:${HOSPITAL_INFO.primaryPhone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-red-600 text-white text-base font-bold shadow-lg shadow-red-600/20 hover:bg-red-700 active:scale-98 transition-all"
              >
                <Phone className="w-5 h-5 animate-bounce" />
                <span>Call Emergency: {HOSPITAL_INFO.primaryPhone}</span>
              </a>

              <a
                href="#rate-card"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 active:scale-98 transition-all"
              >
                <span>View OPD Rate Card</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Address bar snippet */}
            <div className="flex items-start gap-2 text-xs text-slate-500 pt-2">
              <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <span>
                {HOSPITAL_INFO.fullAddress} • Opp. Harmony Plaza, near SBI
              </span>
            </div>
          </motion.div>

          {/* Right Hero Visual Card - Representing the hospital building color gradient & architectural window facade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              {/* Outer building facade card: crisp white with cyan trim border, mimicking the building exterior from photos */}
              <div className="bg-white rounded-2xl p-5 border-4 border-sky-400/80 shadow-2xl relative overflow-hidden">
                
                {/* Rooftop signage strip: Red Marathi sign as seen on the actual building */}
                <div className="bg-red-600 text-white text-center py-2 px-3 rounded-lg mb-4 shadow-sm flex items-center justify-center gap-2">
                  <span className="font-extrabold text-sm tracking-wide">
                    सिटी जनरल हॉस्पिटल • डॉ. रोहन कोरे
                  </span>
                </div>

                {/* Building cyan window trim simulation */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 bg-slate-50 rounded-xl border-2 border-cyan-500 shadow-inner">
                    <div className="text-xs font-bold text-cyan-800 uppercase">Specialist</div>
                    <div className="text-sm font-bold text-slate-900 mt-1">Dr. Rohan Kore</div>
                    <div className="text-xs text-slate-500">M.S. Ortho (Spine & Joint)</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border-2 border-cyan-500 shadow-inner">
                    <div className="text-xs font-bold text-cyan-800 uppercase">Physician</div>
                    <div className="text-sm font-bold text-slate-900 mt-1">Dr. Prakash Raut</div>
                    <div className="text-xs text-slate-500">M.D. Medicine</div>
                  </div>
                </div>

                {/* The main hospital board replica gradient (from photo: deep blue to cyan) */}
                <div className="rounded-xl p-5 hospital-brand-gradient text-white shadow-md relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-white/10 rounded-full blur-xl"></div>
                  
                  <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-3">
                    <div>
                      <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Hospital Signboard</div>
                      <div className="text-lg font-black tracking-tight">City General Hospital & I.C.U.</div>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-cyan-200">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center bg-white/10 px-3 py-1.5 rounded-md">
                      <span className="text-cyan-100">Consultation OPD</span>
                      <span className="font-bold text-white">Starting ₹300</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/10 px-3 py-1.5 rounded-md">
                      <span className="text-cyan-100">Mediclaim / Cashless</span>
                      <span className="font-bold text-emerald-300">Available (14+ TPA)</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/10 px-3 py-1.5 rounded-md">
                      <span className="text-cyan-100">Operation Theatre</span>
                      <span className="font-bold text-white">Major OT & Minor OT</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
                    <div className="text-xs text-sky-200">
                      Emergency: <span className="font-bold text-white">{HOSPITAL_INFO.primaryPhone}</span>
                    </div>
                    <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-emerald-500/30 text-emerald-200 border border-emerald-400/40">
                      24 Hrs Open
                    </span>
                  </div>
                </div>

                {/* Chemist / Pharmacy badge next to building */}
                <div className="mt-3 bg-cyan-50 border border-cyan-200 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                    <span className="text-xs font-bold text-cyan-900">City Chemist (औषधांचे दुकान)</span>
                  </div>
                  <span className="text-[11px] font-semibold text-cyan-700">On-Premises</span>
                </div>

              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-5 -left-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-sky-200 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 font-black">
                  4.9
                </div>
                <div>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500" />
                    ))}
                  </div>
                  <div className="text-[11px] text-slate-600 font-semibold mt-0.5">
                    171 Google Reviews in Boisar
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
