const user = require('../models/user');   // connected from the databases by model files
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
  }

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
        if (!User) return res.status(400).send('email not registered'); // check if email already exists
        // compare hashed password with the entered password
        const isMatch = await bcrypt.compare(password, User.password);
        if (!isMatch) return res.status(400).send('password did not match'); 
        // if everything matches then generate and send JWT token
        const exp = Date.now() + 1000 *60 * 60 * 24 *30
        const token = jwt.sign({ sub: User._id, exp: exp }, process.env.SALT);
        // send the token
        res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).send('email or password did not match');
    }

}

const logout = async (req, res) => {

}

module.exports = { signup, login, logout };  // connect this to main server.js