const { findAllProjects } = require("../services/project/findAllProjects");
const { findProjectById } = require("../services/project/findProjectById");
const { createProject } = require("../services/project/createProject");
const { findUserByUsername } = require("../services/user/findUserByUsername");
const { findProjectByName } = require("../services/project/findProjectByName");

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await findAllProjects();
    if (!projects || !projects.length) {
      return res
        .status(200)
        .json({ status: "Ok", message: "Projeler bulunumadı" });
    }
    return res.status(200).json({ status: "Success", data: projects });
  } catch (error) {
    res.status(400).json({ status: "Error", message: error.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res
        .status(400)
        .json({ status: "Error", message: "Id yok, lütfen tekrar deneyin" });
    }

    const project = await findProjectById(id);

    if (!project || !project.length) {
      return res
        .status(200)
        .json({ status: "Ok", message: "Proje bulunumadı" });
    }

    return res.status(200).json({ status: "Success", data: project });
  } catch (error) {
    res.status(400).json({ status: "Error", message: error.message });
  }
};

exports.postProject = async (req, res) => {
  try {
    const { name, userId, startDate, endDate } = req.body;

    if (!name || !userId || !startDate || !endDate) {
      return res
        .status(400)
        .json({ status: "Error", message: "Gerekli alanları doldurun" });
    }

    const data = await createProject(name, userId, startDate, endDate);

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

exports.getProjectByName = async (req, res) => {
  try {
    const { projectname } = req.query;

    if (!projectname) {
      return res.status(400).json({
        status: "Error",
        message: "Projectname yok, lütfen tekrar deneyin",
      });
    }

    const project = await findProjectByName(projectname);
    if (!project || !project.length) {
      return res
        .status(400)
        .json({ status: "Error", message: "Proje bulunumadı" });
    }
    return res.status(200).json({ status: "Success", data: project });
  } catch (error) {
    res.status(400).json({ status: "Error", message: error.message });
  }
};
