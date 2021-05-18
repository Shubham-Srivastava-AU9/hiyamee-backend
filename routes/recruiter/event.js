
const router = require('express').Router();

const { getEvents, getEvent, createEvent, updateEvent, deleteEvent } = require('../../controllers/recruiter/event');
const {verifyRecruiter} = require('../../middlewares');

router.use(verifyRecruiter);

router.route("/")
    .get(getEvents)
    .post(createEvent);

router.route("/:id")
    .get(getEvent)
    .put(updateEvent)
    .delete(deleteEvent)

module.exports = router;