const router = require('express').Router();

const auth = require('./auth');
const community = require('./community');
const event = require('./event');
const job = require('./job');
const profile = require('./profile');

router.use('/auth', auth);
router.use('/communities',community);
router.use('/events', event);
router.use('/jobs', job);
router.use('/profile', profile);

module.exports = router;

