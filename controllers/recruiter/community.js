const Community = require('../../models/Event');

exports.getCommunities = async (req, res, next) => {

    const {_id:recruiter} = req.recruiter;

    try {
        const communities = await Community.find({
            recruiter
        });

        res.json({
            success: true,
            data: communities
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.getCommunity = async (req, res, next) => {

    const {_id:recruiter} = req.recruiter;
    const {id:_id} = req.params;

    try {
        const community = await Community.findOne({
            recruiter, _id
        });

        res.json({
            success: true,
            data: community
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.createCommunity = async (req, res, next) => {

    const {_id:recruiter} = req.recruiter;

    const {name, description} = req.body;

    try {
        const community = await Community.create({
            name, description, recruiter
        });

        res.json({
            success: true,
            data: community
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.updateCommunity = async (req, res, next) => {

    const {_id:recruiter} = req.recruiter;
    const {id:_id} = req.params;

    const {name, description} = req.body;

    try {
        await Community.updateOne({
            _id, recruiter
        },{
            name, description
        });

        const community = {_id, recruiter, name, description};

        res.json({
            success: true,
            data: community
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.deleteCommunity = async (req, res, next) => {

    const {_id:recruiter} = req.recruiter;
    const {id:_id} = req.params;

    try {
        await Community.deleteOne({
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