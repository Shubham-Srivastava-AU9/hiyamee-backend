const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    position_name: {
        type: String,
        required: [true, "Please provide a name for the position"]
    },
    position_details: {
        type: String,
    },
    position_type: {
        type: String
    },
    skill_sets: [{
        name: String,
        description: String
    }],
    experience: {
        minimum: {
            type: Number,
            required: [true, "Please provide the required experience for the position"]
        },
        maximum: {
            type: Number,
            required: [true, "Please provide the required experience for the position"]
        },
    },
    locations: [{
        type: String,
    }],
    salary_offered: {
        minimum: Number,
        maximum: Number,
        negotiable: Boolean
    },
    job_functions: [{
        type: String,
    }],
    values_required: {
        type: String,
    },
    active: {
        type: Boolean,
        default: true
    },
    recruiter: {
        type: mongoose.Types.ObjectId,
        ref: 'Recruiter'
    },
});

const Job = mongoose.model("job", JobSchema);

module.exports = Job;