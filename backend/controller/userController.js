const { createCookieAndSetToken } = require("../utils/createCookieAndSetToken");
const { createUser } = require("../services/user/createUser");
const { findUserByUsername } = require("../services/user/findUserByUsername");
const { hashPassword, comparePassword } = require("../utils/hashPassword");

exports.signup = async (req, res) => {
  try {
    const { username, password, mail, role, companyId } = req.body;
    if (!username || !password || !mail || !role)
      return res
        .status(404)
        .json({ status: "Error", message: "Gerekli alanları doldurun" });

    const newPassword = await hashPassword(password);

    if (!newPassword) {
      return res
        .status(404)
        .json({ status: "Error", message: "Password Hashlanamadı" });
    }

    const data = await createUser(username, newPassword, mail, role, companyId);
    if (data) {
      createCookieAndSetToken(data[0].id, res);
      req.user = data.rows;
      return res.status(201).json({ status: "Success", data: data });
    }
    return res.status(400).json({
      status: "Error",
      message: "Bir şeyler ters gitti. Tekrar deneyiniz",
    });
  } catch (error) {
    if (error.message.includes("unique constraint")) {
      return res
        .status(400)
        .json({ status: "Error", message: "Kullanıcı mevcut" });
    } else {
      return res.status(400).json({ status: "Error", message: error.message });
    }
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(404)
        .json({ status: "Error", message: "Gerekli alanları doldurun" });
    }
    const user = await findUserByUsername(username, res);
    const isCorrect = await comparePassword(password, user[0].password);
    if (isCorrect) {
      createCookieAndSetToken(user[0].id, res);
      req.user = user[0];
      return res.status(200).json({ status: "Success", data: user[0] });
    }
    return res.status(400).json({
      status: "Error",
      message: "Bir şeyler ters gitti. Tekrar deneyiniz",
    });
  } catch (error) {
    return res
      .status(400)
      .json({ status: "Error", message: "Kullanıcı adı veya şifre hatalı " });
  }
};

exports.logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({
      status: "Success",
      message: "Başarıyla çıkış yapıldı",
    });
  } catch (error) {
    res.status(400).json({ status: "Error", message: error.message });
  }
};
