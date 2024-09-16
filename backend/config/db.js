const pg = require("pg");

const dbConfig = {
  user: "postgres",
  host: "localhost",
  database: "crm",
  password: "1234",
  port: 5432,
};

const pool = new pg.Pool(dbConfig);

const connectDb = async () => {
  try {
    await pool.connect();
    console.log("Connected db");
  } catch (error) {
    console.log("Error in db connect");
  }
};

module.exports = { pool, connectDb };
