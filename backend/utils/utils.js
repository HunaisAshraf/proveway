const jwt = require("jsonwebtoken");

const createAccessToken = (user) => {
  return jwt.sign(
    { _id: user._id, email: user.email, name: user.name },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );
};

const createRefreshToken = (user) => {
  return jwt.sign(
    { _id: user._id, email: user.email, name: user.name },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );
};

module.exports = { createAccessToken, createRefreshToken };
