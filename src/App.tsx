import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OpdConsultationSection } from './components/OpdConsultationSection';
import { FacilitiesShowcase } from './components/FacilitiesShowcase';
import { CashlessMediclaimSection } from './components/CashlessMediclaimSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { LocationAndContact } from './components/LocationAndContact';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { PlaceholdersRegistryModal } from './components/PlaceholdersModal';
import { FloatingEmergencyButton } from './components/FloatingEmergencyButton';

export default function App() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | undefined>(undefined);
  const [placeholdersOpen, setPlaceholdersOpen] = useState(false);

  const handleOpenAppointment = (doctorId?: string) => {
    setSelectedDoctorId(doctorId);
    setAppointmentOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-cyan-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        onOpenAppointment={handleOpenAppointment}
        onOpenPlaceholders={() => setPlaceholdersOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section matching Hospital Building Colors & Facade */}
        <Hero onOpenAppointment={() => handleOpenAppointment()} />

        {/* OPD Consultation & Doctors Directory */}
        <OpdConsultationSection
          onSelectDoctor={(docId) => handleOpenAppointment(docId)}
          onOpenPlaceholders={() => setPlaceholdersOpen(true)}
        />

        {/* Infrastructure & Photo Tour Facilities */}
        <FacilitiesShowcase />

        {/* Cashless Mediclaim & Insurance Partners */}
        <CashlessMediclaimSection
          onOpenAppointment={() => handleOpenAppointment()}
        />

        {/* Verified Google Reviews & 4.9 Rating */}
        <GoogleReviewsSection />

        {/* Hospital Location, Timings & Direction Guides */}
        <LocationAndContact
          onOpenPlaceholders={() => setPlaceholdersOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenPlaceholders={() => setPlaceholdersOpen(true)}
      />

      {/* Floating Action Button for Instant Emergency Dial & Appointment */}
      <FloatingEmergencyButton
        onOpenAppointment={() => handleOpenAppointment()}
      />

      {/* Interactive Appointment Modal with Fee Calculation */}
      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
        defaultDoctorId={selectedDoctorId}
      />

      {/* Placeholders Registry Modal (Adherence to prompt) */}
      <PlaceholdersRegistryModal
        isOpen={placeholdersOpen}
        onClose={() => setPlaceholdersOpen(false)}
      />
    </div>
  );
}
