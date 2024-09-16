const { pool } = require("../../config/db");

exports.findTaskById = async (taskId) => {
  try {
    const data = await pool.query({
      name: "findTaskById",
      text: "SELECT * FROM tasks WHERE id = $1",
      values: [taskId],
    });

    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
