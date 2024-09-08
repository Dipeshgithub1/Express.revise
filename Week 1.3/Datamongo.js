
const express = require("express")
const mongoose = require("mongoose");

const app = express();

app.use(express.json()); // To parse JSON data in request body

// Connect to MongoDB without deprecated options
mongoose.connect("mongodb://localhost:27017/admin");

// Define user schema and model
const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;


  const existingUser = await User.findOne({ email: username });
  //CRUD
    if (existingUser) {
      return res.status(400).send("User already exists.");
    }

  const user = new User({
    name: name,
    email: username,
    password: password,

  });

  user.save();
  res.json({
    msg:"User created successfully"
  });
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});



 
  