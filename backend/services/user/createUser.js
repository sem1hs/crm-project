const { pool } = require("../../config/db");

exports.createUser = async (username, newPassword, mail, role, companyId) => {
  try {
    const data = await pool.query({
      name: "insertUser",
      text: 'insert into users ("username","password","mail","role","company_id") values ($1,$2,$3,$4,$5) RETURNING *',
      values: [username, newPassword, mail, role, companyId],
    });
    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
