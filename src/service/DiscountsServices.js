const Discount = require("../model/Discount");

class DiscountService {
    indexDiscount() {
        return Discount.find();
    }

    showDiscount(search){
        return Discount.findOne(search);
    }

    postDiscount(discount) {
        return Discount.create(discount);
    }

    putDiscount(discount){
        return Discount.updateOne(discount, { used: true} )
    }

    patchDiscount(discount,updateData){
        return Discount.updateOne(discount,updateData)
    }

    deleteDiscount(discount){
        return Discount.deleteOne(discount);
    }

    getDiscountId(search){
        return Discount.find(search).sort({ 'value': -1 }).limit(1);
    }
}

module.exports = new DiscountService();