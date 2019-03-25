import express from 'express'
import controller from './controller'
const router = express.Router()

// these are used as API_URL/todos/routeName
// add todo endpoint is API_URL/todos/add in this case
router.post('/add', controller.add)
router.put('/complete', controller.complete)

export default router
