// import routes
import usersRouter from './users/routes'

const appConfig = (app) => {
  app.use('/users', usersRouter)
  // other routes
}

export default appConfig
