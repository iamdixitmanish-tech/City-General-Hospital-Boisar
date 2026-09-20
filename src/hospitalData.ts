import { Doctor, Review, Facility, OPDRecord } from './types';

export const HOSPITAL_INFO = {
  name: "City General Hospital",
  suffix: "& I.C.U.",
  tagline: "Keeping You Well",
  marathiName: "सिटी जनरल हॉस्पिटल & आय.सी.यू.",
  marathiTagline: "डॉ. रोहन कोरे",
  rating: 4.9,
  reviewCount: 171,
  timing: "Open 24 hours",
  emergencyAvailability: "24-Hour Emergency & ICU",
  primaryPhone: "072649 51994",
  secondaryPhone: "+91 98236 42809",
  fullAddress: "Khodaram, Boisar - Tarapur Rd, opp. Harmony Plaza, near SBI, Baugh, Boisar, Palghar, Maharashtra 401501",
  landmarkArea: "Ashutosh Nagar-Boisar, Palghar (Tarapur Road)",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=City+General+Hospital+Boisar+Maharashtra+401501",
  chemistName: "City Chemist (औषधांचे दुकान / Pharmacy)",
  placeholders: {
    email: "[Placeholder: Add Official Hospital Email Address]",
    aboutUsDetailed: "[Placeholder: Add Hospital History / Founding Story & Mission Statement]",
    bedCapacity: "[Placeholder: Add Total Bed Count & Room Types (Deluxe, Semi-Private, General Ward)]",
    opdTimings: "[Placeholder: Add Exact Morning/Evening OPD Timing Slots for Each Doctor]",
    ambulanceContact: "[Placeholder: Add Dedicated Direct Ambulance Cell Number if separate]"
  }
};

export const OPD_TABLE_RECORDS: OPDRecord[] = [
  {
    department: "ORTHOPEDIC",
    doctorName: "DR. A.G DHADA",
    consulting: 500,
    followUp: 300,
    emergency: 700
  },
  {
    department: "ORTHOPEDIC",
    doctorName: "DR. ROHAN KORE",
    consulting: 300,
    followUp: 200,
    emergency: 500
  },
  {
    department: "PHYSICIAN",
    doctorName: "DR. PRAKASH RAUT",
    consulting: 300,
    followUp: 200,
    emergency: 500
  },
  {
    department: "GENERAL SURGEON",
    doctorName: "DR. P.K YADAV",
    consulting: 400,
    followUp: 300,
    emergency: 500
  }
];

export const DOCTORS_LIST: Doctor[] = [
  {
    id: "dr-rohan-kore",
    name: "Dr. Rohan Kore",
    nameMr: "डॉ. रोहन कोरे",
    degree: "M.S. Ortho",
    department: "Orthopedics & Spine",
    specialties: [
      "Fracture Management",
      "Orthopedic Surgery",
      "Joint Replacement",
      "Spine Surgery"
    ],
    specialtiesMr: [
      "फ्रॅक्चर",
      "ऑर्थोपेडिक",
      "जॉइंट रिप्लेसमेंट",
      "स्पाईन"
    ],
    fees: {
      consulting: 300,
      followUp: 200,
      emergency: 500
    }
  },
  {
    id: "dr-ag-dhada",
    name: "Dr. A.G. Dhada",
    department: "Orthopedic",
    specialties: [
      "Orthopedic Consultation",
      "Bone & Joint Disorders",
      "Emergency Trauma Care"
    ],
    fees: {
      consulting: 500,
      followUp: 300,
      emergency: 700
    }
  },
  {
    id: "dr-prakash-raut",
    name: "Dr. Prakash Raut",
    nameMr: "डॉ. प्रकाश राऊत",
    degree: "M.D. Med (Physician)",
    department: "Internal Medicine & Physician",
    specialties: [
      "Diabetes (मधुमेह)",
      "Hypertension / Blood Pressure (उच्च रक्तदाब)",
      "Asthma (दमा)",
      "Tuberculosis (टी.बी.)",
      "Fits / Convulsions (आकडी)",
      "Paralysis & Stroke (पक्षाघात)",
      "Heart Conditions (हृदय रोग)",
      "Liver & Kidney Diseases (लिव्हर, किडनी चे आजार)",
      "Infectious Diseases (संसर्गजन्य रोग)",
      "Thyroid Disorders (थायरॉईड)"
    ],
    specialtiesMr: [
      "मधुमेह",
      "उच्च रक्तदाब",
      "दमा",
      "टी.बी.",
      "आकडी",
      "पक्षाघात",
      "हृदय रोग",
      "लिव्हर, किडनी चे आजार",
      "संसर्गजन्य रोग",
      "थायरॉईड"
    ],
    fees: {
      consulting: 300,
      followUp: 200,
      emergency: 500
    }
  },
  {
    id: "dr-pk-yadav",
    name: "Dr. P.K. Yadav",
    department: "General Surgery",
    specialties: [
      "General Surgery Procedures",
      "Minor & Major Surgical Interventions",
      "Trauma & Emergency Care"
    ],
    fees: {
      consulting: 400,
      followUp: 300,
      emergency: 500
    }
  },
  {
    id: "dr-manisha-jadhav",
    name: "Dr. Manisha Jadhav",
    nameMr: "डॉ. मनिषा जाधव",
    degree: "M.B.B.S., D.O.R.L.",
    department: "ENT (कान नाक घसा तज्ज्ञ)",
    specialties: [
      "Ear, Nose & Throat Disorders (कान नाक घशा चे आजार)",
      "Deafness & Hearing Issues (बहिरेपणा)",
      "Nasal & Airway Obstructions (अडथळे)",
      "Allergies (ॲलर्जी)",
      "Voice Disorders (आवाजाचे विकार)",
      "Endoscopy Examination & Surgery (दुर्बिणी द्वारे तपासणी व सर्जरी)",
      "Micro Surgery (मायक्रो सर्जरी)"
    ],
    specialtiesMr: [
      "कान नाक घशा चे आजार",
      "बहिरेपणा",
      "अडथळे",
      "ॲलर्जी",
      "आवाजाचे विकार",
      "दुर्बिणी द्वारे तपासणी व सर्जरी",
      "मायक्रो सर्जरी"
    ],
    fees: {
      consulting: "[Placeholder: Rate to be confirmed]",
      isPlaceholder: true
    }
  },
  {
    id: "dr-khushboo-kore",
    name: "Dr. Khushboo Kore",
    nameMr: "डॉ. खुशबू कोरे",
    degree: "M.B.B.S., D.A.",
    department: "Anaesthesiology & ICU",
    specialties: [
      "Anaesthesiologist (भूलतज्ज्ञ)",
      "ICU Specialist (आय.सी.यू. विशेषतज्ज्ञ)",
      "Critical Care Monitoring",
      "Post-Operative Recovery"
    ],
    fees: {
      consulting: "[Placeholder: In-patient / ICU consultation fee]",
      isPlaceholder: true
    }
  },
  {
    id: "dr-jaya-singh",
    name: "Dr. Jaya Singh",
    nameMr: "डॉ. जया सिंह",
    department: "Physiotherapy (फिजिओथेरपिस्ट)",
    specialties: [
      "Post-Surgical Rehabilitation",
      "Orthopedic Physiotherapy",
      "Mobility & Pain Recovery"
    ],
    scheduleNote: "Mon to Sat (सोमवार ते शनिवार)",
    fees: {
      consulting: "[Placeholder: Physiotherapy session fee]",
      isPlaceholder: true
    }
  }
];

export const HOSPITAL_FACILITIES: Facility[] = [
  {
    id: "icu",
    title: "Intensive Care Unit (I.C.U.)",
    titleMr: "आय.सी.यू.",
    description: "Dedicated critical care unit equipped for comprehensive patient monitoring, life-support interventions, and emergency resuscitation under specialized medical supervision.",
    badge: "24/7 Monitored",
    iconName: "Activity",
    photoCaption: "Supervised by Dr. Khushboo Kore (ICU Specialist)"
  },
  {
    id: "major-ot",
    title: "Operations Theatre (Major OT)",
    titleMr: "ऑपरेशन थिएटर",
    description: "Equipped with advanced C-Arm fluoroscopy imaging, modern anaesthesia station, sterile surgical table, overhead luminaires, and monitoring systems for joint replacement, spine, and complex surgeries.",
    badge: "Advanced Sterile Suite",
    iconName: "ShieldAlert",
    photoCaption: "Features C-Arm & multi-parameter surgical monitors"
  },
  {
    id: "minor-ot",
    title: "Minor Operation Theatre",
    titleMr: "मायनर ऑपरेशन थिएटर",
    description: "Rapid-access minor surgical and procedural suite equipped with overhead clinical lights, sterile surgical equipment, and recovery stations for day-care and emergency procedures.",
    badge: "Rapid Procedures",
    iconName: "Stethoscope",
    photoCaption: "Equipped for minor trauma, suturing, and procedures"
  },
  {
    id: "reception",
    title: "24/7 Reception & Patient Helpdesk",
    titleMr: "रिसेप्शन & मदत कक्ष",
    description: "Centralized admitting desk, comfortable waiting area, round-the-clock emergency triage, and quiet patient corridors ensuring prompt assistance upon arrival.",
    badge: "Always Open",
    iconName: "Clock",
    photoCaption: "Reception desk with immediate doctor coordination"
  },
  {
    id: "general-surgery",
    title: "General & Laparoscopic Surgery",
    titleMr: "जनरल सर्जरी",
    description: "Comprehensive surgical consultations and operative management headed by Dr. P.K. Yadav.",
    badge: "Consulting: ₹400",
    iconName: "Scissors",
  },
  {
    id: "uro-surgery",
    title: "Uro Surgery",
    titleMr: "यूरो सर्जरी",
    description: "Specialized urological surgical services for kidney, bladder, and urinary tract treatments.",
    badge: "Specialized",
    iconName: "HeartPulse",
  },
  {
    id: "neurosurgery",
    title: "Neurosurgery",
    titleMr: "न्यूरोसर्जरी",
    description: "Advanced neurological and spinal surgical interventions in coordination with intensive care backup.",
    badge: "Critical Care Supported",
    iconName: "Brain",
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy Rehabilitation",
    titleMr: "फिजिओथेरपी",
    description: "Dedicated physical therapy wing operated by Dr. Jaya Singh for musculoskeletal recovery, orthopedic rehab, and mobility training.",
    badge: "Mon to Sat",
    iconName: "Dumbbell",
  },
  {
    id: "ambulance",
    title: "Ambulance Service",
    titleMr: "रुग्णवाहिका सेवा",
    description: "24-hour round-the-clock emergency patient transport across Boisar, Tarapur, Palghar, and surrounding industrial zones.",
    badge: "24 Hours Active",
    iconName: "Truck",
  },
  {
    id: "pharmacy",
    title: "City Chemist (In-House Pharmacy)",
    titleMr: "औषधांचे दुकान",
    description: "On-premises pharmacy stocking essential surgical medicines, emergency formulations, and orthopedic supplies for immediate patient access.",
    badge: "On-Premises",
    iconName: "Pill",
  }
];

export const MEDICLAIM_TPA_LIST = [
  { name: "ICICI Lombard", type: "Insurance" },
  { name: "HDFC ERGO", type: "Insurance" },
  { name: "Reliance", type: "Insurance" },
  { name: "Star Health", type: "Health Insurance" },
  { name: "Medi Assist", type: "TPA" },
  { name: "Raksha TPA", type: "TPA" },
  { name: "Paramount TPA", type: "TPA" },
  { name: "Universal Sompo", type: "Insurance" },
  { name: "Health India", type: "TPA" },
  { name: "Niva Bupa", type: "Health Insurance" },
  { name: "Future Generali", type: "Insurance" },
  { name: "FHPL", type: "TPA" },
  { name: "Go Digit", type: "Insurance" },
  { name: "Vidal TPA", type: "TPA" },
];

export const GOOGLE_REVIEWS_LIST: Review[] = [
  {
    author: "Shubham Patil",
    rating: 5,
    timeAgo: "1 year ago",
    text: "Well service best doctor & staff & treatment also betrer"
  },
  {
    author: "Poonam Chavhan",
    rating: 5,
    timeAgo: "5 months ago",
    text: "Very Helpful staff and clean environment."
  },
  {
    author: "P. (Verified Patient)",
    rating: 5,
    timeAgo: "Google Reviewer",
    text: "I really appreciate his work done towards me Thanks a lot for your support......"
  }
];
