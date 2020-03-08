const { Router } = require("express");

const { index, show, store } = require("../controller/DiscountsController");

const router = Router();

router.get("/", index)
        .get('/:_id', show)
        .post("/", store);

module.exports = router;
