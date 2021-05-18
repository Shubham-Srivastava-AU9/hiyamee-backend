const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const RecruiterSchema = new mongoose.Schema({
    company_name: {
        type: String,
        required: [true, "Please provide a name"]
    },
    company_email: {
        type: String,
        required: [true, "Please provide a email"],
        unique:true,
       
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email"
        ]
    },
    // phone_number: {
    //     type: Number
    // },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minlength: 6,
        select: false
    },
    cpassword: {
        type: String,
        required: [true, "Please add a password"],
        minlength: 6,
        select: false
    },
    subscription: {
        type: mongoose.Types.ObjectId,
        ref: 'SubscriptionStatus'
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
});

RecruiterSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    this.cpassword = await bcrypt.hash(this.cpassword, salt)

    next();
})

RecruiterSchema.methods.matchPasswords = async function (password) {
    return await bcrypt.compare(password, this.password);
}

const Recruiter = mongoose.model("recruiter", RecruiterSchema);

module.exports = Recruiter;