const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/")
.post(articlesController.create)
.get(articlesController.findAll)

module.exports = router
