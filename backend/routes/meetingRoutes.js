const express = require("express");
const { protectRoute } = require("../middleware/protectRoute");
const { checkAuthority } = require("../middleware/checkAuthority");
const {
  getAllMeetings,
  getMeetingById,
  postMeeting,
  getMeetingDetails,
} = require("../controller/meetingController");
const router = express.Router();

router.get("/getAllMeetings", getAllMeetings);
router.get("/getMeetingById", protectRoute, getMeetingById);
router.post("/postMeeting", postMeeting);
router.get("/getMeetingDetails", getMeetingDetails);

module.exports = router;
