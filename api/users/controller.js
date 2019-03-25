import { User } from '../models'
import config from '../../config'
import jwt from 'jsonwebtoken'

export default {
  async signup(req, res) {
    const { io } = req.app
    const { email, password, teamId } = req.body
    // check if there is a user with the same email
    const exists = await User.findOne({ email: email.toLowerCase() })
    if(exists) return res.status(400).send('Email already exists.')

    const newUser = new User({
      email
    })

    // create and save hashed password
    newUser.password = newUser.generateHash(password)

    const user = await newUser.save(),
      tokenData = { id: user.id },
      // create a token
      token = jwt.sign(tokenData, config.JWT_SECRET, {expiresIn: '14d'})

    // send the token and user object as response
    res.send({ user, token })
  },
  async login(req, res) {
    const { email, password } = req.body

    // check if the user exists
    const user = await User.findOne({ email: email.toLowerCase() })
    if(!user) return res.status(400).send('User not found')

    // check if the password is correct
    // validPassword function comes from the model file
    const valid = user.validPassword(password)
    if(!valid) return res.status(400).send('Incorrect password')

    const tokenData = { id: user.id },
      // create a token
      token = jwt.sign(tokenData, config.JWT_SECRET, { expiresIn: '14d' })

    // send the token and user object as response
    res.send({ user, token })
  },

  async forgotPassword(req, res) {},
  async resetPassword(req, res) {}
}
