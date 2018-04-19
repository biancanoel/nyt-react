const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/")
.post(articlesController.create)
.get(articlesController.findAll)

router
.route("/:id")
.delete(articlesController.remove)
// .get(articlesController.findById)

module.exports = router
