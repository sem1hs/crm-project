const { decodeToken } = require("../utils/decodeToken");
const { findUserById } = require("../services/user/findUserById");

exports.protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token)
      return res
        .status(401)
        .json({ status: "Error", message: "Token bulunamadı" });

    const decodedToken = decodeToken(token);

    if (!decodedToken)
      return res
        .status(401)
        .json({ status: "Error", message: "Lütfen giriş yapın" });

    const user = await findUserById(decodedToken.userId, res);

    if (!user)
      return res
        .status(401)
        .json({ message: "Error", message: "Kullanıcı bulunamadı" });

    req.user = user;
    next();
  } catch (error) {
    return res.json({ status: "Error", message: error.message });
  }
};
