var database = require("../database/config");

function listarDesempenho() {
    var instrucaoSql = `
        SELECT c.nome, d.partidas, d.gols, d.assistencias
        FROM desempenho d
        JOIN clube c ON d.fk_time = c.idTime
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, []);
}

module.exports = {
    listarDesempenho
}