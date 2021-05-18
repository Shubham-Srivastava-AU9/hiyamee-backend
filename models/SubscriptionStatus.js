const mongoose = require('mongoose');

const SubscriptionStatusSchema = new mongoose.Schema({
    plan: {
        type: String,
        required: [true, "Please provide a name for the plan"]
    },
    start_date: {
        type: Date
    },
    end_date: {
        type: Date
    },
});

const SubscriptionStatus = mongoose.model("subscription_status", SubscriptionStatusSchema);

module.exports = SubscriptionStatus;