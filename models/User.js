const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "Please provide your first name"]
    },
    last_name: {
        type: String,
        required: [true, "Please provide your last name"]
    },
    email_id: {
        type: String,
        required: [true, "Please provide an email address"],
        unique: true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email"
        ]
    },
    // username: {
    //     type: String,
    //     unqiue: true,
        
    // },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 6,
        select: false
    },
    cpassword: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 6,
        select: false
    },
    // mobile_number: {
    //     type: Number,
        
    // },
    // dob: {
    //     type: Date,
    // },
    isActive:{
        type :Boolean,
        default :"true"
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
});

UserSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    this.cpassword = await bcrypt.hash(this.cpassword, salt)
    next();
})

UserSchema.methods.matchPasswords = async function (password) {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("user", UserSchema);

module.exports = User;