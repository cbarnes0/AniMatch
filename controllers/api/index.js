const router = require('express').Router();

const homePageRoutes = require('./homePageRoutes')
const userRoutes = require('./userRoutes')
const favoriteRoutes = require('./favoriteRoutes')

router.use('/homepageroutes', homePageRoutes)
router.use('/userroutes', userRoutes)
router.use('/favorite', favoriteRoutes)

module.exports = router;
