import express from 'express'
import dbConfig from './config/db'
import ioConfig from './config/ioConfig'
import configMiddlewares from './config/middlewares'
import appConfig from './api'
import cors from 'cors'
import http from 'http'
import SocketIO from 'socket.io'

const port = process.env.PORT || 4000
const app = express()

// add your cors
app.use('*', cors({ origin: [
  'http://localhost:3000',
  'http://localhost:4000'
] }))

dbConfig(app)
configMiddlewares(app)
appConfig(app)

const server = http.Server(app)
const io = new SocketIO(server)

ioConfig(io)

// inserts io to each route/to the app params
// const { io } = req.app
app.io = io

server.listen(port, () => console.log(`App listening on port ${port}`))
