const router = require('express').Router();
const Work = require('../../models/work');
const WorkHour = require('../../models/workHour');

router.get('/monthly_work/:date', (req, res) => {
  const month = req.params.date.split('_', '')[1];
  WorkHour.findOneByMonth(month).then((workHour) => {
    if (!workHour) return res.status(404).send({ err: 'workHour not found' });
    console.log(workHour);
  }).catch(err => res.status(500).send(err));

  Work.findOneByMonth(month).then((work) => {
    if (!work) return res.status(404).send({ err: 'workHour not found' });
    console.log(work);
  }).catch(err => res.status(500).send(err));
});

module.exports = router;
