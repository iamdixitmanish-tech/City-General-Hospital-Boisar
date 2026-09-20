import { useState } from 'react';
import { ShieldCheck, Search, Phone, CheckCircle2, HelpCircle } from 'lucide-react';
import { MEDICLAIM_TPA_LIST, HOSPITAL_INFO } from '../hospitalData';

interface CashlessMediclaimSectionProps {
  onOpenAppointment: () => void;
}

export const CashlessMediclaimSection = ({ onOpenAppointment }: CashlessMediclaimSectionProps) => {
  const [search, setSearch] = useState('');

  const filteredProviders = MEDICLAIM_TPA_LIST.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="cashless-mediclaim" className="py-16 lg:py-24 bg-gradient-to-b from-sky-50/50 to-white border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Official TPA & Insurance Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Mediclaim & Cashless Hospitalization
          </h2>
          <p className="mt-3 text-base text-slate-600">
            City General Hospital facilitates cashless treatment across leading insurance companies and Third-Party Administrators (TPAs) as listed on our board.
          </p>
        </div>

        {/* Cashless Banner Box */}
        <div className="bg-white rounded-2xl border-2 border-emerald-300/80 shadow-xl p-6 sm:p-8 mb-10">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                Hassle-Free Approval Support
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Accepted Insurance & TPA Networks
              </h3>
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search your insurance (e.g. Star, HDFC)..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Providers Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 pt-6">
            {filteredProviders.map((provider, index) => (
              <div
                key={index}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/40 transition-all flex flex-col justify-between text-center group"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs text-slate-900">
                  {provider.name}
                </div>
                <div className="text-[10px] text-slate-400 font-semibold mt-1">
                  {provider.type}
                </div>
              </div>
            ))}
          </div>

          {filteredProviders.length === 0 && (
            <div className="text-center py-8 text-sm text-slate-500">
              No matching TPA found. Please call our hospital desk to verify your specific policy coverage.
            </div>
          )}

          {/* Support Strip */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 bg-sky-50/50 p-4 rounded-xl border border-sky-100">
            <div className="space-y-1">
              <div className="text-xs font-bold text-sky-900">
                Need assistance with Mediclaim pre-authorization?
              </div>
              <div className="text-xs text-slate-600">
                Carry your Health Card, Policy Copy, and Patient Aadhar/Govt ID to the reception desk.
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${HOSPITAL_INFO.primaryPhone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Mediclaim Desk</span>
              </a>
              <button
                onClick={onOpenAppointment}
                className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all cursor-pointer"
              >
                Admission Inquiry
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
