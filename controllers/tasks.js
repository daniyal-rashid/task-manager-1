const Task = require("../models/tasks-models")




const getAllTask = async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })

}

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
            return res.send(`No task found with id: ${taskID}`)
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(404).send("NOT FOUND 404")
        console.log(error)
    }

}

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.send(`No task found with id: ${taskID}`)
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(404).send("NOT FOUND 404")
        console.log(error)
    }

}

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body)
        // const updatedTask = await Task.findOne({_id: taskID})
        // res.status(200).json({before: task, after: updatedTask})
        if (!task) {
            return res.send(`No task found with id: ${taskID}`)
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(404).send("NOT FOUND 404")
        console.log(error)
    }

}

module.exports = {
    getAllTask,
    createTask,
    getTask,
    deleteTask,
    updateTask
}