const router = require('./router');

router.get('/elements', (req, res, next) => {
  res.render('elements', { title: 'Elements Roshni' });
});

module.exports = router;
