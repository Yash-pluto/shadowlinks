import mongoose from "mongoose";

const starSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

const Star = mongoose.model("Star", starSchema);

export default Star;
