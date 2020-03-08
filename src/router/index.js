const { Router } = require("express");

const { index, store } = require("../controller/DiscountsController");

const router = Router();

router.get("/", index).post("/", store);

module.exports = router;
