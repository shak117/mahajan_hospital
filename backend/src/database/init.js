import { initDbConnection, pool } from './db.js';

const run = async () => {
  console.log('Starting Mahajan Hospital PostgreSQL database setup...');
  const success = await initDbConnection();
  if (success) {
    console.log('Database initialized successfully.');
  } else {
    console.log('Database setup completed with fallback storage ready.');
  }
  await pool.end();
  process.exit(0);
};

run().catch((err) => {
  console.error('Database initialization script error:', err);
  process.exit(1);
});
