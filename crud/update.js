require("../connection");

const User = require("../models/User");

const otherFunction = async () => {
  const user = await User.findOneAndUpdate(
    { username: "julio" },
    {
      name: "Rafael Moreno",
    },
    { new: true }
  );
  console.log(user);
};

const updateOne = async () => {
  const user = await User.findOne({ username: "julio" });
  console.log(user);
  user.password = "minuevaclave";
  user.save();
};

async function updateUsers() {
  const user = await User.update(
    { username: "julio" },
    {
      password: "contraseñasegura",
    }
  );
  console.log(user);
}

otherFunction();
