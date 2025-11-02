const insertValues = require("./insert/insert");

module.exports = (conn) => {
    // Simply check if the table exists in the connected database
    conn.query("SHOW TABLES LIKE 'coins'", (err, results) => {
        if (err) {
            console.error("Error checking coins table:", err);
            return;
        }

        // If table doesn't exist, create it
        if (!results || results.length === 0) {
            const sql = `
            CREATE TABLE IF NOT EXISTS coins(
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
        }
    });
};
