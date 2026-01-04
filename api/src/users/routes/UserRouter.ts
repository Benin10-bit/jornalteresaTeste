import express from "express";
import UserController from "../controllers/UserController.js";

export const userRouter = express.Router();

userRouter.post("/user/register", UserController.register);

userRouter.post("/user/login", UserController.login);
