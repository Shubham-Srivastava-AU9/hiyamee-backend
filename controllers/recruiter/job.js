const Job = require('../../models/Job');

exports.getJobs = async (req, res, next) => {

    const {_id:recruiter} = req.recruiter;

    try {
        const jobs = await Job.find({
            recruiter
        });

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

    const {_id:recruiter} = req.recruiter;
    const {id:_id} = req.params;

    try {
        const job = await Job.findOne({
            recruiter, _id
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

exports.createJob = async (req, res, next) => {

    const {_id:recruiter} = req.recruiter;

    const {position_name, position_details, position_type, skill_sets, experience, locations, salary_offered, job_functions, values_required} = req.body;
    // console.log(req.body);
    try {
        const job = await Job.create({
            position_name, position_details, position_type, skill_sets, experience, locations, salary_offered, job_functions, values_required, recruiter
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

exports.updateJob = async (req, res, next) => {

    const {_id:recruiter} = req.recruiter;
    const {id:_id} = req.params;

    const {position_name, position_details, position_type, skill_sets, experience, locations, salary_offered, job_functions, values_required, active} = req.body;

    try {
        await Job.updateOne({
            _id, recruiter
        },{
            position_name, position_details, position_type, skill_sets, experience, locations, salary_offered, job_functions, values_required, active
        });

        const job = {_id,position_name, position_details, position_type, skill_sets, experience, locations, salary_offered, job_functions, values_required, active, recruiter};

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

exports.deleteJob = async (req, res, next) => {

    const {_id:recruiter} = req.recruiter;
    const {id:_id} = req.params;

    try {
        await Job.deleteOne({
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

exports.getJobApplications = async (req, res, next) => {

    const {_id:recruiter} = req.recruiter;
    const {jobId:job} = req.params;

    try {

        const jobData = await Job.findOne({_id:job});

        if(jobData.recruiter !== recruiter){
            return res.status(401).json({
                success: false,
                error: 'Unauthorized',
            });
        }

        const applications = await Application.find({
            job
        });

        res.json({
            success: true,
            data: applications
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.updateJobApplication = async (req, res, next) => {

    const {_id:recruiter} = req.recruiter;
    const {jobId:job, id:_id} = req.params;

    const {status} = req.body;

    try {

        const jobData = await Job.findOne({_id:job});

        if(jobData.recruiter !== recruiter){
            return res.status(401).json({
                success: false,
                error: 'Unauthorized',
            });
        }

        await Application.updateOne({
            job, _id
        },{
            status
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