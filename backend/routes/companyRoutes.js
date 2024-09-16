const express = require("express");
const {
  getAllCompanies,
  getCompanyById,
  postCompany,
} = require("../controller/companyController");
const { protectRoute } = require("../middleware/protectRoute");
const { checkAuthority } = require("../middleware/checkAuthority");
const router = express.Router();

router.get("/getAllCompanies", getAllCompanies);
router.get("/getCompanyById", protectRoute, checkAuthority, getCompanyById);
router.post("/postCompany", protectRoute, checkAuthority, postCompany);

module.exports = router;
