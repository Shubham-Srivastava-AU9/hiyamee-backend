
const router = require('express').Router();

const { getProfile, updateProfile } = require('../../controllers/user/profile');
const {verifyUser} = require('../../middlewares');

router.use(verifyUser);

router.route("/")
    .get(getProfile)
    .put(updateProfile)

module.exports = router;