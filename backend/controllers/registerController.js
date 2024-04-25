// backend/controllers/userController.js
import User from "../model/userModel.js";

// Controller for user registration
const registerUser = async (req, res) => {
  try {
    const { name, password } = req.body;
    // Check if the user already exists
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Create a new user
    const newUser = new User({ name, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export { registerUser };
