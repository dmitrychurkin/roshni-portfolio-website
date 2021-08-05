const router = require('./router');

router.get('/about-us', (req, res, next) => {
  res.render('about-us', { title: 'About Roshni' });
});

module.exports = router;
