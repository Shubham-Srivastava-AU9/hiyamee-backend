
const router = require('express').Router();

const { getProfile, updateProfile } = require('../../controllers/recruiter/profile');
const {verifyRecruiter} = require('../../middlewares');

router.use(verifyRecruiter);

router.route("/")
    .get(getProfile)
    .put(updateProfile)

module.exports = router;