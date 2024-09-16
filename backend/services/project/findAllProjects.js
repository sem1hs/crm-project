const { pool } = require("../../config/db");

exports.findAllProjects = async () => {
  try {
    const data = await pool.query({
      name: "findAllProjects",
      text: "SELECT * FROM projects",
    });

    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
