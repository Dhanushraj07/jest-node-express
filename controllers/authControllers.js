
const signup = (req, res) => {
    try {
        const { email,username, password } = req.body;

        if (!email || !username || !password) {
            return res.status(400).send('All fields are required: email, username, and password');
        }

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).send('Email should be a valid email address');
        }

        if (!passwordRegex.test(password)) {
            return res.status(400).send(
                'Password must be at least 8 characters long and include uppercase, lowercase, number, and symbol.'
            );
        }

        // Proceed with registration
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const login = (req, res) => {
    try {
        const { username, password } = req.body;
        //simulate internal server error
        // if (username === 'testuser' && password === '123456') {
        //     return res.status(500).send('Internal server error');
        // }

        if (!username || !password) {
            return res.status(400).send('Username and password are required');
        }

        // Simulate credential validation
        const validUser = username === 'testuser' && password === '123456';
        if (!validUser) {
            return res.status(401).send('Invalid username or password');
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const logout = (req, res) => {
    try {
        // Simulate logout process
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Error during logout:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { signup ,login};

