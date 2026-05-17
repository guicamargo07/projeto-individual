var dashboardModel = require("../models/dashboardModel");

function buscarDados(req, res) {
    var idClube = req.params.idClube;

    dashboardModel.buscarDados(idClube)
        .then(function(resultado) {
            res.json(resultado);
        }).catch(function(erro) {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function listarTodos(req, res) {
    dashboardModel.listarTodos()
        .then(function(resultado) {
            res.json(resultado);
        }).catch(function(erro) {
            console.log(erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    buscarDados,
    listarTodos
}