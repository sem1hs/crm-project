const { pool } = require("../../config/db");

exports.findAllMeetings = async () => {
  try {
    const data = await pool.query({
      name: "findAllMeetings",
      text: "SELECT * FROM meeting",
    });

    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
