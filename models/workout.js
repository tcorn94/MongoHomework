const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workout = new Schema({
 
 day:{
  type: Date,
  default: current,
 },
 
 
 
 exercises:[{
 
  type: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  name: {
    type: String,
    required: true
  },

  duration:
  {type: Number,
  required: true
},

weight:
{type: Number,
required: true
},

reps:
{type: Number,
required: true
},

sets:
{type: Number,
required: true
}}]


});

const workout = mongoose.model("Example", workout);

module.exports = workout;