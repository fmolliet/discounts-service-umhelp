const { Router } = require("express");

const { index, show, store, update, destroy, deactivate, getDiscountFrom } = require("../controller/DiscountsController");

const router = Router();

router.get("", index)
        .get('/:_id', show)
        .get('/:user_id/price', getDiscountFrom)
        .post("/", store)
        .patch("/:_id", update)
        .put("/:_id/Deactivate",deactivate)
        .delete("/:_id", destroy);

module.exports = router;
