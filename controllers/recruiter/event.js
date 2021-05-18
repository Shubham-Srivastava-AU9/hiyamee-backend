const Event = require('../../models/Event');

exports.getEvents = async (req, res, next) => {

    const {_id:recruiter} = req.recruiter;

    try {
        const events = await Event.find({
            recruiter
        });

        res.json({
            success: true,
            data: events
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.getEvent = async (req, res, next) => {

    const {_id:recruiter} = req.recruiter;
    const {id:_id} = req.params;

    try {
        const event = await Event.findOne({
            recruiter, _id
        });

        res.json({
            success: true,
            data: event
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.createEvent = async (req, res, next) => {

    const {_id:recruiter} = req.recruiter;

    const {name, description, date_time, offline, live_link, max_participants, location, community} = req.body;

    try {
        const event = await Event.create({
            name, description, date_time, offline, live_link, max_participants, location, community, recruiter
        });

        res.json({
            success: true,
            data: event
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.updateEvent = async (req, res, next) => {

    const {_id:recruiter} = req.recruiter;
    const {id:_id} = req.params;

    const {name, description, date_time, offline, live_link, max_participants, location, community} = req.body;

    try {
        await Event.updateOne({
            _id, recruiter
        },{
            name, description, date_time, offline, live_link, max_participants, location
        });

        const event = {_id, recruiter, name, description, date_time, offline, live_link, max_participants, location, community};

        res.json({
            success: true,
            data: event
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.deleteEvent = async (req, res, next) => {

    const {_id:recruiter} = req.recruiter;
    const {id:_id} = req.params;

    try {
        await Event.deleteOne({
            _id, recruiter
        });

        res.json({
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};