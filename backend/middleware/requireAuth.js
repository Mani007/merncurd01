const jwt = require('jsonwebtoken');

const requireAuth = (req,res,next) => {
    console.log('in Auth middleware');

    next();
};

module.exports = requireAuth