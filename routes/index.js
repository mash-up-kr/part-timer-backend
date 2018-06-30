const router = require('express').Router();

router.use('/api', require('./user'));

module.exports = router;
