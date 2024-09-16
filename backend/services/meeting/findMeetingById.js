const { pool } = require("../../config/db");

exports.findMeetingById = async (meetingId) => {
  try {
    const data = await pool.query({
      name: "findMeetingById",
      text: "SELECT * FROM meeting WHERE id = $1",
      values: [meetingId],
    });

    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
