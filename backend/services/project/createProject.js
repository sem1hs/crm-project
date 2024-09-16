const { pool } = require("../../config/db");

exports.createProject = async (name, user_id, startDate, endDate) => {
  try {
    const data = await pool.query({
      name: "createProject",
      text: 'insert into projects ("name","user_id","startDate","endDate") values ($1,$2,$3,$4) RETURNING *',
      values: [name, user_id, startDate, endDate],
    });
    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
