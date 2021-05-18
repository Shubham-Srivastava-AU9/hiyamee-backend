const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    job: {
        type: mongoose.Types.ObjectId,
        ref: 'Job'
    },
    status: {
        type: String,
        default: 'Applied'
    }
});

const Application = mongoose.model("application", ApplicationSchema);

module.exports = Application;