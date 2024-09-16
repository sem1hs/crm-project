const { createNote } = require("../services/notes/createNote");
const { findAllNotes } = require("../services/notes/findAllNotes");
const { findNoteById } = require("../services/notes/findNoteById");

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await findAllNotes();
    if (!notes || !notes.length) {
      return res
        .status(200)
        .json({ status: "Ok", message: "Notlar bulunamadı" });
    }
    return res.status(200).json({ status: "Success", data: notes });
  } catch (error) {
    res.status(400).json({ status: "Error", message: error.message });
  }
};

exports.getNoteById = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res
        .status(400)
        .json({ status: "Error", message: "Id yok, lütfen tekrar deneyin" });
    }
    const note = await findNoteById(id);
    if (!note || !note.length) {
      return res.status(200).json({ status: "Ok", message: "Not bulunumadı" });
    }
    return res.status(200).json({ status: "Success", data: note });
  } catch (error) {
    res.status(400).json({ status: "Error", message: error.message });
  }
};

exports.postNote = async (req, res) => {
  try {
    const { title, content, userId, projectId, meetingId } = req.body;

    if (!title || !content || !userId || !projectId || !meetingId) {
      return res
        .status(400)
        .json({ status: "Error", message: "Gerekli alanları doldurun" });
    }

    const data = await createNote(title, content, userId, projectId, meetingId);

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
