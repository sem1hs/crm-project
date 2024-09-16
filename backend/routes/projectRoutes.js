const express = require("express");
const {
  getAllProjects,
  getProjectById,
  postProject,
} = require("../controller/projectController");
const { protectRoute } = require("../middleware/protectRoute");
const { checkAuthority } = require("../middleware/checkAuthority");
const router = express.Router();

router.get("/getAllProjects", protectRoute, checkAuthority, getAllProjects);
router.get("/getProjectById", protectRoute, checkAuthority, getProjectById);
router.post("/postProject", protectRoute, checkAuthority, postProject);

module.exports = router;
