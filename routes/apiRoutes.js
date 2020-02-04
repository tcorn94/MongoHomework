const express = require("express");
const mongoose = require("mongoose");

const app = express();

const woSchema = require("../models/workout");

const exercise = mongoose.model("workout", woSchema);

// /api/workouts get read all


app.get("/api/workouts", (req, res) => {
   
    exercise.find({})
      .then(dbexercise => {
        res.json(dbexercise);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
//post /api/workouts create workout doc
app.post("/api/workouts", ({body}, res) => {
    exercise.create(body)
    .then(dbexercise => {
      console.log(dbexercise);
    })
    .catch(({ message }) => {
      console.log(message);
    })});

//update /api/workouts/:id to update add exercise
app.post("/api/workouts/:id", ({ body }, res) => {
    db.workout.create(body)
      .then(({ _id }) => db.workout.findOneAndUpdate({}, { $push: { workout: _id } }, { new: true }))
      .then(dbexercise => {
        res.json(dbexercise);
      })
      .catch(err => {
        res.json(err);
      });
  });

// get /api/workouts/range to read last 7 docs
app.get("/api/workouts/range", (req, res) => {
    exercise.find({
      day: {
        $gte: new Date().setDate(new Date().getDate()-7),
        $lte: new Date().setDate(new Date().getDate()-1)
      }
      .then(dbexercise => {
        res.json(dbexercise);
      })
      .catch(err => {
        res.json(err);
      }),
  })})
