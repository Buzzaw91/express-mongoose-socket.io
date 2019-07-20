import express from 'express'
const router = express.Router()

const dynamicRouter = (routes) => {
  const generated = Object.keys(routes).map(route => {
    const { method, action } = routes[route]
    return router[method](`/${route}`, action)
  })

  return generated
}

export default dynamicRouter
