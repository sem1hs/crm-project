const { pool } = require("../../config/db");

exports.createMeeting = async (
  meetingDate,
  name,
  startTime,
  endTime,
  user_id,
  project_id,
) => {
  try {
    const data = await pool.query({
      name: "createProject",
      text: 'insert into meeting ("meetingDate","name","startTime","endTime","user_id","project_id") values ($1,$2,$3,$4,$5,$6) RETURNING *',
      values: [meetingDate, name, startTime, endTime, user_id, project_id],
    });

    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
