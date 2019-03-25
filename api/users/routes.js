import express from 'express'
// import './model'
import controller from './controller'
const router = express.Router()

router.post('/signup', controller.signup)
router.post('/login', controller.login)

export default router
