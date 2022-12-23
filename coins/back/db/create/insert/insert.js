const { sqlCommemorative, sqlBullion, sqlExclusive } = require("./sqls/sqls");

module.exports = (conn) => {
    conn.query(sqlCommemorative + sqlBullion + sqlExclusive, (err, results, fields) => {
        if (err) {
            console.log(err);
        }
    });
}