// home page / index html
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(index.html);
  });

///exercise.html 
app.get("/exercise", (req, res) => {
    res.send(exercise.html);
  });

//stats.html stats 
app.get("/stats", (req, res) => {
    res.send(stats.html);
  });