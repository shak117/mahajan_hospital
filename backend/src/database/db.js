import pg from 'pg';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { Pool } = pg;

// PostgreSQL Connection configuration
const dbConfig = process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    }
  : {
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      database: process.env.DB_NAME || 'mahajan_hospital',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
    };

export const pool = new Pool(dbConfig);

let isPgConnected = false;

// Test connection on startup
export const initDbConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('✅ PostgreSQL connected successfully to database:', dbConfig.database || 'remote');
    isPgConnected = true;

    // Run schema migrations automatically
    const schemaPath = path.join(__dirname, 'schema.sql');
    if (fs.existsSync(schemaPath)) {
      const schemaSql = fs.readFileSync(schemaPath, 'utf8');
      await client.query(schemaSql);
      console.log('✅ PostgreSQL schema verified & tables initialized');
    }
    client.release();
    return true;
  } catch (err) {
    console.warn('⚠️ PostgreSQL direct connection not active or credentials need configuration:', err.message);
    console.warn('💡 The API will use secure fallback persistent storage to ensure enquiries are never lost.');
    isPgConnected = false;
    return false;
  }
};

// Parameterized Query helper
export const query = async (text, params) => {
  const start = Date.now();
  if (isPgConnected) {
    try {
      const res = await pool.query(text, params);
      const duration = Date.now() - start;
      console.log('Executed query', { text, duration, rows: res.rowCount });
      return res;
    } catch (error) {
      console.error('PostgreSQL query error:', error.message);
      throw error;
    }
  } else {
    // If PG is not reachable, record locally in fallback store
    console.log('[Fallback Storage Engine] Storing submission safely...');
    return executeFallbackQuery(text, params);
  }
};

// Fallback JSON-based persistent store if PostgreSQL credentials are not yet configured on host
const fallbackFile = path.join(__dirname, 'fallback_submissions.json');

const executeFallbackQuery = (text, params) => {
  let data = { appointments: [], contact_messages: [] };
  if (fs.existsSync(fallbackFile)) {
    try {
      data = JSON.parse(fs.readFileSync(fallbackFile, 'utf8'));
    } catch {
      data = { appointments: [], contact_messages: [] };
    }
  }

  if (text.includes('INSERT INTO appointments')) {
    const [full_name, phone, email, department, preferred_date, message] = params;
    const newRecord = {
      id: (data.appointments.length + 1),
      full_name,
      phone,
      email,
      department,
      preferred_date,
      message,
      status: 'Enquiry Received',
      created_at: new Date().toISOString()
    };
    data.appointments.push(newRecord);
    fs.writeFileSync(fallbackFile, JSON.stringify(data, null, 2));
    return { rows: [newRecord], rowCount: 1 };
  }

  if (text.includes('INSERT INTO contact_messages')) {
    const [name, phone, email, subject, message] = params;
    const newRecord = {
      id: (data.contact_messages.length + 1),
      name,
      phone,
      email,
      subject,
      message,
      status: 'New',
      created_at: new Date().toISOString()
    };
    data.contact_messages.push(newRecord);
    fs.writeFileSync(fallbackFile, JSON.stringify(data, null, 2));
    return { rows: [newRecord], rowCount: 1 };
  }

  return { rows: [], rowCount: 0 };
};
