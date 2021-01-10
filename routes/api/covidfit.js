const router = require("express").Router();
const covidController = require("../../controllers/covidControllers");

router.route("/api/covidfit")
  .get(covidController.findAll)
  .post(covidController.create);


router
  .route("/api/covidfit")
  .get(covidController.findById)
  .put(covidController.update)
  .delete(covidController.remove);

module.exports = router;
