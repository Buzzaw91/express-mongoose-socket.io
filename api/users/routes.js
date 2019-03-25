import express from 'express'
import controller from './controller'
const router = express.Router()

// these are used as API_URL/users/routeName
// signup endpoint is API_URL/users/signup in this case
router.post('/signup', controller.signup)
router.post('/login', controller.login)

export default router
