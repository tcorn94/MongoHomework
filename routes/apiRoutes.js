// /api/workouts get read all
app.get("/books", (req, res) => {
    db.Book.find({})
      .then(dbBook => {
        res.json(dbBook);
      })
      .catch(err => {
        res.json(err);
      });
  });
  

//post /api/workouts create workout doc
app.post("/submit", ({body}, res) => {
    db.User.create({ name: "Ernest Hemingway" })
    .then(dbUser => {
      console.log(dbUser);
    })
    .catch(({ message }) => {
      console.log(message);
    })});

//update /api/workouts/:id to update add exercise
app.post("/submit", ({ body }, res) => {
    db.Note.create(body)
      .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });

//get /api/workouts/range to read last 7 docs
app.get("/user", (req, res) => {
    db.User.find({})
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });