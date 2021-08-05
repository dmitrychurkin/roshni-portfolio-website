const router = require('./router');

router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact Roshni' });
});

module.exports = router;
