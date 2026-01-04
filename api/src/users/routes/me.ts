import express from "express";
import { authMiddleware } from "../../middlewares/auth.js";

const meRouter = express.Router();

meRouter.get("/me", authMiddleware, (req, res) => {
  res.status(200).json({ user: req.user });
});

export { meRouter };
