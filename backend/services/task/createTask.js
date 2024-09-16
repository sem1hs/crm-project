const { pool } = require("../../config/db");

exports.createTask = async (
  title,
  content,
  startDate,
  endDate,
  user_id,
  project_id,
) => {
  try {
    const data = await pool.query({
      name: "createTask",
      text: 'insert into tasks ("title","content","startDate","endDate","user_id","project_id") values ($1,$2,$3,$4,$5,$6) RETURNING *',
      values: [title, content, startDate, endDate, user_id, project_id],
    });
    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
