const { pool } = require("../../config/db");

exports.findAllMeetings = async () => {
  try {
    const data = await pool.query({
      name: "findAllMeetings",
      text:
        "select m.*,u.username as customerName,p.name as projectName from meeting m \n" +
        "inner join users u on u.id = m.user_id\n" +
        "inner join projects p on p.id = m.project_id",
    });

    return data.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
