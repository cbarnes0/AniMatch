const router = require('express').Router();

const userRoutes = require('./userRoutes');
const favoriteRoutes = require('./favoriteRoutes');

router.use('/favorites', favoriteRoutes);
router.use('/users', userRoutes);

module.exports = router;