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

function cadastrar(nome, email, genero, senha) {
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, genero, senha)
        VALUES (?, ?, ?, ?)
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [nome, email, genero, senha]);
}

module.exports = {
    autenticar,
    cadastrar
}