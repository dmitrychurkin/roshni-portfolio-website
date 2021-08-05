const router = require('./router');

router.get('/services', (req, res, next) => {
  res.render('services', { title: 'Services Roshni' });
});

module.exports = router;
