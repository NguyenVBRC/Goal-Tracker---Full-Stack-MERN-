const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const goals = require("./router/goals.js")
const port = 4000;

require("dotenv").config();
DB_KEY = process.env.MONGO_KEY;
const uri = `mongodb+srv://Test123:${DB_KEY}@cluster0.ujggnnh.mongodb.net/?retryWrites=true&w=majority`

app.use(cors());
app.use(express.json());
app.use(goals);

async function connect() {
    try {
      await mongoose.connect(uri);
      console.log("Connected to MongoDb");
      
    } catch (error) {
      console.error(error);
    }
    app.listen(port, ()=>{
      console.log(`Server started on port ${port}.`)
    });
}
connect();

