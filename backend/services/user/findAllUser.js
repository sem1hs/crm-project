const { pool } = require("../../config/db");

exports.findAllUser = async () => {
  try {
    const data = await pool.query({
      name: "findAllUser",
      text: "SELECT * FROM users",
    });

    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
