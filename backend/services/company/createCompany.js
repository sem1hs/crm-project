const { pool } = require("../../config/db");

exports.createCompany = async (name, adress, phone, tax_no, tax_office) => {
  try {
    const data = await pool.query({
      name: "inserCompany",
      text: 'insert into company ("name","adress","phone","tax_no","tax_office") values ($1,$2,$3,$4,$5) RETURNING *',
      values: [name, adress, phone, tax_no, tax_office],
    });
    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
