const { pool } = require("../../config/db");

exports.findMeetingDetails = async (meetingId) => {
  try {
    const data = await pool.query({
      name: "findMeetingDetails",
      text: 'select u2.username as employeeName from "meetingDetails" m inner join users u2 on u2.id = m.employee_id where m.meeting_id = $1',
      values: [meetingId],
    });

    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
