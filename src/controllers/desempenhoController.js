var desempenhoModel = require("../models/desempenhoModel");

async function listarDesempenho(req, res) {
    try {
        const dados = await desempenhoModel.listarDesempenho();
        res.json(dados);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao buscar desempenho" });
    }
}

module.exports = {
    listarDesempenho
}