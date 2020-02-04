const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true ,  useFindAndModify: false});

app.listen(PORT, function(){
    console.log("Connected on port: " + PORT)
})

