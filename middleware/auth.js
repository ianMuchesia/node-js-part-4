const { UnauthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");

const authenticationMiddleWare = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer")) {
    throw new UnauthenticatedError("No token Provided ");
  }

  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Not authorized to accesss this route");
  }
};

module.exports = authenticationMiddleWare;
