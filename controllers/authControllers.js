// export const signup = (req, res) => {
//     try {
        
//         const { username, password } = req.body;
//         if (!username || !password) {
//             return res.status(400).send('Username and password are required');
//         }
//         // Here you would typically hash the password and save the user to the database
//         // For this example, we'll just send a success message
//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
        
//         console.error('Error during signup:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

const signup = (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send('Username and password are required');
        }
        // Here you would typically hash the password and save the user to the database
        // For this example, we'll just send a success message
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
module.exports = { signup };