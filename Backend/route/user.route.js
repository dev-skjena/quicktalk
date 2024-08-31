import express from "express";
import {
    deleteAllUsers,
  getUserProfile,
  login,
  logout,
  signup,
} from "../contoller/user.controller.js";
import secureRoute from "../middleware/secureRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getUserProfile", secureRoute,getUserProfile);
router.delete("/deleteAllUsers", deleteAllUsers);


export default router;
