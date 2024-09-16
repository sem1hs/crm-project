const express = require("express");
const { protectRoute } = require("../middleware/protectRoute");
const { checkAuthority } = require("../middleware/checkAuthority");
const {
  getAllMeetings,
  getMeetingById,
  postMeeting,
} = require("../controller/meetingController");
const router = express.Router();

router.get("/getAllMeetings", protectRoute, checkAuthority, getAllMeetings);
router.get("/getMeetingById", protectRoute, getMeetingById);
router.post("/postMeeting", protectRoute, checkAuthority, postMeeting);

module.exports = router;
