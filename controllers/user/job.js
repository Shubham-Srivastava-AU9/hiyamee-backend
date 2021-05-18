const Job = require('../../models/Job');
const Application = require('../../models/Application');

exports.getJobs = async (req, res, next) => {

    try {
        const jobs = await Job.find({});

        res.json({
            success: true,
            data: jobs
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.getJob = async (req, res, next) => {
    const {id:_id} = req.params;

    try {
        const job = await Job.findOne({
            _id
        });

        res.json({
            success: true,
            data: job
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.applyJob = async (req, res, next) => {

    const {_id:user} = req.user;
    const {jobId: job} = req.params;

    try {
        const application = await Application.create({
            user, job
        });

        res.json({
            success: true,
            data: application
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.cancelJob = async (req, res, next) => {

    const {_id:user} = req.user;
    const {applicationId:_id} = req.params;

    try {
        await Application.deleteOne({
            _id, user
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