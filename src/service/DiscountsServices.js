const Discount = require("../model/Discount");

class DiscountService {
    indexDiscount() {
        return Discount.find()
    }

    showDiscount(search){
        return Discount.findOne(search);
    }

    postDiscount(discount) {
        return Discount.create(discount);
    }

    putDiscount(discount){
        return Discount.update(discount)
    }


}

module.exports = new DiscountService();