const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const app = require('./index'); 

describe('Express App', () => {
  beforeAll(async () => {
    // Connect to the test database
    await mongoose.connect('mongodb://localhost:27017/testdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    // Disconnect from the test database
    await mongoose.disconnect();
  });

  test('GET /account should return 200', async () => {
    const response = await request(app).get('/account');
    expect(response.statusCode).toBe(200);
  });

  test('GET /coffee should return 200', async () => {
    const response = await request(app).get('/coffee');
    expect(response.statusCode).toBe(200);
  });

  test('GET /favourite should return 200', async () => {
    const response = await request(app).get('/favourite');
    expect(response.statusCode).toBe(200);
  });

  test('GET /post should return 200', async () => {
    const response = await request(app).get('/post');
    expect(response.statusCode).toBe(200);
  });

  test('GET /review should return 200', async () => {
    const response = await request(app).get('/review');
    expect(response.statusCode).toBe(200);
  });
});
