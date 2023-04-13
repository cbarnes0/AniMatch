const router = require('express').Router();

const homePageRoutes = require('./homePageRoutes')
const userRoutes = require('./userRoutes')
const favoriteRoutes = require('./favoriteRoutes')
const aboutRoutes = require('./aboutRoutes')

router.use('/about', aboutRoutes)
router.use('/homepageroutes', homePageRoutes)
router.use('/userroutes', userRoutes)
router.use('/favorite', favoriteRoutes)

module.exports = router;
