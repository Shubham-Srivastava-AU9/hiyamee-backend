
const router = require('express').Router();

const { getJobs, getJob, applyJob, cancelJob } = require('../../controllers/user/job');
const {verifyUser} = require('../../middlewares');

router.use(verifyUser);

router.route("/")
    .get(getJobs)

router.route("/:id")
    .get(getJob)
    
router.put("/:jobId/apply", applyJob);
router.put("/:applicationId/cancel", cancelJob);

module.exports = router;