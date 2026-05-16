var express = require("express");
var router  = express.Router();
var desempenhoController = require("../controllers/desempenhoController");

router.get("/desempenho", desempenhoController.listarDesempenho);

module.exports = router;