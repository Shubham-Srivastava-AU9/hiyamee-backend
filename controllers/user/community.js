const Community = require('../../models/Community');

exports.getCommunities = async (req, res, next) => {

    try {
        const Communities = await Community.find({});

        res.json({
            success: true,
            data: Communities
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.getCommunity = async (req, res, next) => {
    const {id:_id} = req.params;

    try {
        const Community = await Community.findOne({
            _id
        });

        res.json({
            success: true,
            data: Community
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.joinCommunity = async (req, res, next) => {

    const {_id:user} = req.user;
    const {id:_id} = req.params;

    try {
        const Community = await Community.findOne({
            _id
        });

        Community.users_joined.push(user);
        Community.save();

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

exports.leaveCommunity = async (req, res, next) => {

    const {_id:user} = req.user;
    const {id:_id} = req.params;

    try {
        const Community = await Community.findOne({
            _id
        });

        Community.users_joined = Community.users_joined.filter(u => u!==user);
        Community.save();

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