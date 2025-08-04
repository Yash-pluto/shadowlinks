const mongoose = require("mongoose");

const starSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Star", starSchema);
