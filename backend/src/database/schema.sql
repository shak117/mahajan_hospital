-- ============================================================
-- Mahajan Multispecialist Hospital Database Schema
-- Location: Satara, Maharashtra, India
-- ============================================================

-- Ensure uuid extension is available (fallback to serial if needed)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: appointments (Enquiry submissions)
CREATE TABLE IF NOT EXISTS appointments (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    department VARCHAR(100) NOT NULL,
    preferred_date DATE NOT NULL,
    message TEXT,
    status VARCHAR(50) DEFAULT 'Enquiry Received' CHECK (status IN ('Enquiry Received', 'Contacted', 'Confirmed', 'Cancelled', 'Completed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: contact_messages (General enquiries)
CREATE TABLE IF NOT EXISTS contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    subject VARCHAR(200),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'New' CHECK (status IN ('New', 'Under Review', 'Responded', 'Archived')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indices for rapid querying by phone, date, status, and department
CREATE INDEX IF NOT EXISTS idx_appointments_phone ON appointments(phone);
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(preferred_date);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);
CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON appointments(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_phone ON contact_messages(phone);
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_messages(created_at DESC);
