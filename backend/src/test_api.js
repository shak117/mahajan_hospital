process.env.NODE_ENV = 'test';
import app from './app.js';
import http from 'http';
import { initDbConnection } from './database/db.js';

const testServer = http.createServer(app);
const TEST_PORT = 5055;

testServer.listen(TEST_PORT, async () => {
  await initDbConnection();
  console.log(`Test server running on port ${TEST_PORT}`);

  try {
    // 1. Test Health Check
    console.log('\n--- 1. Testing GET /api/health ---');
    const healthRes = await fetch(`http://localhost:${TEST_PORT}/api/health`);
    const healthJson = await healthRes.json();
    console.log('Health Response Status:', healthRes.status);
    console.log('Health Response Body:', healthJson);
    if (healthRes.status !== 200 || healthJson.status !== 'healthy') {
      throw new Error('Health check failed');
    }

    // 2. Test Invalid Appointment Submission (Validation Check)
    console.log('\n--- 2. Testing Invalid POST /api/appointments ---');
    const invalidRes = await fetch(`http://localhost:${TEST_PORT}/api/appointments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        full_name: '',
        phone: '123', // invalid phone
        department: '',
      })
    });
    const invalidJson = await invalidRes.json();
    console.log('Validation Error Status (Expect 400):', invalidRes.status);
    console.log('Validation Errors:', invalidJson.errors);
    if (invalidRes.status !== 400 || !invalidJson.errors) {
      throw new Error('Validation failed to catch bad input');
    }

    // 3. Test Valid Appointment Submission
    console.log('\n--- 3. Testing Valid POST /api/appointments ---');
    const validApptRes = await fetch(`http://localhost:${TEST_PORT}/api/appointments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        full_name: 'Anand Shinde',
        phone: '9822012345',
        email: 'anand.shinde@example.com',
        department: 'Orthopaedics',
        preferred_date: '2026-12-01',
        message: 'Knee joint consultation regarding arthroscopy.'
      })
    });
    const validApptJson = await validApptRes.json();
    console.log('Appointment Status (Expect 201):', validApptRes.status);
    console.log('Appointment Response:', validApptJson);
    if (validApptRes.status !== 201 || !validApptJson.success) {
      throw new Error('Appointment submission failed');
    }

    // 4. Test Valid Contact Submission
    console.log('\n--- 4. Testing Valid POST /api/contact ---');
    const contactRes = await fetch(`http://localhost:${TEST_PORT}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Sunita Deshmukh',
        phone: '9423000000',
        email: 'sunita@example.com',
        subject: 'Room Enquiry',
        message: 'Inquiring about deluxe private room availability and visiting hours.'
      })
    });
    const contactJson = await contactRes.json();
    console.log('Contact Status (Expect 201):', contactRes.status);
    console.log('Contact Response:', contactJson);
    if (contactRes.status !== 201 || !contactJson.success) {
      throw new Error('Contact submission failed');
    }

    console.log('\n✅ ALL API ENDPOINTS TESTED AND VERIFIED SUCCESSFULLY!\n');
  } catch (err) {
    console.error('❌ Test failed:', err.message);
    process.exitCode = 1;
  } finally {
    testServer.close();
    process.exit(process.exitCode || 0);
  }
});
