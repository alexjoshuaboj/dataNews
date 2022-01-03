const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const newsRouter = require("./routes/news");


//settings
const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use("/api", newsRouter);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
    });


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongnoDB Atlas"))
    .catch((err) => console.log(err))


//server listening
app.listen(port, ()=>{console.log("Server listening to", port)})