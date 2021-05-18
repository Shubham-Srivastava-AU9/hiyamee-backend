
const router = require('express').Router();

const { getCommunities, getCommunity, joinCommunity, leaveCommunity } = require('../../controllers/user/community');
const {verifyUser} = require('../../middlewares');

router.use(verifyUser);

router.route("/")
    .get(getCommunities)

router.route("/:id")
    .get(getCommunity)
    
router.put("/:id/join", joinCommunity);
router.put("/:id/leave", leaveCommunity);

module.exports = router;