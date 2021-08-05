const router = require('./router');

router.get('/portfolio', (req, res, next) => {
  res.render('portfolio', { title: 'Portfolio Roshni' });
});

module.exports = router;
