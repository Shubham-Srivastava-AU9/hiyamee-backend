const mongoose = require('mongoose');

const CompanyProfileSchema = new mongoose.Schema({
    recruiter: {
        type: mongoose.Types.ObjectId,
        ref: 'Recruiter',
        unique: true
    },
    name : {
        type : String
    },
    email_id: {
        type: String,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email"
        ]
    },
    
    company_phone_number: {
        type: Number
    },
    website: {
        type: String
    },
    description: {
        type: String
    },
    company_logo: {
        type: String
    },
    company_video: {
        type: String
    },
    linkedin_url: {
        type: String
    },
    facebook_url: {
        type: String
    },
    company_images: [{
        type: String
    }],
    cover_image : {
        type : String
    },
    mobile_no: {
        type: Number
    },
});

const CompanyProfile = mongoose.model("company_profile", CompanyProfileSchema);

module.exports = CompanyProfile;