const express = require("express");
const {
  getAllTasks,
  getTaskById,
  postTask,
} = require("../controller/taskController");
const router = express.Router();

router.get("/getAllTasks", getAllTasks);
router.get("/getTaskById", getTaskById);
router.post("/postTask", postTask);
module.exports = router;
