const { Schema, model, ObjectId } = require("mongoose");

const DiscountSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  idUser: {
    type: ObjectId,
    required: true
  }
});

module.exports = model("Discounts", DiscountSchema);
