const { Schema, model, ObjectId } = require("mongoose");

const DiscountSchema = new Schema({
  type: {
    type: String,
    default: 'percent'
  },
  value: {
    type: Number,
    required: true
  },
  user_id: {
    type: ObjectId
  },
  used: {
    type: Boolean,
    default: false,
  }
});

module.exports = model("Discounts", DiscountSchema);
