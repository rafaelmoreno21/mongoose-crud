require("./connection");

const Product = require("./models/Product");

const laptop = new Product({
  name: "laptop",
  description: "lenovo thinkpad x1 carbon 6th generation",
  price: 1300.99,
});

laptop.save((err, document) => {
  if (err) console.log(err);
  console.log(document);
});

console.log(laptop);
