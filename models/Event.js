const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for the event"]
    },
    image: {
        type:String
    },
    description: {
        type: String,
        required: [true, "Please provide a description for the event"]
    },
    date_time: {
        type: Date
    },
    location: {
        type: String
    },
    offline: {
        type:Boolean
    },
    max_participants: {
        type: Number
    },
    live_link: {
        type: String,
    },
    community: {
        type: mongoose.Types.ObjectId,
        ref: 'Community'
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

const Event = mongoose.model("event", EventSchema);

module.exports = Event;