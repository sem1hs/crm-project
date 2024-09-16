const { pool } = require("../../config/db");

exports.findProjectById = async (projectId) => {
  try {
    const data = await pool.query({
      name: "findProjectById",
      text: "SELECT * FROM projects WHERE id = $1",
      values: [projectId],
    });

    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
