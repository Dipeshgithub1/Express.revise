const mongoose = require("mongoose");
const express = require("express");
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
  const { username, password, name } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: username });
    if (existingUser) {
      return res.status(400).send("User already exists.");
    }

    // Create new user
    const newUser = new User({
      name: name,
      email: username,
      password: password,
    });

    // Save user to the database
    await newUser.save();
    res.status(201).send("User created successfully.");
  } catch (error) {
    res.status(500).send("Error occurred: " + error.message);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});



 
  