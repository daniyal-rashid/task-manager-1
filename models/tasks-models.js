const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20
    },
    completed:{
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model("Task", taskSchema)

module.exports = Task;