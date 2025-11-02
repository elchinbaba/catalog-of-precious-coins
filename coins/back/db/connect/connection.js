const mysql = require('mysql');
const fs = require('fs');

module.exports = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    ssl: {
        // Aiven requires SSL
        rejectUnauthorized: true
    },
    multipleStatements: true
});
