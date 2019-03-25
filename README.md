# Server Boilerplate
This repo is an opinionated approach for a scalable back-end API with auth (with JWT).

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
