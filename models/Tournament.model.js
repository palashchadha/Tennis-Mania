const mongoose = require("mongoose");

const TournamentSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  location: {
    type: String,
  },
  court: {
    type: String,
    required: true,
  },
  Points: {
    type: Number,
  },
  Prize: {
    type: Number,
  },
});

const TournamentModel = mongoose.model("tournament", TournamentSchema);

module.exports = TournamentModel;
