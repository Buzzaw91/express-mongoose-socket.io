import { routeCreator } from '../lib'

// import and create routes
const usersRouter = routeCreator(require('./users'))
const todosRouter = routeCreator(require('./todos'))

// our endpoints
const apiConfig = (app) => {
  app.use('/users', usersRouter)
  app.use('/todos', todosRouter)
}

export default apiConfig
