exports.checkAuthority = async (req, res, next) => {
  try {
    const user = req.user[0];
    if (user.role !== "employee") {
      return res
        .status(401)
        .json({ status: "Error", message: "Yetkiniz yok !" });
    }
    next();
  } catch (error) {
    return res.json({ status: "Error", message: error.message });
  }
};
