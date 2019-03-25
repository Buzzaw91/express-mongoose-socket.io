// import routes
import usersRouter from './users/routes'
import todosRouter from './todos/routes'

// our endpoints
const apiConfig = (app) => {
  app.use('/users', usersRouter)
  app.use('/todos', todosRouter)
  // other routes here...
}

export default apiConfig
