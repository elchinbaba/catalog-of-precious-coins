const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'catalog_of_precious_coins',
    multipleStatements: true
});

connection.connect((err) => {
    if (!err) { 
        console.log("SUCCESS");
    }
    else console.log(err);
});

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.get('/coins', function (req, res) {
    connection.query(`SELECT * FROM coins`, (err, data) => {
        if (err) return res.status(500);
        res.json(data);
    });;
});

app.get('/coins/:id', function (req, res) {
    const id = +req.params.id;
    const sql = `SELECT * FROM coins WHERE id=${id};SELECT * FROM coins_info WHERE coin_id=${id}`;
    connection.query(sql, (err, results, fields) => {
        if (err) return res.status(500);
        // console.log(typeof results[1][0]);
        res.json(results);
    });;
});

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});