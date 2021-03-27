import express from "express";
const router = express.Router();

import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  admin,
  protect,
  validateUser,
} from "../controllers/authController.js";

router.route("/").post(registerUser).get(getUsers);
router.post("/login", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);
router.post("/validate", validateUser);
router.post('/admin', admin);
router.post('/protect', protect);
export default router;
