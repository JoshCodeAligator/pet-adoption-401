// db.js
const config = require("./config.json"); // Assuming the config file is in the same directory

const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: config.host_config,
  user: config.user_config,
  ***REMOVED***: config.***REMOVED***_config,
  database: config.database_config,
  connectTimeout: config.connectTimeout_config,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const query = async (sql, values) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(sql, values);
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

module.exports = {
  query,
  beginTransaction,
  commit,
  rollback,
};
