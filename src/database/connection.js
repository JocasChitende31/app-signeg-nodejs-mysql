//call var for envoriment
require('dotenv').config();
// incluir a dependência mysql
const mysql = require('mysql2/promise');
// criar a connexão mysql
const connection = mysql.createPool({
    connectionLimit: process.env.MYSQL_CONNECTION_LIMIT,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user:   process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})
console.log("conexão => criada ");
connection.on('release', () => {
    console.log('conexão ==> retornada');
})
process.on('SIGINT', () => {
    connection.end(err => {
        if (err) return console.log('erro ==> ', err);
        console.log('conexão ==> fechada');
        process.exit(0);
    })
})
module.exports = connection;
