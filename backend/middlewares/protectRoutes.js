import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoutes = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      res.status(401).json({ error: "Unauthorized - No Token Provided" });
    }
    const decoded = jwt.verify(token, process.env.SECRET);
    if (!decoded) {
      res.status(403).json({ error: "Unauthorized - Invalid Token" });
    }
    const user = await User.findById(decoded.userID).select("-password");
    if (!user) {
      res.status(404).json({ error: "User not found." });
    }
 
    req.user = user;
    next();
  } catch (error) {
    console.log(`Error in the protectRoutes middleware:`, error.message);
    res.status(500).json({ error: `Internal Server Error` });
  } 
};

export default protectRoutes;
