const router = require('express').Router()
const usersController = require('../app/controllers/usersController')
const authenticateUser = require('../app/middlewares/authentication')
const propertiesController = require('../app/controllers/propertiesController')
const reviewsController = require('../app/controllers/reviewsController')

//user
router.post('/register', usersController.register)
router.post('/login', usersController.login)
router.delete('/logout', usersController.logout)
router.get('/account',authenticateUser, usersController.account)

//property
router.get('/properties', authenticateUser, propertiesController.list)
router.get('/properties/:id', authenticateUser, propertiesController.show)
router.put('/properties/:id', authenticateUser, propertiesController.update)
router.post('/properties', authenticateUser, propertiesController.create)
router.delete('/properties/:id', authenticateUser, propertiesController.destroy)


//reviews
router.get('/reviews', authenticateUser, reviewsController.list)
router.put('/reviews/:id', authenticateUser, reviewsController.update)
router.delete('/reviews/:id', authenticateUser, reviewsController.destroy)

module.exports = router