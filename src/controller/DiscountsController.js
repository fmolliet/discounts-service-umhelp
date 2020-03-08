const { indexDiscount, postDiscount, putDiscount, patchDiscount, showDiscount, deleteDiscount } = require("../service/DiscountsServices");

class DiscountsController {
  async index(req, res) {
    try {
      const discounts = await indexDiscount();
      return res.status(200).json(discounts);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async show(req, res) {
    try {
      const discounts = await showDiscount(req.query);
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

  async update(req, res){
    try {
      const discount = await patchDiscount(req.query,req.body);
      return res.status(200).json(discount);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async deactivate(req, res){
    try {
      const discount = await putDiscount(req.query);
      return res.status(200).json(discount);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async destroy(req, res){
    try {
      const discount = await deleteDiscount(req.query);
      return res.status(200).json(discount);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}

module.exports = new DiscountsController();
