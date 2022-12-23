module.exports = (conn) => {
    const sql = "CREATE DATABASE IF NOT EXISTS catalog_of_precious_coins; USE catalog_of_precious_coins;";
    conn.query(sql, (err, results, fields) => {
        if (err) {
            console.log(err);
        }
    });
}