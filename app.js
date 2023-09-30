const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user-routes.js');
const blogRouter = require('./routes/blog-routes.js');

const app = express();

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);

mongoose.connect("mongodb+srv://bhoomikahm18:bhoomi123@cluster0.5qlvwpp.mongodb.net/Blog?retryWrites=true&w=majority")
    .then(() => app.listen(5000))
    .then(() => console.log("Connected to Databse and listening to localhost 5000"))
    .catch((err) => console.log(err))