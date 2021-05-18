const Event = require('../../models/Event');

exports.getEvents = async (req, res, next) => {

    try {
        const events = await Event.find({});

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
    const {id:_id} = req.params;

    try {
        const event = await Event.findOne({
            _id
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

exports.joinEvent = async (req, res, next) => {

    const {_id:user} = req.user;
    const {id:_id} = req.params;

    try {
        const event = await Event.findOne({
            _id
        });

        event.users_joined.push(user);
        event.save();

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

exports.leaveEvent = async (req, res, next) => {

    const {_id:user} = req.user;
    const {id:_id} = req.params;

    try {
        const event = await Event.findOne({
            _id
        });

        event.users_joined = event.users_joined.filter(u => u!==user);
        event.save();

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