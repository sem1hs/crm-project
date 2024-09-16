const { pool } = require("../../config/db");

exports.findUserById = async () => {
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
