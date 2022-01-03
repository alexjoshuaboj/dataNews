const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const newsRouter = require("./routes/news");



//settings
const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(express.json());
app.use("/api", newsRouter);

//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongnoDB Atlas"))
    .catch((err) => console.log(err))


//server listening
app.listen(port, ()=>{console.log("Server listening to", port)})