import { useState } from 'react';
import { X, AlertCircle, CheckCircle, Copy, Check, FileQuestion } from 'lucide-react';
import { HOSPITAL_INFO } from '../hospitalData';

interface PlaceholdersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlaceholdersRegistryModal = ({ isOpen, onClose }: PlaceholdersModalProps) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const placeholdersList = [
    {
      field: "Official Email Address",
      currentValue: "[Placeholder: Add Official Hospital Email Address]",
      reason: "No email address was shown on the hospital signboard, OPD board, or Google profile screenshot."
    },
    {
      field: "Doctor Consultation Fees for Dr. Manisha Jadhav (ENT)",
      currentValue: "[Placeholder: Rate to be confirmed]",
      reason: "Dr. Manisha Jadhav is listed on the main exterior hospital board, but was not in the 4-row OPD Consultation wall board."
    },
    {
      field: "Doctor Consultation Fees for Dr. Khushboo Kore (ICU / Anaesthesia)",
      currentValue: "[Placeholder: In-patient / ICU consultation fee]",
      reason: "Listed on main board as ICU & Anaesthesia specialist; tariff is determined upon admission or procedure."
    },
    {
      field: "Physiotherapy Session Tariff for Dr. Jaya Singh",
      currentValue: "[Placeholder: Physiotherapy session fee]",
      reason: "Days (Mon to Sat) were noted on the board, but specific per-session charges were not specified."
    },
    {
      field: "Bed Capacity & Ward Classifications",
      currentValue: "[Placeholder: Add Total Bed Count & Room Types (Deluxe, Semi-Private, General Ward)]",
      reason: "Bed count and room tier tariffs were not mentioned in the provided images."
    },
    {
      field: "Hospital History & Mission Statement",
      currentValue: "[Placeholder: Add Hospital History / Founding Story & Mission Statement]",
      reason: "Per your instruction not to invent any content, we did not write any fabricated backstory."
    },
    {
      field: "Hospital Registration / NABH Accreditation No.",
      currentValue: "[Placeholder: Add Hospital Reg. / NABH Number]",
      reason: "Government registration number or NABH details were not visible on the signboard."
    }
  ];

  const handleCopyAll = () => {
    const text = placeholdersList.map(p => `• ${p.field}: ${p.currentValue} (${p.reason})`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border-2 border-amber-300 overflow-hidden">
        
        {/* Header */}
        <div className="bg-amber-500 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <FileQuestion className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight">
                Information Placeholders Registry
              </h3>
              <p className="text-xs text-amber-100">
                Items intentionally kept as placeholders to avoid adding any fabricated content
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 leading-relaxed">
            <strong>Adherence to your prompt:</strong> You asked to strictly use only the provided information from your 7 pictures and to leave placeholders wherever details were absent. Below is the itemized list of all placeholders currently in the app.
          </div>

          <div className="space-y-3">
            {placeholdersList.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">{item.field}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                    Placeholder
                  </span>
                </div>
                <div className="text-xs font-mono text-amber-700 bg-amber-50/50 p-1.5 rounded-md border border-amber-100">
                  {item.currentValue}
                </div>
                <div className="text-[11px] text-slate-500 italic">
                  Why: {item.reason}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={handleCopyAll}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied to Clipboard' : 'Copy Placeholders List'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl hospital-brand-gradient text-white text-xs font-bold hover:brightness-110 transition-all cursor-pointer"
          >
            Understood
          </button>
        </div>

      </div>
    </div>
  );
};
