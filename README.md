<<<<<<< HEAD
# mahajan_hospital
=======
# Mahajan Multispecialist Hospital — Satara, Maharashtra
### Premium Healthcare Digital Experience & PostgreSQL Appointment Platform

Official website and digital presence for **Mahajan Multispecialist Hospital**, Powai Naka, Satara – 415001, Maharashtra, India.
Designed with an editorial, minimalist aesthetic inspired by Apple's visual philosophy (clarity, precision, generous whitespace, cinematic media, and refined typography), built on **React, TypeScript, Vite, Tailwind CSS, Framer Motion**, and powered by an **Express + PostgreSQL REST API**.

---

## 🏥 About the Institution

- **Institution:** Mahajan Multispecialist Hospital
- **Location:** 529/A/13/15, Parasnis Colony, Powai Naka, Satara – 415001, Maharashtra, India.
- **Appointment / OPD Hotline:** `+91 9075023025`
- **24/7 Emergency & Casualty:** `02162 232299`
- **Email:** `mahajanhealthcare@outlook.com`
- **OPD Timings:** Monday – Saturday, 9:00 AM – 8:00 PM
- **Emergency Casualty:** Open 24 Hours / 7 Days a Week

---

## 🌟 Core Visual & Architectural Philosophy

1. **Editorial Minimalism**: High contrast, crisp typography (Inter & Manrope), clean geometric layouts, no clutter, and generous negative space communicating trust, precision, advanced medical engineering, compassion, and excellence.
2. **Cinematic Hero**: Custom aerial video background (`bf video.mp4`) showcasing the hospital building, configured with responsive object-positioning, muted autoplay, seamless loop, reduced-motion compliance, and static high-resolution fallback.
3. **Static Content Architecture**: All medical content, doctor biographies, 14 clinical departments, and 18 specialized facilities are maintained cleanly through frontend TypeScript configuration files (`src/config/hospitalData.ts`). No vulnerable CMS or admin panel.
4. **Secure Data Tier**: PostgreSQL database is securely encapsulated behind a hardened Express REST API using parameterized SQL queries, strict server-side validation, rate limiting, and CORS restrictions. Database credentials are never exposed to the client.

---

## 🛠️ Technology Stack

### Frontend
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 3 with custom medical design tokens
- **Animations:** Framer Motion (subtle, high-performance page and element transitions)
- **Icons:** Lucide React
- **Routing:** React Router v6 (Multi-page routing: Home, About Us, Our Directors, Departments, Facilities & Services, Contact & Appointment)
- **SEO & Structured Data:** JSON-LD schema for `Hospital` / `MedicalOrganization`, OpenGraph, Twitter Cards, `robots.txt`, and `sitemap.xml`.

### Backend
- **Runtime:** Node.js (v20+) with ES Modules
- **Framework:** Express 4
- **Database:** PostgreSQL with `pg` connection pool
- **Security:** `helmet`, `cors`, `express-rate-limit`, input sanitization against XSS/injections
- **Persistence:** Parameterized SQL queries with automatic schema initialization and reliable persistent fallback engine.

---

## 📁 Project Structure

```
DR_mahajan_hospital/
├── package.json                    # Workspace orchestration scripts
├── README.md                       # Comprehensive documentation & setup guide
├── backend/
│   ├── package.json
│   ├── .env.example                # Database and server environment variables template
│   ├── .env                        # Local environment variables
│   └── src/
│       ├── app.js                  # Express application setup, security, & routing
│       ├── test_api.js             # Automated API integration test suite
│       ├── middleware/
│       │   └── validator.js        # Input sanitization and validation middleware
│       ├── routes/
│       │   ├── appointmentRoutes.js # POST /api/appointments
│       │   └── contactRoutes.js     # POST /api/contact
│       └── database/
│           ├── db.js               # PostgreSQL connection pool & query executor
│           ├── schema.sql          # PostgreSQL schema with constraints & indexes
│           └── init.js             # Database setup and migration script
└── frontend/
    ├── package.json
    ├── vite.config.ts              # Vite config with API proxy
    ├── tailwind.config.js          # Tailored color palette & typography tokens
    ├── tsconfig.json
    ├── index.html                  # SEO, fonts & Hospital Schema JSON-LD
    ├── public/
    │   ├── robots.txt
    │   ├── sitemap.xml
    │   ├── videos/
    │   │   ├── bf video.mp4        # Aerial hospital construction hero video
    │   │   └── bf-video.mp4
    │   └── images/                 # Official hospital building, logo, and facility assets
    └── src/
        ├── main.tsx
        ├── App.tsx                 # Router & layout orchestration
        ├── config/
        │   └── hospitalData.ts     # Authoritative clinical data (14 depts, 18 facilities, directors)
        ├── styles/
        │   └── index.css           # Global typography & glassmorphism utilities
        ├── components/
        │   ├── Navbar.tsx          # Transparent-to-frosted sticky navigation + mobile menu
        │   ├── Footer.tsx          # Minimal institutional footer with emergency hotlines
        │   ├── HeroVideo.tsx       # Cinematic video hero with responsive building alignment
        │   └── ScrollToTop.tsx     # Route transition scroll restoration
        ├── sections/
        │   ├── IntroductionSection.tsx   # "Healthcare, with a deeper sense of care."
        │   ├── HighlightsSection.tsx     # 15+ Specialists, 10K+ Patients, 24/7 Casualty
        │   ├── DepartmentsSection.tsx    # 14 specialized departments showcase
        │   ├── FacilitiesSection.tsx     # 18 advanced facilities spotlight
        │   ├── DirectorsSection.tsx      # Dr. Abhishek Mahajan & Dr. Mugdha Mahajan
        │   ├── WhyMahajanSection.tsx     # "Technology meets the human touch."
        │   ├── AppointmentCtaSection.tsx # Immediate action buttons (Call, WhatsApp, Maps)
        │   └── ContactSection.tsx        # PostgreSQL appointment & contact enquiry form
        └── pages/
            ├── Home.tsx
            ├── About.tsx
            ├── Directors.tsx
            ├── Departments.tsx
            ├── Facilities.tsx
            └── Contact.tsx
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or later (v20+ recommended)
- **npm**: v9.0.0 or later
- **PostgreSQL**: v14, v15, v16, or v18 running locally or on cloud (e.g. Supabase, Neon, AWS RDS)

### 2. Installation
From the root project directory:

```bash
# Install backend dependencies
npm install --prefix backend

# Install frontend dependencies
npm install --prefix frontend
```

### 3. PostgreSQL Database Configuration

1. Create a PostgreSQL database named `mahajan_hospital`:
```sql
CREATE DATABASE mahajan_hospital;
```

2. Configure `backend/.env`:
```env
PORT=5000
NODE_ENV=development

# PostgreSQL Settings
DB_HOST=localhost
DB_PORT=5432
DB_NAME=mahajan_hospital
DB_USER=postgres
DB_PASSWORD=your_postgres_password

# Or provide a single connection string:
# DATABASE_URL=postgresql://user:password@localhost:5432/mahajan_hospital

FRONTEND_URL=http://localhost:3000
```

3. Initialize the database schema:
```bash
npm run init:db
# or
node backend/src/database/init.js
```

This runs `backend/src/database/schema.sql` to create:
- `appointments` table
- `contact_messages` table
- Performance indexes on `phone`, `preferred_date`, and `status`.

*(Note: If PostgreSQL credentials are not yet configured on the target machine, the backend server automatically engages its resilient persistent fallback storage engine, logging and recording all enquiries without crashing).*

---

## 🧪 Running the Automated Test Suite

To verify the Express backend REST API, validation rules, and database submissions:

```bash
node backend/src/test_api.js
```

Expected output:
```
--- 1. Testing GET /api/health ---
Health Response Status: 200

--- 2. Testing Invalid POST /api/appointments ---
Validation Error Status (Expect 400): 400

--- 3. Testing Valid POST /api/appointments ---
Appointment Status (Expect 201): 201

--- 4. Testing Valid POST /api/contact ---
Contact Status (Expect 201): 201

✅ ALL API ENDPOINTS TESTED AND VERIFIED SUCCESSFULLY!
```

---

## 💻 Development Server

Start backend and frontend simultaneously:

```bash
# Terminal 1: Start Express API server (Port 5000)
npm run start:backend

# Terminal 2: Start Vite Dev Server (Port 3000)
npm run dev:frontend
```

Open `http://localhost:3000` in your browser.

---

## 📦 Production Build & Deployment

To compile the production-optimized frontend bundle:

```bash
npm run build:frontend
```

The compiled assets will be placed in `frontend/dist/`.
- The bundle includes code-splitting, minified CSS/JS, and gzipped assets.
- Production preview can be started with `npm run preview --prefix frontend`.

---

## 📡 REST API Reference

### 1. `POST /api/appointments`
Submit a patient appointment enquiry.

**Request Body:**
```json
{
  "full_name": "Ramesh Kulkarni",
  "phone": "9876543210",
  "email": "ramesh@example.com",
  "department": "Orthopaedics",
  "preferred_date": "2026-12-01",
  "message": "Consultation for knee discomfort."
}
```

**Success Response (201 Created):**
```json
{
  "success": true,
  "message": "Your appointment enquiry has been received successfully...",
  "data": {
    "enquiryId": "MH-00001",
    "fullName": "Ramesh Kulkarni",
    "department": "Orthopaedics",
    "preferredDate": "2026-12-01",
    "status": "Enquiry Received",
    "createdAt": "2026-11-23T05:56:45.542Z",
    "hospitalContact": "+91 9075023025"
  }
}
```

### 2. `POST /api/contact`
Submit a general inquiry message.

**Request Body:**
```json
{
  "name": "Sunita Patil",
  "phone": "9876543210",
  "email": "sunita@example.com",
  "subject": "Room Information",
  "message": "Inquiring regarding private deluxe room amenities."
}
```

**Success Response (201 Created):**
```json
{
  "success": true,
  "message": "Thank you for reaching out to Mahajan Multispecialist Hospital...",
  "data": {
    "referenceNumber": "MSG-00001",
    "name": "Sunita Patil",
    "subject": "Room Information",
    "createdAt": "2026-11-23T05:56:45.557Z"
  }
}
```

### 3. `GET /api/health`
System status and institutional heartbeat.

---

## 🩺 Clinical Departments (All 14 Covered)
1. **Trauma & Emergency** — 24/7 dedicated casualty and golden-hour polytrauma resuscitation.
2. **Orthopaedics** — Robotic joint replacements, arthroscopy, and complex fracture reconstruction.
3. **Dermatology & Cosmetology** — Clinical lasers, acne scar resurfacing, and skin health.
4. **Anaesthesia & Pain Management** — USG-guided regional blocks and chronic pain alleviation.
5. **Neurosurgery – Brain & Spine** — Operating microscope spine surgeries and cranial trauma care.
6. **General Medicine & Critical Care** — Ultramodern ICU with in-house intensivists and physicians.
7. **General Surgery & Laparoscopy** — Minimally invasive laparoscopic gastrointestinal surgeries.
8. **Plastic & Reconstructive Surgery** — Microvascular tissue salvage and cosmetic contouring.
9. **Vascular Surgery** — Endovenous laser varicose vein treatments and diabetic foot care.
10. **Pathology** — Automated clinical biochemistry, haematology, and microbiology.
11. **Radiology** — High-resolution digital X-rays, C-Arm surgical imaging, and ultrasonography.
12. **Gynaecology** — Women's health, obstetric emergencies, and laparoscopic gynaecologic care.
13. **Faciomaxillary Surgery** — Facial bone fracture repairs and reconstructive jaw surgery.
14. **Urology** — Laser lithotripsy for kidney stones, prostate care, and endourology.

---

## 🏛️ Specialized Facilities (All 18 Covered)
1. 24/7 Emergency Care and Dedicated Casualty
2. Ultramodern ICU
3. Semi-private, Private and Deluxe Rooms
4. Modular Operating Theatre with Laminar Air Flow
5. Arthroscope
6. Spine Microscope
7. Joint Replacement Robot
8. C-Arm Imaging
9. In-house Intensivist and Physician
10. Dermatology and Cosmetology Laser Equipment
11. Central Sterile Services Department (CSSD)
12. Multiple Consulting Rooms
13. Pathology Laboratory
14. Digital X-rays
15. ECG and 2D-Echo
16. 24/7 Pharmacy
17. Parking Facilities
18. Canteen

---

## 📜 Medical Directors Profile

- **Dr. Abhishek Suresh Mahajan**
  - Consultant Orthopaedic Surgeon & Managing Director
  - **Credentials:** MBBS, MS (Orth), DNB, FCPS, MCh (Orth), MNAMS, FICS (USA), FACS (USA), FRSPH (UK), MRCS (UK), MBA.
  - **Areas of Expertise:** Trauma Care, Arthroscopy, Joint Replacement, Robotic Joint Replacement Surgery, Complex Orthopaedic Procedures.

- **Dr. Mugdha Abhishek Mahajan**
  - Consultant Anaesthetist, Intensivist & Pain Management Specialist
  - **Credentials:** MBBS, MD (Anaesthesiology), DNB.
  - **Areas of Expertise:** Intensive Care Medicine, Trauma Care, Advanced Pain Management, USG Guided Peripheral Nerve Blocks, First Aid & Golden Hour Response.

---

*Mahajan Multispecialist Hospital, Powai Naka, Satara, Maharashtra — "Advancing Healthcare. Building Trust. Transforming Lives."*
>>>>>>> 84d7024 (initi COMIT)
