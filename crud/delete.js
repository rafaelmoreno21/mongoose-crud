require("../connection");

const User = require("../models/User");

const deleteUser = async () => {
  const user = await User.findByIdAndDelete("5f6158a36df0281f88b49913");
  console.log(user);
};

deleteUser();
