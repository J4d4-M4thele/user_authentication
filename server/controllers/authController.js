const User = require('../models/userModel.js');
const { createSecretToken } = require('../utils/secretToken.js');
const bcrypt = require('bcrypt');

module.exports.signUp = async (req, res, next) => {
    try {
        const { email, password,username,createdAt } = req.body;
        if(!email || !password || !username){
          return res.json({message:'All fields are required'})
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.json({ message: "User already exists" });
        }
        const user = await User.create({ email, password,username,createdAt });
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
          withCredentials: true,
          httpOnly: false,
        });
        res.status(201).json({ message: "User signed in successfully", success: true, user });
        next();
      } catch (error) {
        console.error(error);
      }
};