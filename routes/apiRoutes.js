const express = require("express");
const mongoose = require("mongoose");

const app = express();

const woSchema = require("../models/workout");

const exercise = mongoose.model("workout", woSchema);

// /api/workouts get read all


app.get("/api/workouts", (req, res) => {

  exercise.find({}, function (err, dbexercise) {
    if (err) {
      res.json(err);
    }
    else { res.json(dbexercise) };

  });
})

//post /api/workouts create workout doc
app.post("/api/workouts", ({ body }, res) => {

  exercise.create(body), function (err, dbexercise) {
    if (err) {
      throw error;
    }
    else {
      res.json(dbexercise)
    }
  }
});

//update /api/workouts/:id to update add exercise
app.post("/api/workouts/:id", ({ body }, res) => {

  exercise.findOneAndUpdate({ "_id": body.id }, body, { upsert: true }, function (err, docs) {
    if (err) {
      throw error;
    }
    else {
      res.json(docs)
    }

  })
})


// get /api/workouts/range to read last 7 docs
app.get("/api/workouts/range", (req, res) => {

  exercise.find({
    day: {
      $gte: new Date().setDate(new Date().getDate() - 7),
      $lte: new Date().setDate(new Date().getDate() - 1)
    }
  }, function (err, docs) {
    if (err) {
      throw error;
    }
    else {
      res.json(docs)

    }

  });

})
