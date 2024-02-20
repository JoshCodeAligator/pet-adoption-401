// db.js
const config = require("./config.json"); // Assuming the config file is in the same directory

import mysql from "mysql2/promise"

const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    ***REMOVED***: config.***REMOVED***,
    database: config.database,
    connectTimeout: config.connectTimeout,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

const query = async (sql, values) => {
    const connection = await pool.getConnection();
    try {
        const [rows, fields] = await connection.query(sql, values);
        return rows;
    } finally {
        connection.release();
    }
};

const beginTransaction = async () => {
    const connection = await pool.getConnection();
    await connection.beginTransaction();
    connection.release();
};

const commit = async () => {
    const connection = await pool.getConnection();
    await connection.commit();
    connection.release();
};

const rollback = async () => {
    const connection = await pool.getConnection();
    await connection.rollback();
    connection.release();
};

export default query;

