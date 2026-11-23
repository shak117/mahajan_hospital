export interface HighlightItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface DepartmentItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  image: string;
  iconName: string;
}

export interface FacilityItem {
  id: string;
  name: string;
  category: 'Critical Care' | 'Surgical & Robotics' | 'Diagnostic' | 'Patient Comfort';
  description: string;
  highlight: string;
  image?: string;
}

export interface DirectorItem {
  name: string;
  title: string;
  qualifications: string;
  expertise: string[];
  bio: string;
  image: string;
}

export const HOSPITAL_INFO = {
  name: "Mahajan Multispecialist Hospital",
  locationName: "Satara, Maharashtra",
  tagline: "Advancing Healthcare. Building Trust. Transforming Lives.",
  heroSupportingText: "Advanced medical expertise, modern technology and compassionate care for every patient.",
  editorialHeadline: "Healthcare, with a deeper sense of care.",
  editorialIntro: "Mahajan Multispecialist Hospital is a multidisciplinary healthcare institution situated at Powai Naka, Satara. We combine cutting-edge robotic surgical capabilities, 24/7 dedicated trauma care, and ultramodern ICU infrastructure with an uncompromising ethical commitment to compassionate patient recovery.",
  address: {
    line1: "529/A/13/15, Parasnis Colony",
    line2: "Powai Naka",
    city: "Satara",
    state: "Maharashtra",
    pincode: "415001",
    country: "India",
    full: "529/A/13/15, Parasnis Colony, Powai Naka, Satara – 415001, Maharashtra, India."
  },
  contact: {
    opdPhone: "+91 9075023025",
    opdPhoneClean: "919075023025",
    emergencyPhone: "02162 232299",
    emergencyPhoneClean: "02162232299",
    email: "mahajanhealthcare@outlook.com",
    whatsappUrl: "https://wa.me/919075023025?text=Hello%20Mahajan%20Hospital%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mahajan+Multispecialist+Hospital+Powai+Naka+Satara"
  },
  timings: {
    opd: "Monday – Saturday: 9:00 AM – 8:00 PM",
    emergency: "24 Hours / 7 Days a Week",
    visitingHours: "10:00 AM – 12:00 PM & 5:00 PM – 7:00 PM"
  }
};

export const HOSPITAL_HIGHLIGHTS: HighlightItem[] = [
  {
    value: "15+",
    label: "Medical Specialists",
    sublabel: "Experienced consultants across surgical and physician specialities"
  },
  {
    value: "10K+",
    label: "Patients Treated",
    sublabel: "Lives healed with clinical precision and empathetic attention"
  },
  {
    value: "24/7",
    label: "Emergency & Casualty",
    sublabel: "Continuous golden-hour trauma response and critical care backup"
  },
  {
    value: "15+",
    label: "Years Legacy",
    sublabel: "Trusted cornerstone of healthcare excellence in Satara district"
  }
];

export const DIRECTORS: DirectorItem[] = [
  {
    name: "Dr. Abhishek Suresh Mahajan",
    title: "Consultant Orthopaedic Surgeon & Managing Director",
    qualifications: "MBBS, MS (Orth), DNB, FCPS, MCh (Orth), MNAMS, FICS (USA), FACS (USA), FRSPH (UK), MRCS (UK), MBA",
    expertise: [
      "Trauma Care",
      "Arthroscopy",
      "Joint Replacement",
      "Robotic Joint Replacement Surgery",
      "Complex Orthopaedic Procedures"
    ],
    bio: "Dr. Abhishek Suresh Mahajan is an internationally credentialed orthopaedic surgeon holding prestigious fellowships across the United States and the United Kingdom. He pioneered modern robotic joint reconstruction and minimally invasive arthroscopic surgical care in Satara, dedicated to restoring full mobility and functional independence for every patient.",
    image: "/images/dept1.jpg"
  },
  {
    name: "Dr. Mugdha Abhishek Mahajan",
    title: "Consultant Anaesthetist, Intensivist & Pain Management Specialist",
    qualifications: "MBBS, MD, DNB",
    expertise: [
      "Intensive Care Medicine",
      "Trauma Care",
      "Advanced Pain Management",
      "USG Guided Peripheral Nerve Blocks",
      "First Aid & Golden Hour Response"
    ],
    bio: "Dr. Mugdha Abhishek Mahajan is a board-certified anaesthetist and critical care intensivist specializing in acute trauma resuscitation, round-the-clock ICU vigilance, and ultrasound-guided targeted pain management therapies, delivering patient safety and comfort at every stage of medical treatment.",
    image: "/images/about-us5.avif"
  }
];

export const DEPARTMENTS: DepartmentItem[] = [
  {
    id: "trauma-emergency",
    name: "Trauma & Emergency",
    tagline: "Rapid-response golden hour stabilization",
    description: "Equipped with dedicated casualty bays, immediate triage capability, and multi-speciality on-call trauma teams ready 24/7.",
    details: [
      "24/7 Dedicated Casualty & Emergency Triage",
      "Immediate Golden-Hour Polytrauma Resuscitation",
      "Emergency Crash Carts & Advanced Ventilator Support",
      "In-house Emergency Ultrasound & Rapid Diagnostics"
    ],
    image: "/images/facilities-emergency-care.avif",
    iconName: "Activity"
  },
  {
    id: "orthopaedics",
    name: "Orthopaedics",
    tagline: "Robotic joint precision & mobility restoration",
    description: "Comprehensive musculoskeletal care led by Dr. Abhishek Mahajan, featuring robotic joint replacement, arthroscopy, and complex fracture healing.",
    details: [
      "Joint Replacement Robotic Surgery",
      "Advanced Knee & Shoulder Arthroscopy",
      "Complex Pelvic & Acetabular Fracture Surgeries",
      "Sports Injury Rehabilitation & Geriatric Bone Care"
    ],
    image: "/images/dept1.jpg",
    iconName: "Bone"
  },
  {
    id: "dermatology-cosmetology",
    name: "Dermatology & Cosmetology",
    tagline: "Clinical skin science & advanced aesthetics",
    description: "Cutting-edge laser equipment, medical dermatology therapies, and aesthetic treatments for skin, hair, and nail health.",
    details: [
      "Advanced US-FDA Laser Technologies",
      "Pigmentation, Acne & Scar Resurfacing",
      "Comprehensive Hair Loss & Scalp Therapies",
      "Clinical Dermatological Surgeries"
    ],
    image: "/images/facilities-LASER-machines.avif",
    iconName: "Sparkles"
  },
  {
    id: "anaesthesia-pain",
    name: "Anaesthesia & Pain Management",
    tagline: "Ultra-safe anaesthesia & targeted pain alleviation",
    description: "Expert perioperative care, multimodal post-operative analgesia, and ultrasound-guided peripheral nerve blocks directed by Dr. Mugdha Mahajan.",
    details: [
      "Ultrasound-Guided Regional Nerve Blocks",
      "Comprehensive Acute & Chronic Pain Clinic",
      "High-Risk Anaesthetic Management",
      "Painless Labour & Epidural Analgesia"
    ],
    image: "/images/about-us1.avif",
    iconName: "HeartPulse"
  },
  {
    id: "neurosurgery",
    name: "Neurosurgery – Brain & Spine",
    tagline: "Microsurgical precision for brain and spinal column",
    description: "State-of-the-art operating microscopes and delicate instrumentation for neuro-trauma, spine stabilization, and cranial conditions.",
    details: [
      "High-Precision Spine Microscope Surgeries",
      "Emergency Traumatic Brain Injury Decompression",
      "Minimally Invasive Spinal Fusion & Disc Repair",
      "Neuro-critical Care Monitoring"
    ],
    image: "/images/dept3.avif",
    iconName: "Brain"
  },
  {
    id: "general-medicine-icu",
    name: "General Medicine & Critical Care",
    tagline: "Round-the-clock physician vigilance",
    description: "Multidisciplinary physician care for complex systemic diseases, chronic metabolic disorders, and intensive multi-organ monitoring.",
    details: [
      "Full-Time In-House Intensivists & Physicians",
      "Ultramodern Multi-Bed ICU with Central Monitoring",
      "Sepsis, ARDS & Cardiorespiratory Management",
      "Diabetic & Hypertension Comprehensive Control"
    ],
    image: "/images/facilities-Ultramodern-ICU.avif",
    iconName: "Stethoscope"
  },
  {
    id: "general-surgery-laparoscopy",
    name: "General Surgery & Laparoscopy",
    tagline: "Minimally invasive surgical recovery",
    description: "Advanced laparoscopic and open abdominal surgeries delivering minimal postoperative pain, smaller incisions, and swift recovery.",
    details: [
      "Laparoscopic Cholecystectomy & Appendectomy",
      "Advanced Hernia Repair with Modern Mesh",
      "Gastrointestinal & Colorectal Interventions",
      "Day-care Minor Surgical Procedures"
    ],
    image: "/images/dept2.avif",
    iconName: "Scissors"
  },
  {
    id: "plastic-reconstructive",
    name: "Plastic & Reconstructive Surgery",
    tagline: "Form and functional tissue restoration",
    description: "Specialized reconstructive surgery for trauma wounds, burn defects, hand injuries, and refined cosmetic tissue refinement.",
    details: [
      "Microvascular Soft Tissue Salvage",
      "Maxillofacial & Extremity Reconstruction",
      "Acute Burn Management & Contracture Release",
      "Cosmetic Contour & Scar Revision"
    ],
    image: "/images/about-us2.avif",
    iconName: "ShieldCheck"
  },
  {
    id: "vascular-surgery",
    name: "Vascular Surgery",
    tagline: "Comprehensive circulatory health",
    description: "Diagnostic and therapeutic treatments for peripheral arterial disease, deep vein thrombosis, and varicose vein disorders.",
    details: [
      "Minimally Invasive Endovenous Laser for Varicose Veins",
      "Arterial Revascularization & Bypass",
      "Diabetic Limb Salvage & Foot Ulcer Healing",
      "AV Fistula Creation for Dialysis Access"
    ],
    image: "/images/about-us3.avif",
    iconName: "Workflow"
  },
  {
    id: "pathology",
    name: "Pathology",
    tagline: "Accurate, rapid clinical diagnostic testing",
    description: "Fully automated biochemistry, clinical pathology, haematology, and microbiology services delivering decisive diagnostic clarity.",
    details: [
      "Fully Automated Clinical Analyzers",
      "Rapid Turnaround for Critical Emergency Panels",
      "Histopathology & Cytological Examinations",
      "Stringent Internal & External Quality Controls"
    ],
    image: "/images/about-us1.avif",
    iconName: "Microscope"
  },
  {
    id: "radiology",
    name: "Radiology",
    tagline: "High-resolution medical imaging",
    description: "State-of-the-art diagnostic imaging, digital radiography, C-Arm surgical fluoroscopy, and ultrasound diagnostics.",
    details: [
      "High-Frequency Digital X-ray Imaging",
      "High-Definition C-Arm Image Intensifier for OT",
      "High-Resolution Ultrasonography & Doppler",
      "Bedside Mobile Radiography for ICU Patients"
    ],
    image: "/images/facilities-room.avif",
    iconName: "Scan"
  },
  {
    id: "gynaecology",
    name: "Gynaecology",
    tagline: "Comprehensive care for every stage of womanhood",
    description: "Compassionate women's health services encompassing routine wellness, maternal consultations, and minimally invasive gynaecologic procedures.",
    details: [
      "Comprehensive Obstetric & Antenatal Monitoring",
      "Laparoscopic & Hysteroscopic Gynaecologic Surgery",
      "Menopause & Hormonal Disorder Management",
      "Cervical Screening & Preventive Care"
    ],
    image: "/images/about-us2.avif",
    iconName: "Heart"
  },
  {
    id: "faciomaxillary-surgery",
    name: "Faciomaxillary Surgery",
    tagline: "Specialized facial skeletal trauma & aesthetics",
    description: "Expert restoration of facial bone fractures, dental-alveolar trauma, and aesthetic corrections of the jaw and face.",
    details: [
      "Complex Mandibular & Maxillary Fracture Fixation",
      "Temporomandibular Joint (TMJ) Therapy",
      "Orthognathic Jaw Realignment",
      "Oral Surgical Pathology Excision"
    ],
    image: "/images/dept3.avif",
    iconName: "Smile"
  },
  {
    id: "urology",
    name: "Urology",
    tagline: "Advanced endourology and kidney stone solutions",
    description: "Minimally invasive solutions for urinary tract calculi, prostate health, and genitourinary conditions using laser lithotripsy.",
    details: [
      "Laser Endoscopic Stone Removal (URS / RIRS / PCNL)",
      "Prostate Laser Enucleation & TURP",
      "Stricture Urethra & Reconstructive Urology",
      "Comprehensive Uro-flowmetry Testing"
    ],
    image: "/images/facilities-emergency-care.avif",
    iconName: "Shield"
  }
];

export const FACILITIES: FacilityItem[] = [
  {
    id: "emergency-casualty",
    name: "24/7 Emergency Care and Dedicated Casualty",
    category: "Critical Care",
    description: "Round-the-clock emergency casualty with immediate triage, resuscitation bays, and emergency surgical readiness.",
    highlight: "Zero-delay golden hour intervention",
    image: "/images/facilities-emergency-care.avif"
  },
  {
    id: "ultramodern-icu",
    name: "Ultramodern ICU",
    category: "Critical Care",
    description: "Equipped with multiparameter central monitoring systems, advanced mechanical ventilators, and round-the-clock intensivist coverage.",
    highlight: "1:1 specialized critical nursing ratio",
    image: "/images/facilities-Ultramodern-ICU.avif"
  },
  {
    id: "modular-ot",
    name: "Modular Operating Theatre with Laminar Air Flow",
    category: "Surgical & Robotics",
    description: "Ultra-sterile surgical environment with HEPA filtration, laminar horizontal air currents, and positive air pressure to prevent surgical infections.",
    highlight: "Class 100 sterile surgical standard",
    image: "/images/facilities-LASER-machines.avif"
  },
  {
    id: "joint-replacement-robot",
    name: "Joint Replacement Robot",
    category: "Surgical & Robotics",
    description: "Sub-millimeter accuracy in robotic joint replacements for maximum implant longevity, natural joint kinematics, and faster ambulation.",
    highlight: "Sub-millimeter surgical accuracy",
    image: "/images/dept1.jpg"
  },
  {
    id: "arthroscope",
    name: "Arthroscope",
    category: "Surgical & Robotics",
    description: "High-definition 4K optical visualization for keyhole ligament reconstructions, meniscus repairs, and shoulder stabilization.",
    highlight: "Minimally invasive keyhole procedures",
    image: "/images/dept2.avif"
  },
  {
    id: "spine-microscope",
    name: "Spine Microscope",
    category: "Surgical & Robotics",
    description: "State-of-the-art operating microscope providing brilliant 3D illumination for delicate spinal decompression and micro-discectomy.",
    highlight: "High-magnification neural protection",
    image: "/images/dept3.avif"
  },
  {
    id: "c-arm-imaging",
    name: "C-Arm Imaging",
    category: "Diagnostic",
    description: "Real-time intra-operative fluoroscopic imaging delivering instant multi-angle verification of bone alignment and hardware placement.",
    highlight: "Live intraoperative guidance",
    image: "/images/facilities-room.avif"
  },
  {
    id: "inhouse-intensivist",
    name: "In-house Intensivist and Physician",
    category: "Critical Care",
    description: "Dedicated full-time critical care specialists and medical physicians stationed physically on campus 24/7.",
    highlight: "Continuous on-site medical vigilance",
    image: "/images/about-us5.avif"
  },
  {
    id: "dermatology-laser",
    name: "Dermatology and Cosmetology Laser Equipment",
    category: "Diagnostic",
    description: "Medical-grade lasers for scar remodeling, skin resurfacing, vascular lesion treatment, and targeted pigment correction.",
    highlight: "US-FDA certified cosmetic platforms",
    image: "/images/facilities-LASER-machines.avif"
  },
  {
    id: "cssd",
    name: "Central Sterile Services Department (CSSD)",
    category: "Surgical & Robotics",
    description: "Hospital-grade sterilization with multi-stage ultrasonic cleaners and automated autoclave cycles ensuring zero cross-contamination.",
    highlight: "Stringent hospital-wide infection control",
    image: "/images/about-us1.avif"
  },
  {
    id: "rooms-accommodation",
    name: "Semi-private, Private and Deluxe Rooms",
    category: "Patient Comfort",
    description: "Acoustically insulated, naturally lit patient rooms designed with peaceful aesthetic warmth to foster rapid healing and family comfort.",
    highlight: "Hotel-grade hygiene and serenity",
    image: "/images/facilities-room.avif"
  },
  {
    id: "consulting-rooms",
    name: "Multiple Consulting Rooms",
    category: "Patient Comfort",
    description: "Dedicated outpatient consulting chambers offering complete privacy and patient-doctor dialogue in calm, distraction-free suites.",
    highlight: "Private, unhurried consultations",
    image: "/images/about-us-img.jpg"
  },
  {
    id: "pathology-lab",
    name: "Pathology Laboratory",
    category: "Diagnostic",
    description: "In-house clinical biochemistry, haematology, and microbiology ensuring critical laboratory findings within minutes.",
    highlight: "Rapid emergency panel turnaround",
    image: "/images/about-us2.avif"
  },
  {
    id: "digital-xray",
    name: "Digital X-rays",
    category: "Diagnostic",
    description: "Low-radiation high-resolution digital radiography providing immediate cloud-accessible radiographic images.",
    highlight: "Minimal radiation exposure",
    image: "/images/about-us3.avif"
  },
  {
    id: "ecg-2d-echo",
    name: "ECG and 2D-Echo",
    category: "Diagnostic",
    description: "Instant cardiac diagnostics for accurate assessment of myocardial function, valve kinetics, and emergency chest symptoms.",
    highlight: "Immediate cardiac assessment",
    image: "/images/facilities-emergency-care.avif"
  },
  {
    id: "pharmacy",
    name: "24/7 Pharmacy",
    category: "Patient Comfort",
    description: "Fully stocked on-premises pharmacy with genuine emergency injectables, surgical consumables, and therapeutic prescriptions.",
    highlight: "24-hour uninterrupted drug availability",
    image: "/images/mahajan-building.jpg"
  },
  {
    id: "parking",
    name: "Parking Facilities",
    category: "Patient Comfort",
    description: "Designated, security-monitored vehicle parking with step-free wheelchair access and dedicated ambulance transit lanes.",
    highlight: "Hassle-free patient & visitor access",
    image: "/images/mahajan-building.jpg"
  },
  {
    id: "canteen",
    name: "Canteen",
    category: "Patient Comfort",
    description: "Hygienic cafeteria providing wholesome, dietitian-approved meal options and fresh refreshments for patients and accompanying relatives.",
    highlight: "Nutritionally balanced fresh meals",
    image: "/images/about-us-img.jpg"
  }
];

export const WHY_MAHAJAN_POINTS = [
  {
    title: "Advanced Healthcare Infrastructure",
    description: "From our laminar air-flow modular operation theatres to robotic joint replacement systems, every corner of our hospital is built to meet international clinical benchmarks."
  },
  {
    title: "Multidisciplinary Medical Expertise",
    description: "Under one roof, 14 specialized medical disciplines collaborate closely to ensure holistic diagnosis and individualized treatment plans."
  },
  {
    title: "Patient-Focused Treatment",
    description: "We practice medicine with deep empathy. Every patient and family member receives transparent counsel, dignified care, and unwavering support."
  },
  {
    title: "Ethical Medical Practices",
    description: "Founded on strict medical integrity, we recommend only the necessary evidence-based interventions with total pricing transparency."
  },
  {
    title: "Continuous Emergency Support",
    description: "A 24/7 casualty desk, on-campus ICU intensivists, digital diagnostics, and emergency surgical readiness guarantee prompt golden hour care."
  }
];
