const User = require('../../models/User');
const UserProfile = require('../../models/UserProfile');

const {generateToken} = require('../../utils');

exports.register = async (req, res, next) => {
    const {first_name, last_name, username, email_id, mobile_number, gender, dob, password , cpassword} = req.body

    if(password!==cpassword){
        return res.json({msg:"Password is not matching with confirm password"})
    }
    // console.log(req.body);
    
    try {
        const user = await User.create({
            first_name, last_name, username, email_id, mobile_number, gender, dob, password , cpassword
        });
        

        await UserProfile.create({
            user: user._id
        });

        res.status(201).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.login = async (req, res, next) => {
    const {email_id, password} = req.body;

    if(!email_id || !password) {
        res.status(400).json({ success: false, error: "Please provide email and password"})
    }

    try {
        const user = await User.findOne({ email_id }).select("_id, password");

        if(!user) {
            res.status(404).json( { success: false, error: "Invalid Credentials"})
        }

        const isMatch = await user.matchPasswords(password);

        if(!isMatch) {
            res.status(404).json({
                success: false,
                error: "Incorrect password"
            });
        }

        const token = generateToken({_id:user._id, type: 'user'})

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