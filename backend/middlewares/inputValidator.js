const validator = require("validator");

const signupValitor = (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      throw new Error("name is required");
    }

    if (!email || !validator.isEmail(email)) {
      throw new Error("invalid email");
    }

    if (password.length < 6) {
      throw new Error("passowrd must be atleast 6 character");
    }

    next();
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

const loginValidator = (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !validator.isEmail(email)) {
      throw new Error("invalid email");
    }

    if (!password) {
      throw new Error("invalid password");
    }

    next();
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { signupValitor, loginValidator };
