const mongoose = require("mongoose");

const CarsSchema = new mongoose.Schema({
  make: {
    type: String,
  },
  model: {
    type: String,
  },
  trany: {
    type: String,
  },
  fueltype1: {
    type: String,
  },
  city08: {
    type: Number,
  },
  highway08: {
    type: Number,
  },
  id: {
    type: Number,
  },
  fuelcost08: {
    type: Number,
  },
  count: {
    type: Number,
  },
});
const Cars = mongoose.model("Car", CarsSchema, "AllCarNames");

module.exports = Cars;
