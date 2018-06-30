const router = require('express').Router();
const User = require('../../models/user');

router.get('/user', (req, res) => {
  User.findOneByUserId(1)
    .then(user => res.status(200).json(user))
    .catch(() => {});
});

module.exports = router;
