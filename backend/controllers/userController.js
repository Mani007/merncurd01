const user = require('../models/user');   // connected from the databases by model files
const bcrypt = require('bcryptjs')
const signup = async (req, res) => {
    // get email and password from req.body
    const { email, password } = req.body;
    // hasing the password 
    const hashedPassword = await bcrypt.hash(password, 10);  // 10 is the number of rounds for hashing
    // create user in the database
    await user.create({ email,password: hashedPassword });

    // respond after successful creation 
    res.sendStatus(200)
}

const login = async (req, res) => {

}

const logout = async (req, res) => {

}

module.exports = { signup, login, logout };  // connect this to main server.js