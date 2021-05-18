
const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SECRET } = require('../config');

//jwt
const generateToken = (data, duration) => {
    try{
        //duration eg. 365d
        if(duration) return jwt.sign(data, ACCESS_TOKEN_SECRET, { expiresIn : duration });
        else return jwt.sign(data, ACCESS_TOKEN_SECRET)
    }
    catch(e){
        throw e;
    }
}

const verifyToken = (token) => {
    try{
        return jwt.verify(token, ACCESS_TOKEN_SECRET);
    }
    catch(e){
        throw e;
    }
}


//errors
const generateResponseError = (status, message) => {
    return {status, message}
}

module.exports = {
    generateToken,
    verifyToken,
    generateResponseError
}