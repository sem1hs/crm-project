const { findAllMeetings } = require("../services/meeting/findAllMeetings");
const { findMeetingById } = require("../services/meeting/findMeetingById");
const { createMeeting } = require("../services/meeting/createMeeting");

exports.getAllMeetings = async (req, res) => {
  try {
    const meetings = await findAllMeetings();
    if (!meetings || !meetings.length) {
      return res
        .status(200)
        .json({ status: "Ok", message: "Toplantılar bulunumadı" });
    }
    return res.status(200).json({ status: "Success", data: meetings });
  } catch (error) {
    res.status(400).json({ status: "Error", message: error.message });
  }
};

exports.getMeetingById = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res
        .status(400)
        .json({ status: "Error", message: "Id yok, lütfen tekrar deneyin" });
    }
    const meeting = await findMeetingById(id);
    if (!meeting || !meeting.length) {
      return res
        .status(200)
        .json({ status: "Ok", message: "Toplantı bulunumadı" });
    }
    return res.status(200).json({ status: "Success", data: meeting });
  } catch (error) {
    res.status(400).json({ status: "Error", message: error.message });
  }
};

exports.postMeeting = async (req, res) => {
  try {
    const { meetingDate, startTime, endTime, userId, employeeId, projectId } =
      req.body;

    if (
      !meetingDate ||
      !startTime ||
      !endTime ||
      !userId ||
      !employeeId ||
      !projectId
    ) {
      return res
        .status(400)
        .json({ status: "Error", message: "Gerekli alanları doldurun" });
    }

    const data = await createMeeting(
      meetingDate,
      startTime,
      endTime,
      userId,
      employeeId,
      projectId,
    );

    if (!data || !data.length) {
      return res.status(400).json({
        status: "Error",
        message: "Bir şeyler ters gitti. Tekrar deneyiniz",
      });
    }
    return res.status(201).json({ status: "Success", data });
  } catch (error) {
    return res.status(400).json({ status: "Error", message: error.message });
  }
};
