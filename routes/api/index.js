const router = require("express").Router();
const foodRoutes = require("./covidfit");

router.use("/covidfit", foodRoutes);

module.exports = router;
