const  mongoose = require('mongoose');
mongoose.connect("mongodb+srv://jatin8612:Jatin%40rkblbrrk!12@cluster0.nkvwqm9.mongodb.net/todo");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo',todoSchema);

module.exports = {todo}