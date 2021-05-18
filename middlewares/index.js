const { verifyToken, generateResponseError } = require('../utils');

const verifyRecruiter = async (req, res, next) => {

    const token = req.headers['authorization'] || req.headers['Authorization'];
    try{
        if(!token || !token.split(' ')[1]){
            return res.status(401).json({
                status:'failure',
                message:'Not authorized',
            })
        }
        const data = verifyToken(token.split(' ')[1])

        if(data.type !== "recruiter"){
            return res.status(401).json({
                status:'failure',
                message:'Not authorized',
            })
        }
        req.recruiter = data;

        next();
    }
    catch(e){
        next(generateResponseError(401, e.message||e))
    }
}

const verifyUser = async (req, res, next) => {

    const token = req.headers['authorization'] || req.headers['Authorization'];
    try{
        if(!token || !token.split(' ')[1]){
            return res.status(401).json({
                status:'failure',
                message:'Not authorized',
            })
        }
        const data = verifyToken(token.split(' ')[1])

        if(data.type !== "user"){
            return res.status(401).json({
                status:'failure',
                message:'Not authorized',
            })
        }
        req.user = data;

        next();
    }
    catch(e){
        next(generateResponseError(401, e.message||e))
    }
}

module.exports = {
    verifyRecruiter,
    verifyUser,
}