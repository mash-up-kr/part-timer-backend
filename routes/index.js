const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.use('/api', require('./user'));

module.exports = router;
