const router = require('express').Router();

const homePageRoutes = require('./homePageRoutes')
const favoriteRoutes = require('./favoriteRoutes')

router.use('/homepage', homePageRoutes)
router.use('/favorite', favoriteRoutes)

module.exports = router;
