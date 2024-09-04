import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

export const SignUp = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return next(errorHandler(400, "Email Already Exists"));

    const user = await User.create({ name, email, password, role });
    const token = generateToken(user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const Login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id);
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token,
      });
    } else {
      next(errorHandler(400, "Invalid Email or Password"));
    }
  } catch (error) {
    next(error);
  }
};
