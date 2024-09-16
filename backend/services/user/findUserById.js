const { pool } = require("../../config/db");

exports.findUserById = async (userId) => {
  try {
    const data = await pool.query({
      name: "findUserById",
      text: 'SELECT * FROM users WHERE "id" = $1',
      values: [userId],
    });

    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
