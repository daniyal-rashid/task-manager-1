const express = require('express');
const mongoose = require("mongoose");
const Task = require("./models/tasks-models");
const tasks = require("./routes/tasks");
require("dotenv").config();
const app = express();


mongoose.connect(process.env.MONGO_URI)

app.use(express.json());
app.use("/api/v1/tasks", tasks)


// app.get("/", async (req, res) => {
//     const tasks = await Task.find({})
//     res.json({ tasks })
// })

// app.post("/addtask", async (req, res) => {
//     const task = await Task.create(req.body)
//     res.status(201).json({ task })
// })


app.listen(process.env.PORT, () => { console.log("server ios running at 3000...") })