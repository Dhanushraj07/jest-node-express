const request = require('supertest');
const app = require('../app'); // Adjust the path to your app.js file

describe('GET /', () => {
  it('should return Hello, world!', async () => {
    const res = await request(app)
    .get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, world!');
  });
});

describe('POST /sum', () => {
  it('should return the sum of two numbers', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ a: 3, b: 5 });
    expect(res.statusCode).toBe(200);
    expect(res.body.sum).toBe(8);
  });
});


describe('POST /invalid number', () => {
    it('should return 400 for invalid input', async () => {
        const res = await request(app)
        .post('/invalid')
        .send({ a: '1', b: 5 }); // Invalid input
        expect(res.statusCode).toBe(400);
    });
}); 
