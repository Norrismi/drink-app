const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    locationMade: {
      type: String,
      required: true
    },
    review: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    ownerId: {
      type: String,
      required: true
    }
  },

  { timestamps: true }
);

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = { Drink };
