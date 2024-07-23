const user = require('../models/user');   // connected from the databases by model files
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')


const signup = async (req, res) => {
    try {
    // get email and password from req.body
    const { email, password } = req.body;
    // hasing the password 
    const hashedPassword = await bcrypt.hash(password, 10);  // 10 is the number of rounds for hashing
    // create user in the database
    await user.create({ email,password: hashedPassword });

    // respond after successful creation 
    res.sendStatus(200)
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    } 
}

const login = async (req, res) => {
    try {
        // get email and password from req.body
        const { email, password } = req.body;
        // find user by email
        const User = await user.findOne({ email });
        if (!User) return res.status(400).json({message:'email not registered'}); // check if email already exists
        // compare hashed password with the entered password
        const isMatch = await bcrypt.compare(password, User.password);
        if (!isMatch) return res.status(400).json({message:'password did not match'}); 
        // if everything matches then generate and send JWT token
        const exp = Date.now() + 5000
        const token = jwt.sign({ sub: User._id, exp: exp }, process.env.SALT);
        // setup the cookie 
        res.cookie('Authorization', token, { expires: new Date(exp), httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production' });
        // send the token in the cookie
        //res.json({ token }); // never send token to the local storage prefer cookie
        res.sendStatus(200)
        
    } catch (err) {
        console.error(err);
        res.status(500).send('email or password did not match');
    }

}

const checkAuth = async (req,res) => {
    //console.log(req.user)
    res.sendStatus(200)


}

const logout = async (req, res) => {
    //res.clearCookie('Authorization', { path: '/' });
    res.clearCookie('Authorization');
    res.sendStatus(200)

}

module.exports = { signup, login, logout, checkAuth };  // connect this to main server.js