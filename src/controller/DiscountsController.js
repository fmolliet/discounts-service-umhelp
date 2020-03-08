const { getDiscount, postDiscount } = require("../service/DiscountsServices");

class DiscountsController {
  async index(req, res) {
    try {
      const discounts = await getDiscount(req.query);
      return res.status(200).json(discounts);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async store(req, res) {
    try {
      const discount = await postDiscount(req.body);
      return res.status(200).json(discount);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}

module.exports = new DiscountsController();
