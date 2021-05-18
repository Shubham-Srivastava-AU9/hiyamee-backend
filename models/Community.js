const mongoose = require('mongoose');

const CommunitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for the community"]
    },
    description: {
        type: String,
        required: [true, "Please a description for the community"]
    },
    recruiter: {
        type: mongoose.Types.ObjectId,
        ref: 'Recruiter'
    },
    users_joined: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
});

const Community = mongoose.model("community", CommunitySchema);

module.exports = Community;