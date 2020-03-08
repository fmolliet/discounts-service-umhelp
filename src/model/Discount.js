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
  id_user: {
    type: ObjectId
  }
});

module.exports = model("Discounts", DiscountSchema);
