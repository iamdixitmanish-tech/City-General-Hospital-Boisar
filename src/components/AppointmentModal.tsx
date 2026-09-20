import { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, CheckCircle, Clock, AlertCircle, Sparkles } from 'lucide-react';
import { DOCTORS_LIST, HOSPITAL_INFO } from '../hospitalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDoctorId?: string;
}

export const AppointmentModal = ({ isOpen, onClose, defaultDoctorId }: AppointmentModalProps) => {
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(
    defaultDoctorId || 'dr-rohan-kore'
  );
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [visitType, setVisitType] = useState<'consulting' | 'followUp' | 'emergency'>('consulting');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultDoctorId) {
      setSelectedDoctorId(defaultDoctorId);
    }
  }, [defaultDoctorId]);

  if (!isOpen) return null;

  const currentDoctor = DOCTORS_LIST.find(d => d.id === selectedDoctorId) || DOCTORS_LIST[0];

  const getFeeDisplay = () => {
    if (currentDoctor.fees.isPlaceholder) {
      return {
        amount: 'Rate upon inquiry',
        isPlaceholder: true,
        note: 'Not listed on the OPD wall board'
      };
    }

    if (visitType === 'consulting') {
      return { amount: `₹${currentDoctor.fees.consulting}`, isPlaceholder: false, note: 'Standard OPD Consultation' };
    }
    if (visitType === 'followUp') {
      return { amount: `₹${currentDoctor.fees.followUp ?? currentDoctor.fees.consulting}`, isPlaceholder: false, note: 'Follow-up visit tariff' };
    }
    return { amount: `₹${currentDoctor.fees.emergency ?? currentDoctor.fees.consulting}`, isPlaceholder: false, note: 'Emergency casualty tariff' };
  };

  const feeInfo = getFeeDisplay();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setPatientName('');
    setPatientPhone('');
    setPreferredDate('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border-2 border-sky-300 overflow-hidden relative">
        
        {/* Header */}
        <div className="hospital-brand-gradient text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-cyan-200">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight">Book OPD Consultation</h3>
              <p className="text-xs text-sky-200">City General Hospital & I.C.U. • Boisar</p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-black text-slate-900">
                Appointment Request Logged
              </h4>
              <p className="text-sm text-slate-600 max-w-xs mx-auto">
                Thank you, <span className="font-bold text-slate-900">{patientName}</span>. Your request for <span className="font-bold text-sky-700">{currentDoctor.name}</span> has been noted.
              </p>
              
              <div className="bg-sky-50 rounded-xl p-4 border border-sky-200 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Doctor:</span>
                  <span className="font-bold text-slate-900">{currentDoctor.name} ({currentDoctor.department})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Applicable Fee:</span>
                  <span className="font-bold text-sky-800">{feeInfo.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Patient Contact:</span>
                  <span className="font-bold text-slate-900">{patientPhone}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`tel:${HOSPITAL_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="w-full py-3 rounded-xl hospital-brand-gradient text-white text-xs font-bold shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Reception To Confirm: {HOSPITAL_INFO.primaryPhone}</span>
                </a>
                <button
                  onClick={resetAndClose}
                  className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Doctor Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Select Doctor / Department
                </label>
                <select
                  value={selectedDoctorId}
                  onChange={(e) => setSelectedDoctorId(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                >
                  {DOCTORS_LIST.map(doc => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name} — {doc.department} {doc.degree ? `(${doc.degree})` : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Consultation Fee Badge directly calculated from board */}
              <div className="p-3.5 rounded-xl bg-sky-50/80 border border-sky-200 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold text-sky-800 uppercase">
                    Official Tariff: {visitType}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {feeInfo.note}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-black text-slate-900">
                    {feeInfo.amount}
                  </div>
                  {feeInfo.isPlaceholder && (
                    <span className="text-[10px] text-amber-700 font-semibold bg-amber-100 px-1.5 py-0.5 rounded-sm">
                      Placeholder
                    </span>
                  )}
                </div>
              </div>

              {/* Visit Type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Visit Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setVisitType('consulting')}
                    className={`py-2 px-1 text-center rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      visitType === 'consulting'
                        ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    New Consultation
                  </button>
                  <button
                    type="button"
                    onClick={() => setVisitType('followUp')}
                    className={`py-2 px-1 text-center rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      visitType === 'followUp'
                        ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    Follow-Up
                  </button>
                  <button
                    type="button"
                    onClick={() => setVisitType('emergency')}
                    className={`py-2 px-1 text-center rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      visitType === 'emergency'
                        ? 'bg-red-600 text-white border-red-600 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    Emergency
                  </button>
                </div>
              </div>

              {/* Patient Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Patient Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Contact Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      placeholder="10-digit mobile"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Preferred Appointment Date
                </label>
                <input
                  type="date"
                  required
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl hospital-brand-gradient text-white text-xs font-bold shadow-md hover:brightness-110 active:scale-98 transition-all cursor-pointer"
                >
                  Submit OPD Appointment Request
                </button>
              </div>

              <div className="text-center pt-1">
                <a
                  href={`tel:${HOSPITAL_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="text-xs text-sky-700 font-bold hover:underline"
                >
                  Or call directly for immediate slot: {HOSPITAL_INFO.primaryPhone}
                </a>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
