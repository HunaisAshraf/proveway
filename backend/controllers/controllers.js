const UserModel = require("../models/userModel");
const bcryptjs = require("bcryptjs");

const signupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await UserModel.find(email);

    if (user) {
      return res
        .status(409)
        .json({ success: false, message: "user already exist" });
    }

    const hashedPassword = bcryptjs.hash(password, 10);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return res
      .status(200)
      .json({ success: true, message: "signup successfull" });
  } catch (error) {
    console.log(error);
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne(email);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }

    const passwordMatch = bcryptjs.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(402)
        .json({ success: false, message: "invalid password" });
    }

    user.password = undefined;
    return res.status(200).json({ success: true, message: "Login succesfull" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signupController, loginController };
