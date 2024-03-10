import jwt from "jsonwebtoken";

const generateToken = (userID, res) => {
  const token = jwt.sign({ userID }, process.env.SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // prevent XSS attacks cross site scripting
    sameSite: "strict", // prevents CSRF attacks cross site requests forgery
    secure: process.env.NODE_ENV !== "development"
  });
};

export default generateToken;
