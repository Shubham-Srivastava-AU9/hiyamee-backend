
const router = require('express').Router();

const { getEvents, getEvent, joinEvent, leaveEvent } = require('../../controllers/user/event');
const {verifyUser} = require('../../middlewares');

router.use(verifyUser);

router.route("/")
    .get(getEvents)

router.route("/:id")
    .get(getEvent)
    
router.put("/:id/join", joinEvent);
router.put("/:id/leave", leaveEvent);

module.exports = router;