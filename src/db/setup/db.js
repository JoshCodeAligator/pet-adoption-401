// db.js

import mysql from "mysql2/promise"

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectTimeout: 10000,
    waitForConnections: true,
    connectionLimit: 100,
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

export {commit, rollback, beginTransaction}

