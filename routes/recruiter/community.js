
const router = require('express').Router();

const { getCommunities, getCommunity, createCommunity, updateCommunity, deleteCommunity } = require('../../controllers/recruiter/Community');
const {verifyRecruiter} = require('../../middlewares');

router.use(verifyRecruiter);

router.route("/")
    .get(getCommunities)
    .post(createCommunity);

router.route("/:id")
    .get(getCommunity)
    .put(updateCommunity)
    .delete(deleteCommunity)

module.exports = router;