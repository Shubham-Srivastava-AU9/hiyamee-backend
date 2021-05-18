
const router = require('express').Router();

const { getJobs, getJob, createJob, updateJob, deleteJob, getJobApplications, updateJobApplication } = require('../../controllers/recruiter/job');
const {verifyRecruiter} = require('../../middlewares');

router.use(verifyRecruiter);

router.route("/")
    .get(getJobs)
    .post(createJob);

router.route("/:id")
    .get(getJob)
    .put(updateJob)
    .delete(deleteJob)

router.get("/:jobId/applications", getJobApplications)
router.put("/:jobId/applications/:id", updateJobApplication)

module.exports = router;