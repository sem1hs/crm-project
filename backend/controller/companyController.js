const { createCompany } = require("../services/company/createCompany");
const { findAllCompanies } = require("../services/company/findAllCompanies");
const { findCompanyById } = require("../services/company/findCompanyById");

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await findAllCompanies();
    if (!companies || !companies.length) {
      return res
        .status(200)
        .json({ status: "Ok", message: "Şirketler bulunumadı" });
    }
    return res.status(200).json({ status: "Success", data: companies });
  } catch (error) {
    res.status(400).json({ status: "Error", message: error.message });
  }
};

exports.getCompanyById = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res
        .status(400)
        .json({ status: "Error", message: "Id yok, lütfen tekrar deneyin" });
    }

    const company = await findCompanyById(id);
    if (!company || !company.length) {
      return res
        .status(400)
        .json({ status: "Error", message: "Şirket bulunumadı" });
    }
    return res.status(200).json({ status: "Success", data: company });
  } catch (error) {
    res.status(400).json({ status: "Error", message: error.message });
  }
};

exports.postCompany = async (req, res) => {
  try {
    const {
      name,
      adress,
      phone,
      taxNo: tax_no,
      taxOffice: tax_office,
    } = req.body;

    if (!name || !adress || !phone || !tax_no || !tax_office) {
      return res
        .status(400)
        .json({ status: "Error", message: "Gerekli alanları doldurun" });
    }

    const data = await createCompany(name, adress, phone, tax_no, tax_office);

    if (!data || !data.length) {
      return res.status(400).json({
        status: "Error",
        message: "Bir şeyler ters gitti. Tekrar deneyiniz",
      });
    }
    return res.status(201).json({ status: "Success", data: data });
  } catch (error) {
    return res.status(400).json({ status: "Error", message: error.message });
  }
};
