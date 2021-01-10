const router = require("express").Router();
const covidController = require("../../controllers/covidControllers");

router.route("/")
console.log("test3controller")
  .get(covidController.findAll)
  .post(covidController.create);

router
  .route("/:id")
  .get(covidController.findById)
  .put(covidController.update)
  .delete(covidController.remove);

module.exports = router;
