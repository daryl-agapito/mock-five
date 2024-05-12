import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

//SIGN UP
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(
      errorHandler(
        404,
        "Oops! Username or email is already taken. Please try again or contact support."
      )
    );
  }
};

//SIGN IN
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser)
      return next(
        errorHandler(
          404,
          "Oops! User not found. Please try again or contact support."
        )
      );

    const checkPassword = bcryptjs.compareSync(password, checkUser.password);

    if (!checkPassword)
      return next(
        errorHandler(
          401,
          "Oops! Invalid credentials. Please try again or contact support."
        )
      );

    //token
    const token = jwt.sign({ id: checkUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...userInfo } = checkUser._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(userInfo);
  } catch (error) {
    next(error);
  }
};

//GOOGLE SIGN IN
export const google = async (req, res, next) => {
  try {
    //Already a user
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...userInfo } = user._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(userInfo);
    } else {
      //Create new user
      const generatedPassword = Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);

      const newUser = new User({
        username: req.body.name.split(" ").join("").toLowerCase(),
        email: req.body.email,
        password: hashedPassword,
        profilePhoto: req.body.photo,
      });

      await newUser.save();
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...userInfo } = user._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(userInfo);
    }
  } catch (error) {
    next(error);
  }
};
