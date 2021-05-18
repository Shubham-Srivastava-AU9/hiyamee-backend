const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        unique: true
    },
    username: {
        type: String,
        unqiue: true,
        
    },
    mobile_number: {
        type: Number,
        
    },
    dob: {
        type: Date,
    },
    email :{
        type: String,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email"
        ]
    },
    resume: {
        type: String
    },
    employed: {
        type: Boolean,
    },
    current_location: {
        type: String,
    },
    preferred_locations: [{
        type: String,
    }],
    preferred_joining_date: {
        type: Date
    },
    current_salary: {
        type: Number
    },
   
    current_company: {
        name: String,
        position: String,
        start_date: Date,
        notice_period: Number
    },
    previous_companies: [{
        name: String,
        position: String,
        start_date: Date,
        end_date: Date,
    }],
    education: [{
        institute_name: String,
        stream: String,
        year_of_passing: Number,
        percentage: Number,
        cgpa: Number,
    }],
    skill_sets: [{
        name: String,
        years_of_experience: String,
        level_of_expertise: Number
    }],
    years_of_experience: {
        type: Number
    },
    months_of_experience: {
        type: Number
    },
    awards: [{
        type: String
    }],
    certifications: [{
        name: String,
        provided_by: String,
        valid_till: Date,
        link: String
    }],
    hobbies: [{
        type: String
    }],
});

const UserProfile = mongoose.model("user_profile", UserProfileSchema);

module.exports = UserProfile;