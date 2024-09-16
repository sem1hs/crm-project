const express = require("express");

const { protectRoute } = require("../middleware/protectRoute");
const { checkAuthority } = require("../middleware/checkAuthority");
const {
  getAllNotes,
  getNoteById,
  postNote,
} = require("../controller/notesController");
const router = express.Router();

router.get("/getAllNotes", protectRoute, checkAuthority, getAllNotes);
router.get("/getNoteById", protectRoute, getNoteById);
router.post("/postNote", protectRoute, postNote);

module.exports = router;
