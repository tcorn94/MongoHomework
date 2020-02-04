

const exercise = require("../models/workout");
const bodyParser = require('body-parser');
// /api/workouts get read all

module.exports = function(app){
  app.use(bodyParser.json())

  app.use(bodyParser.urlencoded({ extended: true }));
app.get("/api/workouts", (req, res) => {
  app.use(bodyParser.json())
  exercise.find({}, function (err, dbexercise) {
    if (err) {
      res.json(err);
    }
    else { res.json(dbexercise) };

  });
})

//post /api/workouts create workout doc
app.post("/api/workouts", (body, res) => {

  //console.log(body.body.todo)
  console.log(body.body);
  


  exercise.create(body.body), function (err, dbexercise) {
    if (err) {
      throw error;
    }
    else {
      res.json(dbexercise)
    }
  }
});

//update /api/workouts/:id to update add exercise
app.put("/api/workouts/:id", (body , res) => {

  exercise.findOneAndUpdate({ "_id": body.body._id }, body.body, { upsert: true }, function (err, docs) {
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

}