const router = require("express").Router();
const foodRoutes = require("./covidfit");

// Book routes
router.use("/covidfit", foodRoutes);

module.exports = router;
