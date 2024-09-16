const { findAllTasks } = require("../services/task/findAllTasks");
const { findTaskById } = require("../services/task/findTaskById");
const { createTask } = require("../services/task/createTask");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await findAllTasks();

    if (!tasks || !tasks.length) {
      return res
        .status(200)
        .json({ status: "Ok", message: "Görevler bulunumadı" });
    }
    return res.status(200).json({ status: "Success", data: tasks });
  } catch (error) {
    res.status(400).json({ status: "Error", message: error.message });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res
        .status(400)
        .json({ status: "Error", message: "Id yok, lütfen tekrar deneyin" });
    }

    const task = await findTaskById(id);

    if (!task || !task.length) {
      return res
        .status(200)
        .json({ status: "Ok", message: "Görev bulunumadı" });
    }

    return res.status(200).json({ status: "Success", data: task });
  } catch (error) {
    res.status(400).json({ status: "Error", message: error.message });
  }
};

exports.postTask = async (req, res) => {
  try {
    const { title, content, startDate, endDate, userId, projectId } = req.body;

    if (!title || !content || !startDate || !endDate || !userId || !projectId) {
      return res
        .status(400)
        .json({ status: "Error", message: "Gerekli alanları doldurun" });
    }

    const data = await createTask(
      title,
      content,
      startDate,
      endDate,
      userId,
      projectId,
    );

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
