const express = require("express");
const {
  getAllProjects,
  getProjectById,
  postProject,
  getProjectByName,
} = require("../controller/projectController");
const { protectRoute } = require("../middleware/protectRoute");
const { checkAuthority } = require("../middleware/checkAuthority");
const router = express.Router();

router.get("/getAllProjects", getAllProjects);
router.get("/getProjectById", protectRoute, checkAuthority, getProjectById);
router.post("/postProject", postProject);
router.get("/getProjectByName", getProjectByName);

module.exports = router;
