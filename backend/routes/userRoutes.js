const express = require("express");
const {
  login,
  signup,
  logout,
  getUserByUsername,
  getAllUser,
} = require("../controller/userController");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/getUserByUsername", getUserByUsername);
router.get("/getAllUser", getAllUser);

module.exports = router;
