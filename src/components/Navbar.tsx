import { useState } from 'react';
import { Phone, Clock, MapPin, Star, Menu, X, Calendar, ShieldCheck } from 'lucide-react';
import { HOSPITAL_INFO } from '../hospitalData';

interface NavbarProps {
  onOpenAppointment: (doctorId?: string) => void;
  onOpenPlaceholders: () => void;
}

export const Navbar = ({ onOpenAppointment, onOpenPlaceholders }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-xs">
      {/* Top emergency announcement bar */}
      <div className="bg-slate-900 text-white text-xs sm:text-sm px-4 py-2 border-b border-sky-900">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-bold px-2 py-0.5 rounded-full bg-red-600 text-white text-xs tracking-wide uppercase animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              24/7 Emergency & ICU
            </span>
            <span className="hidden sm:inline text-sky-200 text-xs">
              Boisar - Tarapur Rd, Palghar
            </span>
            <span className="text-amber-300 font-semibold inline-flex items-center gap-1 text-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 inline" />
              4.9 ★ ({HOSPITAL_INFO.reviewCount} Google Reviews)
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenPlaceholders}
              className="text-sky-300 hover:text-white text-xs underline cursor-pointer decoration-dotted hidden md:inline"
            >
              Info Placeholders List
            </button>
            <a
              href={`tel:${HOSPITAL_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 font-bold text-sky-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{HOSPITAL_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-md border border-sky-100 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
              <img
                src="/hospital-emblem.svg"
                alt="City General Hospital & I.C.U. Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  City General Hospital
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-bold text-sky-800 bg-sky-100 rounded-md border border-sky-300">
                  & I.C.U.
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="text-sky-700 font-semibold">{HOSPITAL_INFO.tagline}</span>
                <span>•</span>
                <span className="text-slate-600 font-medium">डॉ. रोहन कोरे</span>
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="#opd-consultation" className="hover:text-sky-600 transition-colors">
              OPD & Doctors
            </a>
            <a href="#rate-card" className="hover:text-sky-600 transition-colors">
              Consultation Fees
            </a>
            <a href="#facilities" className="hover:text-sky-600 transition-colors">
              Facilities & OT
            </a>
            <a href="#cashless-mediclaim" className="hover:text-sky-600 transition-colors">
              Cashless Mediclaim
            </a>
            <a href="#reviews" className="hover:text-sky-600 transition-colors">
              Reviews
            </a>
            <a href="#location" className="hover:text-sky-600 transition-colors">
              Location
            </a>
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenAppointment()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg hospital-brand-gradient text-white text-sm font-semibold shadow-md hover:brightness-110 active:scale-98 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-cyan-200" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenAppointment()}
              className="p-2 rounded-lg bg-sky-600 text-white text-xs font-semibold sm:hidden"
            >
              Book OPD
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-sky-100 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 text-sm font-semibold text-slate-800">
            <a
              href="#opd-consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-50 hover:bg-sky-50 hover:text-sky-700"
            >
              OPD Doctors
            </a>
            <a
              href="#rate-card"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-50 hover:bg-sky-50 hover:text-sky-700"
            >
              Rate Card
            </a>
            <a
              href="#facilities"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-50 hover:bg-sky-50 hover:text-sky-700"
            >
              Operation Theatres
            </a>
            <a
              href="#cashless-mediclaim"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-50 hover:bg-sky-50 hover:text-sky-700"
            >
              Cashless TPA
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-50 hover:bg-sky-50 hover:text-sky-700"
            >
              Google Reviews
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-50 hover:bg-sky-50 hover:text-sky-700"
            >
              Map & Location
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full py-3 rounded-lg hospital-brand-gradient text-white text-center font-bold text-sm shadow-md"
            >
              Book OPD Appointment
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlaceholders();
              }}
              className="w-full py-2 text-xs text-sky-700 font-semibold bg-sky-50 rounded-lg text-center"
            >
              View Data Placeholders
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
