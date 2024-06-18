const  mongoose = require('mongoose');
const { date } = require('zod');
mongoose.connect("mymongodburl");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    completed: Boolean
})

const todo = mongoose.model('todo',todoSchema);

module.exports = {todo}
