const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const newsRouter = require("./routes/news");


const whitelist = ["http://localhost:4200"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

//settings
const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use("/api", newsRouter);

//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongnoDB Atlas"))
    .catch((err) => console.log(err))


//server listening
app.listen(port, ()=>{console.log("Server listening to", port)})