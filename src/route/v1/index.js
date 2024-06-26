const express = require('express')
const seriesRoutes = require('./series.routes')
const movieRoutes = require('./movies.routes')
const laptopRoutes = require('./laptop.routes')
const bagRoutes = require('./bag.routes')
const bottelRoutes = require('./bottel.routes')
const bookRoutes = require('./book.routes')
const empRoutes = require('./emp.routes')
const carRoutes = require('./car.routes')
const phoneRoutes = require('./phone.routes')
const jweleryRoutes = require('./jwelery.routes')
const gameRoutes = require('./game.routes')
const calcRoutes = require('./calc.routes')
const bikeRoutes = require('./bike.routes')
const watchRoutes = require('./watch.routes')
const petRoutes = require('./pet.routes')
const softwareRoutes = require('./software.routes')
const colorRoutes = require('./color.routes')
const foodRoutes = require('./food.routes')
const userRoutes = require('./user.routes')
const adminRoutes = require('./admin.routes')
const cartoonRoutes = require('./cartoon.routes')
const documentryRoutes = require('./documentry.routes')
const engineerRoutes = require('./enginner.routes')
const socialRoutes = require('./social.routes')
const stateRoutes = require('./state.routes')







const router = express()

router.use('/series',seriesRoutes)
router.use('/movies',movieRoutes)
router.use('/laptop',laptopRoutes)
router.use('/bag',bagRoutes)
router.use('/bottel',bottelRoutes)
router.use('/book',bookRoutes)
router.use('/emp',empRoutes)
router.use('/car',carRoutes)
router.use('/phone',phoneRoutes)
router.use('/jwelery',jweleryRoutes)
router.use('/game',gameRoutes)
router.use('/calc',calcRoutes)
router.use('/bike',bikeRoutes)
router.use('/watch',watchRoutes)
router.use('/pet',petRoutes)
router.use('/software',softwareRoutes)
router.use('/color',colorRoutes)
router.use('/food',foodRoutes)
router.use('/user',userRoutes)
router.use('/admin',adminRoutes)
router.use('/cartoon',cartoonRoutes)
router.use('/documentry',documentryRoutes)
router.use('/engineer',engineerRoutes)
router.use('/social',socialRoutes)
router.use('/state',stateRoutes)





module.exports = router