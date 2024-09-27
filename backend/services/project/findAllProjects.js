const { pool } = require("../../config/db");

exports.findAllProjects = async () => {
  try {
    const data = await pool.query({
      name: "findAllProjects",
      text: "SELECT p.*,u.username FROM projects p INNER JOIN users u ON u.id = p.user_id;",
    });

    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
