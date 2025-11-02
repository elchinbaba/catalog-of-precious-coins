const { sqlCommemorative, sqlBullion, sqlExclusive } = require("./sqls/sqls");

// Function to parse an INSERT INTO string into array of coin objects
function parseInsertSQL(sql) {
    const valuesMatch = sql.match(/VALUES\s*\(([\s\S]*)\);?$/i);
    if (!valuesMatch) return [];

    const valuesStr = valuesMatch[1];

    const rows = valuesStr.split(/\),\s*\(/).map(row => {
        row = row.replace(/^\(|\)$/g, '').trim();

        const cols = [];
        let current = '';
        let inQuotes = false;
        for (let i = 0; i < row.length; i++) {
            const char = row[i];
            if (char === "'" && row[i - 1] !== "\\") {
                inQuotes = !inQuotes;
                current += char;
            } else if (char === ',' && !inQuotes) {
                cols.push(current.trim().replace(/^'|'$/g, '').replace(/\\'/g, "'"));
                current = '';
            } else {
                current += char;
            }
        }
        if (current) cols.push(current.trim().replace(/^'|'$/g, '').replace(/\\'/g, "'"));
        return cols;
    });

    const keys = ['type','name','description','information','issuing_country','composition',
                  'quality','denomination','year','weight','price','first','second'];

    return rows.map(row => {
        const obj = {};
        keys.forEach((key, idx) => {
            obj[key] = row[idx];
        });
        return obj;
    });
}

// Function to insert multiple SQL strings
module.exports = (conn) => {
    const allSQLs = [sqlCommemorative, sqlBullion, sqlExclusive];

    allSQLs.forEach(sqlString => {
        const coins = parseInsertSQL(sqlString);
        coins.forEach(coin => {
            conn.query(
                `INSERT INTO coins 
                (type, name, description, information, issuing_country, composition,
                 quality, denomination, year, weight, price, first, second) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                Object.values(coin),
                (err) => {
                    if (err) console.error("Error inserting coin:", coin.name, err.message);
                    else console.log("Inserted coin:", coin.name);
                }
            );
        });
    });
};
