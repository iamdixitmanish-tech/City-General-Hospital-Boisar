import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  Activity, 
  Stethoscope, 
  Clock, 
  Truck, 
  Pill, 
  Sparkles, 
  CheckCircle2, 
  Eye, 
  HeartPulse, 
  Scissors, 
  Brain, 
  Dumbbell 
} from 'lucide-react';
import { HOSPITAL_FACILITIES, HOSPITAL_INFO } from '../hospitalData';

export const FacilitiesShowcase = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'theatre' | 'critical'>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6" />;
      case 'Clock': return <Clock className="w-6 h-6" />;
      case 'Truck': return <Truck className="w-6 h-6" />;
      case 'Pill': return <Pill className="w-6 h-6" />;
      case 'Scissors': return <Scissors className="w-6 h-6" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
      case 'Brain': return <Brain className="w-6 h-6" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6" />;
      default: return <Activity className="w-6 h-6" />;
    }
  };

  const filteredFacilities = HOSPITAL_FACILITIES.filter(fac => {
    if (activeTab === 'theatre') {
      return fac.id.includes('ot') || fac.id.includes('surgery');
    }
    if (activeTab === 'critical') {
      return fac.id.includes('icu') || fac.id.includes('ambulance') || fac.id.includes('reception');
    }
    return true;
  });

  return (
    <section id="facilities" className="py-16 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-900 border border-cyan-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Infrastructure & Clinical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Hospital Facilities & Surgical Suites
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Dedicated surgical theaters, round-the-clock intensive care, and on-premises pharmacy documented directly from the hospital's premises.
          </p>
        </div>

        {/* Feature spotlight: Major OT & Minor OT & Reception (The 3 places photographed in the tour) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          
          {/* Major OT Card */}
          <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white rounded-2xl p-6 shadow-xl border border-sky-800 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/40">
                  Featured In Photo Tour
                </span>
                <span className="text-xs text-slate-400 font-mono">OP THEATRE</span>
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white mb-2">
                Operations Theatre
              </h3>
              <p className="text-xs text-sky-200 font-medium mb-3">
                ऑपरेशन थिएटर • Advanced Surgical Setup
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Fully equipped sterile surgical suite configured for orthopedic trauma, joint replacement, spine, and general surgeries.
              </p>
              
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>C-Arm Fluoroscopy Imaging Machine</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Anaesthesia Workstation & Multi-Parameter Monitors</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Ergonomic hydraulic operating table & sterile suite</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-sky-800/80 text-[11px] text-cyan-300 font-medium flex items-center justify-between">
              <span>Supervised by ICU & Surgical Specialists</span>
              <span className="font-bold text-white">24/7 OT Ready</span>
            </div>
          </div>

          {/* Minor OT Card */}
          <div className="bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-950 text-white rounded-2xl p-6 shadow-xl border border-sky-700 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-sky-400/10 rounded-full blur-2xl"></div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-sky-400/20 text-sky-200 text-xs font-bold border border-sky-400/40">
                  Featured In Photo Tour
                </span>
                <span className="text-xs text-slate-400 font-mono">MINOR OT</span>
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white mb-2">
                Minor Operation Theatre
              </h3>
              <p className="text-xs text-sky-200 font-medium mb-3">
                मायनर ऑपरेशन थिएटर • Day-Care & Urgent Procedures
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Dedicated rapid-turnaround procedure room for day-care surgeries, laceration repairs, minor surgical interventions, and wound management.
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0" />
                  <span>High-intensity articulated overhead surgical lamp</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0" />
                  <span>Sterile dressing & minor instrument stations</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0" />
                  <span>Immediate patient prep & recovery area</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-sky-800 text-[11px] text-sky-200 font-medium flex items-center justify-between">
              <span>Rapid Emergency Response</span>
              <span className="font-bold text-white">Daily Outpatient Access</span>
            </div>
          </div>

          {/* Reception & In-House Pharmacy Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-sky-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
                  24x7 Helpdesk
                </span>
                <span className="text-xs text-slate-500 font-mono">ADMISSIONS</span>
              </div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900 mb-2">
                Reception & Chemist
              </h3>
              <p className="text-xs text-sky-700 font-medium mb-3">
                रिसेप्शन & औषधांचे दुकान (City Chemist)
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Central patient registration, cashless mediclaim helpdesk, quiet waiting hall, and attached medical store for medications and orthopedic braces.
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Round-the-clock emergency triage & patient entry</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>City Chemist (औषधांचे दुकान) on-premises</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Mediclaim & Cashless desk assistance</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Boisar - Tarapur Rd</span>
              <span className="font-bold text-sky-700">Call: {HOSPITAL_INFO.primaryPhone}</span>
            </div>
          </div>

        </div>

        {/* Tab switcher for all hospital facilities */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'hospital-brand-gradient text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Services & Facilities
          </button>
          <button
            onClick={() => setActiveTab('theatre')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'theatre'
                ? 'hospital-brand-gradient text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Surgical & Operation Theatres
          </button>
          <button
            onClick={() => setActiveTab('critical')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'critical'
                ? 'hospital-brand-gradient text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Emergency & Critical Care
          </button>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredFacilities.map(fac => (
            <div
              key={fac.id}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-sky-50/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                    {getIcon(fac.iconName)}
                  </div>
                  {fac.badge && (
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white text-sky-800 border border-sky-200 shadow-2xs">
                      {fac.badge}
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-extrabold text-slate-900">
                  {fac.title}
                </h4>
                {fac.titleMr && (
                  <div className="text-xs font-bold text-sky-700 mb-2">
                    {fac.titleMr}
                  </div>
                )}
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {fac.description}
                </p>
              </div>

              {fac.photoCaption && (
                <div className="pt-2 text-[11px] font-semibold text-cyan-800 border-t border-slate-200/80">
                  ✓ {fac.photoCaption}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
