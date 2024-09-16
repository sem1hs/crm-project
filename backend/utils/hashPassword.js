const bcrypt = require("bcrypt");

exports.hashPassword = async (password) => {
  try {
    if (!password) throw new Error("Hashlanıcak password yok");
    const saltRound = 12;
    const salt = await bcrypt.genSalt(saltRound);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.comparePassword = async (password, hashedPassword) => {
  try {
    if (!password) throw new Error("Compare password yok");
    const isCorrect = await bcrypt.compare(password, hashedPassword);
    return isCorrect;
  } catch (error) {
    throw new Error(error.message);
  }
};
