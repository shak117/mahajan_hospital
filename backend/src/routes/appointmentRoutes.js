import express from 'express';
import { query } from '../database/db.js';
import { validateAppointmentInput } from '../middleware/validator.js';

const router = express.Router();

/**
 * @route   POST /api/appointments
 * @desc    Submit an appointment enquiry
 * @access  Public
 */
router.post('/', validateAppointmentInput, async (req, res) => {
  try {
    const { full_name, phone, email, department, preferred_date, message } = req.sanitizedData;

    // Secure Parameterized Query
    const insertQuery = `
      INSERT INTO appointments (full_name, phone, email, department, preferred_date, message, status)
      VALUES ($1, $2, $3, $4, $5, $6, 'Enquiry Received')
      RETURNING id, full_name, phone, email, department, preferred_date, status, created_at;
    `;

    const values = [full_name, phone, email, department, preferred_date, message];
    const result = await query(insertQuery, values);

    const savedRecord = result.rows[0];

    return res.status(201).json({
      success: true,
      message: 'Your appointment enquiry has been received successfully. Our hospital coordination desk will contact you shortly to confirm timing and doctor availability.',
      data: {
        enquiryId: `MH-${String(savedRecord.id).padStart(5, '0')}`,
        fullName: savedRecord.full_name,
        department: savedRecord.department,
        preferredDate: savedRecord.preferred_date,
        status: savedRecord.status,
        createdAt: savedRecord.created_at,
        hospitalContact: '+91 9075023025'
      }
    });
  } catch (error) {
    console.error('Error submitting appointment enquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process your appointment enquiry at this time. Please call our 24/7 hospital desk at +91 9075023025 or emergency at 02162 232299.'
    });
  }
});

/**
 * @route   GET /api/appointments/health
 * @desc    Check appointments service status
 */
router.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'appointments-api', time: new Date().toISOString() });
});

export default router;
