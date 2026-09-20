import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Stethoscope, 
  Calendar, 
  Phone, 
  HelpCircle, 
  ShieldCheck, 
  Info, 
  Activity, 
  Sparkles,
  Search
} from 'lucide-react';
import { DOCTORS_LIST, OPD_TABLE_RECORDS, HOSPITAL_INFO } from '../hospitalData';
import { Doctor } from '../types';

interface OpdConsultationSectionProps {
  onSelectDoctor: (doctorId: string) => void;
  onOpenPlaceholders: () => void;
}

export const OpdConsultationSection = ({ onSelectDoctor, onOpenPlaceholders }: OpdConsultationSectionProps) => {
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const departments = [
    { id: 'all', label: 'All Specialists' },
    { id: 'orthopedic', label: 'Orthopedic & Spine' },
    { id: 'physician', label: 'Physician & Medicine' },
    { id: 'surgery', label: 'General Surgery' },
    { id: 'ent', label: 'ENT (कान नाक घसा)' },
    { id: 'icu', label: 'ICU & Anaesthesia' },
    { id: 'physiotherapy', label: 'Physiotherapy' }
  ];

  const filteredDoctors = DOCTORS_LIST.filter(doc => {
    const matchesDept = 
      selectedDept === 'all' ? true :
      selectedDept === 'orthopedic' ? doc.department.toLowerCase().includes('orthopedic') :
      selectedDept === 'physician' ? doc.department.toLowerCase().includes('physician') || doc.department.toLowerCase().includes('medicine') :
      selectedDept === 'surgery' ? doc.department.toLowerCase().includes('surgeon') || doc.department.toLowerCase().includes('surgery') :
      selectedDept === 'ent' ? doc.department.toLowerCase().includes('ent') :
      selectedDept === 'icu' ? doc.department.toLowerCase().includes('icu') || doc.department.toLowerCase().includes('anaesthesiology') :
      selectedDept === 'physiotherapy' ? doc.department.toLowerCase().includes('physiotherapy') : true;

    const matchesSearch = 
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (doc.nameMr && doc.nameMr.includes(searchQuery)) ||
      doc.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (doc.specialtiesMr && doc.specialtiesMr.some(s => s.includes(searchQuery)));

    return matchesDept && matchesSearch;
  });

  return (
    <section id="opd-consultation" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800 border border-sky-300 mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-sky-600" />
            <span>Official Hospital Medical Board</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            OPD Consultation & Doctors
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Consultation fee structure and specialist details transcribed directly from the official City General Hospital consultation board.
          </p>
        </div>

        {/* 1. Exact OPD Rate Card (Signboard Replica) */}
        <div id="rate-card" className="mb-16">
          <div className="bg-white rounded-2xl border-2 border-sky-300 shadow-xl overflow-hidden">
            {/* Board Header styled after the wall board */}
            <div className="hospital-brand-gradient text-white p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-cyan-200">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-sky-200 uppercase tracking-wider">
                    Official Signboard Record
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                    OPD CONSULTATION FEE SCHEDULE
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-3 py-1 bg-white/20 rounded-full font-bold text-white">
                  Room Consultation Rates
                </span>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-sky-50/80 text-sky-950 font-bold border-b border-sky-200 text-xs uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-5 py-4">Department</th>
                    <th scope="col" className="px-5 py-4">Doctor Name</th>
                    <th scope="col" className="px-5 py-4 text-center">Consulting</th>
                    <th scope="col" className="px-5 py-4 text-center">Follow Up</th>
                    <th scope="col" className="px-5 py-4 text-center">Emergency</th>
                    <th scope="col" className="px-5 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {OPD_TABLE_RECORDS.map((rec, idx) => (
                    <tr key={idx} className="hover:bg-sky-50/50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-800">
                        <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                          {rec.department}
                        </span>
                      </td>
                      <td className="px-5 py-4 font-extrabold text-sky-900">
                        {rec.doctorName}
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className="inline-block px-3 py-1 font-bold text-slate-900 bg-sky-100/60 rounded-lg">
                          ₹{rec.consulting}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-center text-slate-600 font-semibold">
                        ₹{rec.followUp}
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className="font-bold text-red-600">
                          ₹{rec.emergency}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <button
                          onClick={() => {
                            const matched = DOCTORS_LIST.find(d => d.name.toUpperCase().includes(rec.doctorName.replace('DR. ', '').trim()));
                            onSelectDoctor(matched ? matched.id : 'dr-rohan-kore');
                          }}
                          className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                        >
                          Book OPD
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Note & Placeholder reminder */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-sky-600 shrink-0" />
                <span>
                  Exact rates reproduced from the in-hospital OPD tariff board. Follow-up and emergency consultations applicable per hospital guidelines.
                </span>
              </div>
              <button
                onClick={onOpenPlaceholders}
                className="text-sky-700 hover:underline font-semibold"
              >
                Missing doctor fees marked as placeholders &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* 2. Department Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-2 md:pb-0 scrollbar-none">
            {departments.map(dept => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedDept === dept.id
                    ? 'hospital-brand-gradient text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search doctor or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        {/* 3. Doctors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map(doctor => (
            <motion.div
              key={doctor.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border-2 border-sky-100 p-6 shadow-sm hover:border-sky-300 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-sky-100 text-sky-800">
                        {doctor.department}
                      </span>
                      {doctor.degree && (
                        <span className="text-xs font-semibold text-slate-500">
                          {doctor.degree}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mt-2">
                      {doctor.name}
                    </h3>
                    {doctor.nameMr && (
                      <div className="text-xs font-bold text-sky-700 mt-0.5">
                        {doctor.nameMr}
                      </div>
                    )}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                </div>

                {/* Specialties from photos */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Specialties & Conditions
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {doctor.specialties.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Fees and Action */}
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase">Consulting Fee</div>
                    {doctor.fees.isPlaceholder ? (
                      <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                        <HelpCircle className="w-3 h-3 text-amber-600" />
                        <span>Not listed on OPD board</span>
                      </div>
                    ) : (
                      <div className="text-lg font-black text-slate-900">
                        ₹{doctor.fees.consulting}
                        <span className="text-xs font-normal text-slate-500 ml-1">/ visit</span>
                      </div>
                    )}
                  </div>

                  {doctor.scheduleNote && (
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
                      {doctor.scheduleNote}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectDoctor(doctor.id)}
                    className="flex-1 py-2.5 rounded-lg hospital-brand-gradient text-white text-xs font-bold shadow-xs hover:brightness-110 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-cyan-200" />
                    <span>Book Appointment</span>
                  </button>
                  <a
                    href={`tel:${HOSPITAL_INFO.primaryPhone.replace(/\s+/g, '')}`}
                    className="p-2.5 rounded-lg bg-sky-50 border border-sky-200 text-sky-700 hover:bg-sky-100 transition-colors"
                    title="Call Hospital"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
