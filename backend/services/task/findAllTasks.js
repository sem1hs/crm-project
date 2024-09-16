const { pool } = require("../../config/db");

exports.findAllTasks = async () => {
  try {
    const data = await pool.query({
      name: "findAllTasks",
      text: "SELECT * FROM tasks",
    });

    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
