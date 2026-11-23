// Input sanitization and validation middleware

export const sanitizeString = (str) => {
  if (typeof str !== 'string') return '';
  return str.trim().replace(/[<>]/g, ''); // strip script/tag injections
};

export const isValidPhone = (phone) => {
  if (typeof phone !== 'string') return false;
  // Clean characters: spaces, dashes, parentheses, plus sign
  const cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
  // Valid Indian or international phone: between 10 and 15 digits
  return /^[0-9]{10,15}$/.test(cleaned);
};

export const isValidEmail = (email) => {
  if (!email) return true; // email is optional
  if (typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

export const isValidDate = (dateStr) => {
  if (!dateStr || typeof dateStr !== 'string') return false;
  const date = new Date(dateStr);
  return !isNaN(date.getTime());
};

// Middleware for Appointment submissions
export const validateAppointmentInput = (req, res, next) => {
  const { full_name, phone, email, department, preferred_date, message } = req.body;

  const errors = [];

  // Name validation
  if (!full_name || typeof full_name !== 'string' || full_name.trim().length < 2) {
    errors.push('Full name is required (minimum 2 characters).');
  }

  // Phone validation
  if (!phone || !isValidPhone(phone)) {
    errors.push('A valid 10-digit contact phone number is required.');
  }

  // Email validation (optional)
  if (email && !isValidEmail(email)) {
    errors.push('Please provide a valid email address.');
  }

  // Department validation
  const validDepartments = [
    'Trauma & Emergency',
    'Orthopaedics',
    'Dermatology & Cosmetology',
    'Anaesthesia & Pain Management',
    'Neurosurgery – Brain & Spine',
    'General Medicine & Critical Care',
    'General Surgery & Laparoscopy',
    'Plastic & Reconstructive Surgery',
    'Vascular Surgery',
    'Pathology',
    'Radiology',
    'Gynaecology',
    'Faciomaxillary Surgery',
    'Urology',
    'General OPD / Consultation'
  ];

  if (!department || typeof department !== 'string' || department.trim().length === 0) {
    errors.push('Please select a healthcare department.');
  }

  // Preferred Date validation
  if (!preferred_date || !isValidDate(preferred_date)) {
    errors.push('A valid preferred appointment date is required.');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }

  // Attach sanitized data to request
  req.sanitizedData = {
    full_name: sanitizeString(full_name),
    phone: sanitizeString(phone),
    email: email ? sanitizeString(email).toLowerCase() : null,
    department: sanitizeString(department),
    preferred_date: sanitizeString(preferred_date),
    message: message ? sanitizeString(message) : ''
  };

  next();
};

// Middleware for Contact submissions
export const validateContactInput = (req, res, next) => {
  const { name, phone, email, subject, message } = req.body;
  const errors = [];

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Name is required (minimum 2 characters).');
  }

  if (!phone || !isValidPhone(phone)) {
    errors.push('A valid contact phone number is required.');
  }

  if (email && !isValidEmail(email)) {
    errors.push('Please provide a valid email address.');
  }

  if (!message || typeof message !== 'string' || message.trim().length < 5) {
    errors.push('Message is required (minimum 5 characters).');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }

  req.sanitizedData = {
    name: sanitizeString(name),
    phone: sanitizeString(phone),
    email: email ? sanitizeString(email).toLowerCase() : null,
    subject: subject ? sanitizeString(subject) : 'General Enquiry',
    message: sanitizeString(message)
  };

  next();
};
