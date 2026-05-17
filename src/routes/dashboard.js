var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/listar", function(req, res) {
    dashboardController.listarTodos(req, res);
});

router.get("/buscar/:idClube", function(req, res) {
    dashboardController.buscarDados(req, res);
});

module.exports = router;