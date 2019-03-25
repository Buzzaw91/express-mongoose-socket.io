# Server Boilerplate
This repo is an opinionated approach for a scalable back-end API with auth (with JWT).

WARNING: Don't forget to validate the data coming to your endpoints. I did not include anything for security except auth with JWT, which is NOT enough.

## Features

- [x] Cors
- [x] .env with dotenv
- [x] Working signup / login routes
- [x] Save/validate hashed password (bcrypt)
- [x] Socket.io
- [x] JWT auth to all endpoints (except excluded ones in config) and socket connection
- [x] Todos - sends todo to all connected clients
- [x] Another client side repo showing how to use/connect to socket.io etc. (react-native-boilerplate)

## Client side usage

If you want a client side example, worry not, citizen! Here is another boilerplate (react-native) that works with this repository: [react-native-boilerplate](https://github.com/lunatolun/react-native-boilerplate)

## Config

Clone and do npm i

Then, create a file named .env at the root of the project folder

The .env file should contain the following variables (for localhost)

```
DB_URL=mongodb://localhost:27017/
JWT_SECRET=YOURJWTSECRET
```

Other than this, you need to have mongo installed locally.
Follow [this](https://docs.mongodb.com/v3.2/administration/install-community/) if you haven't done so.

Alternatively, you can quickly create an account in [mlab](http://mlab.com/) and use the server from there. There is a sandbox tier (free).

## Running

If you have the DB locally, do `mongod` in terminal, then run the project `npm start`
