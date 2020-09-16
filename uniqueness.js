require("./connection");

const User = require("./models/User");

async function createUsers() {
  const userOne = new User({
    username: "julio",
    password: "jakr",
  });
  await userOne.save();
  const userTwo = new User({
    username: "kelly",
    password: "21092010",
  });
  await userTwo.save();
}
createUsers();
