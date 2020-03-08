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
        return Discount.update(discount, { used: true} )
    }

    patchDiscount(discount,updateData){
        return Discount.update(discount,updateData)
    }

    deleteDiscount(discount){
        return Discount.deleteOne(discount);
    }
}

module.exports = new DiscountService();