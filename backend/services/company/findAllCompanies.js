const { pool } = require("../../config/db");

exports.findAllCompanies = async () => {
  try {
    const data = await pool.query({
      name: "findAllCompanies",
      text: "SELECT * FROM company",
    });
    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
