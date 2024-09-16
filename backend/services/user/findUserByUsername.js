const { pool } = require("../../config/db");

exports.findUserByUsername = async (username) => {
  try {
    const data = await pool.query({
      name: "findUserByName",
      text: 'SELECT * FROM users WHERE "username" = $1',
      values: [username],
    });

    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
