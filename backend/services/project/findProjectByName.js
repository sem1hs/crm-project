const { pool } = require("../../config/db");

exports.findProjectByName = async (projectname) => {
  try {
    const data = await pool.query({
      name: "findProjectByName",
      text: 'SELECT * FROM projects WHERE "name" = $1',
      values: [projectname],
    });

    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
