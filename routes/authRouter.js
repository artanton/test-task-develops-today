import express from "express";
import authController from "../controllers/authControllers.js";
import { avatarSchema, emailSchema, signInSchema, signUpSchema, updateSchema } from "../schemas/userSchemas.js";
import validateBody from "../decorators/validateBody.js";
import authentificate from "../middlewares/authentificate.js";
import upload from "../middlewares/upload.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  
  validateBody(signUpSchema),
  authController.signUp
);

authRouter.post(
  "/login",
  
  validateBody(signInSchema),
  authController.signIn
);

authRouter.get (
  "/verify/:verificationCode", authController.verify
);

authRouter.post (
  "/verify", 
  validateBody(emailSchema),
  authController.resendVerify

);

authRouter.patch(
  "/avatar",
  validateBody(avatarSchema),
  upload.single("avatarURL"),
  authentificate,

  authController.updateAvatar
);

authRouter.patch(
  "/update",
  validateBody(updateSchema),
  authentificate,

  authController.updatePassword
);

authRouter.patch(
  "/refresh",
authentificate, 
authController.refreshToken);

authRouter.get("/current", authentificate, authController.getCurrent);
authRouter.post("/logout", authentificate, authController.logout);

export default authRouter;
