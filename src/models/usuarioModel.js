var database = require("../database/config");

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT *
        FROM usuario
        WHERE email = ?
        AND senha = ?
    `;
    return database.executar(instrucaoSql, [email, senha]);
}

function cadastrar(nome, email, genero, jogador, posicao, clube, senha) {
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, genero, jogador, posicao, clube, senha)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [nome, email, genero, jogador, posicao, clube, senha]);
}

function buscarPorEmail(email) {
    var instrucaoSql = `
        SELECT nome, email, genero, jogador, posicao, clube
        FROM usuario
        WHERE email = ?
    `;
    return database.executar(instrucaoSql, [email]);
}

module.exports = {
    autenticar,
    cadastrar,
    buscarPorEmail
}