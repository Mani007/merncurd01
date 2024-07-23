const user = require('../models/user');   // connected from the databases by model files

const signup = async (req, res) => {
    // get email and password from req.body
    const { email, password } = req.body;
    // create user in the database
    await user.create({ email,password});

    // respond after successful creation 
    res.sendStatus(200)
}

const login = async (req, res) => {

}

const logout = async (req, res) => {

}

module.exports = { signup, login, logout };  // connect this to main server.js