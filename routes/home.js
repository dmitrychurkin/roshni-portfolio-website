const router = require('./router');

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home Roshni' });
});

module.exports = router;
