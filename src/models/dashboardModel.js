var database = require("../database/config");

function buscarDados(idClube) {
    var instrucaoSql = `
        SELECT 
            c.nome AS clube,
            d.overall,
            d.posicao,
            d.velocidade,
            d.finalizacao,
            d.passe,
            d.drible,
            d.defesa,
            d.fisico,
            d.altura,
            d.peso,
            d.ano
        FROM dashboard d
        JOIN clube c
            ON d.fk_clube = c.idTime
        WHERE c.idTime = ${idClube};
    `;
    return database.executar(instrucaoSql);
}

function listarTodos() {
    var instrucaoSql = `
        SELECT 
            c.nome AS clube,
            d.overall,
            d.posicao,
            d.velocidade,
            d.finalizacao,
            d.passe,
            d.drible,
            d.defesa,
            d.fisico,
            d.altura,
            d.peso,
            d.ano,
            c.idTime
        FROM dashboard d
        JOIN clube c ON d.fk_clube = c.idTime
        ORDER BY c.idTime;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarDados,
    listarTodos
}