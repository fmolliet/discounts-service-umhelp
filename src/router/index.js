const { Router } = require("express");

const { index, show, store, update, destroy, deactivate } = require("../controller/DiscountsController");

const router = Router();

router.get("", index)
        .get('/:_id', show)
        .post("/", store)
        .patch("/:_id", update)
        .put("/:_id/Deactivate",deactivate)
        .delete("/:_id", destroy);

module.exports = router;
