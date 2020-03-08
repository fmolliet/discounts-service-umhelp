const Discount = require("../model/Discount");

class DiscountService {
    indexDiscount(search) {
        return Discount.findOne(search)
    }

    postDiscount(discount) {
        return Discount.create(discount);
    }
}

module.exports = new DiscountService();