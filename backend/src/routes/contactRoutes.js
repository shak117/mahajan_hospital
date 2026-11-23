import express from 'express';
import { query } from '../database/db.js';
import { validateContactInput } from '../middleware/validator.js';

const router = express.Router();

/**
 * @route   POST /api/contact
 * @desc    Submit general enquiry message
 * @access  Public
 */
router.post('/', validateContactInput, async (req, res) => {
  try {
    const { name, phone, email, subject, message } = req.sanitizedData;

    const insertQuery = `
      INSERT INTO contact_messages (name, phone, email, subject, message, status)
      VALUES ($1, $2, $3, $4, $5, 'New')
      RETURNING id, name, phone, email, subject, status, created_at;
    `;

    const values = [name, phone, email, subject, message];
    const result = await query(insertQuery, values);
    const savedRecord = result.rows[0];

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out to Mahajan Multispecialist Hospital. Our team has received your message and will respond promptly.',
      data: {
        referenceNumber: `MSG-${String(savedRecord.id).padStart(5, '0')}`,
        name: savedRecord.name,
        subject: savedRecord.subject,
        createdAt: savedRecord.created_at
      }
    });
  } catch (error) {
    console.error('Error submitting contact message:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to record your message. Please reach us directly at mahajanhealthcare@outlook.com or call +91 9075023025.'
    });
  }
});

export default router;
