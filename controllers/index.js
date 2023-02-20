const {BadRequest} = require("../errors");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  //check username and password
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequest("please provide username and password");
  }

  //just for demo , usually provided by the database
  const id = new Date().getDate();

  //just for demo in production use long and complex string
  //try to keep payload, as it is a better experience for the user
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  console.log(req.user)
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
   msg: `Hello ${req.user.username}`,
    secret: `here is your lucky number ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
