const jwt = require('jsonwebtoken');
const User = require('../models/user');

const requireAuth = async (req,res,next) => {

    //console.log('in Auth middleware'); //- test successful
    try {
    // read token from the cookie
    const gotToken = req.cookies.Authorization;

    // decode the token 
    const verify = jwt.verify(gotToken, process.env.SALT);
    // find user using decoded sub
    const user = await User.findById(verify.sub);
    // check the validity of the token such as email, password or the expiration time
    if (!user) return res.status(401).send('User ID is invalid');
    // attach user to the request object
    req.user = user; // here we are attaching the user id to every request
    // if all clear then continue to next
    next();
    } catch (error) {
    // if token is not valid or not found then send 401
    return res.status(401).json({error: 'Not authorized, token is required'});
    }
};

module.exports = requireAuth