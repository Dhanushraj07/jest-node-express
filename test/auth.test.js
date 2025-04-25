const request = require('supertest');
const app = require('../app'); // Adjust the path to your app.js file


describe('POST /signup', () => {
    it(('should return user registered'), async () => {
        const res = await request(app)
        .post('/auth/signup')
        .send({ email: 'test@gmail.com',username: 'testuser', password:'Test@123'})
        expect(res.statusCode).toBe(201);
        expect(res.body.message).toBe('User registered successfully');
    }
    );
    it('should return invalid email', async () => {
        const res = await request(app)
        .post('/auth/signup')
        .send({ email: 'testgmail.com',username: 'testuser', password:'Test@123'}); // Invalid email
        expect(res.statusCode).toBe(400);  
        expect(res.text).toBe('Email should be a valid email address');
    }
    );
    it('should return 400 for invalid password', async () => {
        const res = await request(app)
        .post('/auth/signup')
        .send({ email: 'test@gmail.com',username: 'testuser', password:'123456' }); // Invalid password
        expect(res.statusCode).toBe(400);  
        expect(res.text).toBe('Password must be at least 8 characters long and include uppercase, lowercase, number, and symbol.');
    }
    );
    it('should return 400 for missing email', async () => {
        const res = await request(app)
            .post('/auth/signup')
            .send({ username: 'testuser', password: '123456' }); // Missing email
        expect(res.statusCode).toBe(400);
        expect(res.text).toBe('All fields are required: email, username, and password');
    }
    );
    it('should return 400 for missing username', async () => {
        const res = await request(app)
        .post('/auth/signup')
        .send({ password: '123456' }); // Missing username
        expect(res.statusCode).toBe(400);
        expect(res.text).toBe('All fields are required: email, username, and password');
    }
    );
    it('should return 400 for missing password', async () => {
        const res = await request(app)
        .post('/auth/signup')
        .send({ username: 'testuser' }); // Missing password
        expect(res.statusCode).toBe(400);
        expect(res.text).toBe('All fields are required: email, username, and password');
    }
    );
});

describe('GET /login', () => {
    it('should return login succsessfull',async()=>{
        const res = await request(app)
        .post('/auth/login')
        .send({ email: 'test@gmail.com',username: 'testuser', password:'123456'})
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('Login successful');
    })
    it('should return 400 for missing username', async () => {
        const res = await request(app)
        .post('/auth/login')
        .send({ password: '123456' }); // Missing username
        expect(res.statusCode).toBe(400);
        expect(res.text).toBe('Username and password are required');
    }
    );
    it('should return 400 for missing password', async () => {
        const res = await request(app)
        .post('/auth/login')
        .send({ username: 'testuser' }); // Missing password
        expect(res.statusCode).toBe(400);
        expect(res.text).toBe('Username and password are required');
    }
    );
    it('should return 401 for invalid credentials', async () => {
        const res = await request(app)
        .post('/auth/login')
        .send({ email: 'test@gmail.com',username: 'wronguser', password: 'wrongpassword' }); // Invalid credentials
        expect(res.statusCode).toBe(401);
        expect(res.text).toBe('Invalid username or password');
    }
    );
});
//     it('should return 500 for server error', async () => {
//         const res = await request(app)
//         .post('/auth/login')
//         .send({ username: 'testuser', password:'123456' }); // Simulate server error
//         expect(res.statusCode).toBe(500);
//         expect(res.text).toBe('Internal server error');
//     }
//     );
// });