const Recruiter = require('../../models/Recruiter');
const CompanyProfile = require('../../models/CompanyProfile');

const {generateToken} = require('../../utils');

exports.register = async (req, res, next) => {
    const {company_name, company_email, password, cpassword} = req.body
    if(password!==cpassword){
        return res.json({msg:"password and confirm password is not"})
    }

    try {
        const recruiter = await Recruiter.create({
            company_name, company_email, password ,cpassword
        });

        await CompanyProfile.create({
            recruiter: recruiter._id
        })

        res.status(201).json({
            success: true,
            recruiter
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.login = async (req, res, next) => {
    const {company_email, password} = req.body;

    if(!company_email || !password) {
        res.status(400).json({ success: false, error: "Please provide email and password"})
    }

    try {
        const recruiter = await Recruiter.findOne({company_email}).select("+password");

        if(!recruiter) {
            res.status(404).json( { success: false, error: "Invalid Credentials"})
        }

        const isMatch = await recruiter.matchPasswords(password);

        if(!isMatch) {
            res.status(404).json({
                success: false,
                error: "Invalid Credentials"
            });
        }

        const token = generateToken({_id:recruiter._id, type: 'recruiter'})

        res.status(200).json({
            success: true,
            token
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error:error.message,
        })
    }
};

exports.forgotpassword = (req, res, next) => {
    res.send("Forgot Password Route");
};

exports.resetpassword = (req, res, next) => {
    res.send("Reset Password Route");
};