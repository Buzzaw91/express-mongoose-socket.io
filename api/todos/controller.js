// I could import from ./model, but we might use multiple models
// if it used User as well, it would be imported like following
// import { Todo, User } from '../models'
// imagine if you worked with 4-5 different models...
import { Todo } from '../models'

export default {
  async add(req, res) {
    const { io } = req.app
    const { text, _id } = req.body

    const todo = new Todo({
      _id,
      text,
      createdBy: req.user.id
    })

    await todo.save()

    // send todo to all connected users
    io.to('all-users').emit('newTodo', todo)
    // send to current user
    res.send(true)
  },

  // mark todo complete/incomplete
  async complete(req, res) {
    const { io } = req.app
    const { todoId, completed } = req.body

    /*
      feel free to fetch and change the completed field on the server
      for boilerplating purposes, sending from the client side seems faster to me
    */

    const todo = await Todo.findByIdAndUpdate(
      todoId,
      { completed },
      { new: true } // returns the updated document
    )

    // send the data to all connected users
    io.to('all-users').emit('complete', todo)
    // send to current user
    res.send(true)
  },
}
