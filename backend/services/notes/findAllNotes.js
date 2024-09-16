const { pool } = require("../../config/db");

exports.findAllNotes = async () => {
  try {
    const data = await pool.query({
      name: "findAllNotes",
      text: "SELECT * FROM notes",
    });
    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
