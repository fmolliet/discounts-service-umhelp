const { indexDiscount, postDiscount, putDiscount, showDiscount } = require("../service/DiscountsServices");

class DiscountsController {
  async index(req, res) {
    try {
      const discounts = await indexDiscount(req.query);
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
      //const discounts = await getDiscount(req.query);
      const discount = await putDiscount(req.body);
      return res.status(200).json(discount);
    } catch (err) {
      return res.status(400).json(err);
    }
  }



  
}

module.exports = new DiscountsController();
