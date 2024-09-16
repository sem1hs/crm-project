const { pool } = require("../../config/db");

exports.findNoteById = async (noteId) => {
  try {
    const data = await pool.query({
      name: "findNoteById",
      text: "SELECT * FROM notes where id = $1",
      values: [noteId],
    });
    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
