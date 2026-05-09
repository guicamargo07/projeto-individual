var mysql = require("mysql2");

var pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

function executar(instrucao, valores) {
    const ambientes = ["producao", "desenvolvimento"];
    if (!ambientes.includes(process.env.AMBIENTE_PROCESSO)) {
        return Promise.reject("AMBIENTE NÃO CONFIGURADO EM .env");
    }

    return new Promise(function (resolve, reject) {
        pool.query(instrucao, valores, function (erro, resultados) {
            if (erro) { return reject(erro); }
            resolve(resultados);
        });
    });
}

module.exports = { executar };