const request = require('supertest');
const app = require('../app'); // Adjust the path to your app.js file


describe('POST /signup', () => {
    it(('should return user registered'), async () => {
        const res = await request(app)
        .post('/auth/signup')
        .send({ username: 'testuser', password:'123456'})
        expect(res.statusCode).toBe(201);
        expect(res.body.message).toBe('User registered successfully');
    }
    );
  
    it('should return 400 for missing username', async () => {
        const res = await request(app)
        .post('/auth/signup')
        .send({ password: '123456' }); // Missing username
        expect(res.statusCode).toBe(400);
        expect(res.text).toBe('Username and password are required');
    }
    );
    it('should return 400 for missing password', async () => {
        const res = await request(app)
        .post('/auth/signup')
        .send({ username: 'testuser' }); // Missing password
        expect(res.statusCode).toBe(400);
        expect(res.text).toBe('Username and password are required');
    }
    );
});