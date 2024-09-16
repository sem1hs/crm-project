const { pool } = require("../../config/db");

exports.createNote = async (
  title,
  content,
  user_id,
  project_id,
  meeting_id,
) => {
  try {
    const data = await pool.query({
      name: "createNote",
      text: 'insert into notes ("title","content","user_id","project_id","meeting_id") values ($1,$2,$3,$4,$5) RETURNING *',
      values: [title, content, user_id, project_id, meeting_id],
    });
    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
