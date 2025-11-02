const insertValues = require("./insert/insert");

module.exports = (conn) => {
    // Check if the table exists
    conn.query("SHOW TABLES LIKE 'coins'", (err, results) => {
        if (err) {
            console.error("Error checking coins table:", err);
            return;
        }

        if (!results || results.length === 0) {
            // Table does not exist, create it
            const sql = `
                CREATE TABLE coins(
                    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
                    type VARCHAR(50) NOT NULL,
                    name VARCHAR(200) NOT NULL,
                    description TEXT NOT NULL,
                    information TEXT NOT NULL,
                    issuing_country VARCHAR(200) NOT NULL,
                    composition VARCHAR(50) NOT NULL,
                    quality VARCHAR(50) NOT NULL,
                    denomination VARCHAR(100) NOT NULL,
                    year INT NOT NULL,
                    weight VARCHAR(50) NOT NULL,
                    price VARCHAR(50) NOT NULL,
                    first TEXT NOT NULL,
                    second TEXT NOT NULL
                );
            `;
            conn.query(sql, (err) => {
                if (err) {
                    console.error("Error creating coins table:", err);
                } else {
                    console.log("Coins table created successfully!");
                    insertValues(conn); // insert initial data
                }
            });
        } else {
            console.log("Coins table already exists!");

            // Check if table is empty
            conn.query("SELECT COUNT(*) AS count FROM coins", (err, result) => {
                if (err) {
                    console.error("Error checking coins table count:", err);
                    return;
                }

                const count = result[0].count;
                if (count !== 30) {
                    console.log("Coins table not full. Inserting initial data...");
                    conn.query('TRUNCATE TABLE coins;', (err, result) => {
                        if (err) {
                            console.error('Error truncating table:', err.message);
                        } else {
                            console.log('Table truncated successfully');
                            insertValues(conn); // insert initial data
                        }
                    });
                    insertValues(conn); // insert initial data
                } else {
                    console.log(`Coins table already has ${count} records. No insertion needed.`);
                }
            });
        }
    });
};
