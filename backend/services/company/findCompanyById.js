const { pool } = require("../../config/db");

exports.findCompanyById = async (companyId) => {
  try {
    const data = await pool.query({
      name: "findCompanyById",
      text: "SELECT * FROM company where id = $1",
      values: [companyId],
    });
    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
