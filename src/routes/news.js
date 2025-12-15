import express from "express"
import { NewsController } from "../controllers/newsController.js"
import { authMiddleware } from "../middlewares/auth.js";

const newsRouter = express.Router()
NewsController = new NewsController()

newsRouter.post("/news", authMiddleware , NewsController.create.bind(NewsController));
newsRouter.get("/show-news", NewsController.list.bind(NewsController));
newsRouter.put("/update-news/:id", authMiddleware , NewsController.update.bind(NewsController));
newsRouter.delete("/delete-news/:id", authMiddleware , NewsController.delete.bind(NewsController));