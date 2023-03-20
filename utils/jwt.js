const jwt = require("jsonwebtoken");

module.exports = {
  SIGN: (payload) => {
    return jwt.sign(payload, process.env.SECRET, { expiresIn: "3600000" });
  },
  VERIFY: (token) => {
    try {
      if (jwt.verify(token, process.env.SECRET) instanceof Error) return 0;
      else return jwt.verify(token, process.env.SECRET);
    } catch (error) {
      return 0;
    }
  },
};
