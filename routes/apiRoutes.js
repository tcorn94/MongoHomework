// /api/workouts get read all
app.get("/api/workouts", (req, res) => {
    db.workout.find({})
      .then(dbBook => {
        res.json(dbBook);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
//post /api/workouts create workout doc
app.post("/api/workouts", ({body}, res) => {
    db.workout.create({ name: "Ernest Hemingway" })
    .then(dbUser => {
      console.log(dbUser);
    })
    .catch(({ message }) => {
      console.log(message);
    })});

//update /api/workouts/:id to update add exercise
app.post("/api/workouts/:id", ({ body }, res) => {
    db.workout.create(body)
      .then(({ _id }) => db.workout.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });

//get /api/workouts/range to read last 7 docs
app.get("/api/workouts/range", (req, res) => {
    db.workout.find({})
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });