const router = require('express').Router();
const User = require('../../models/user');

router.get('/user', (req, res) => {
  User.findOneByUserId(1)
    .then(user => res.json(user))
    .catch(err => res.send(err));
});

module.exports = router;
