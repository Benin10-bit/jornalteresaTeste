import express from "express";
import { upload } from "../../middlewares/upload.js";
import NewsController from "../controllers/NewsController.js";

const newsRouter = express.Router();

newsRouter.get("/news/show-news", NewsController.showNews);

newsRouter.get("/news/show-news/:id", NewsController.showNewsById);

newsRouter.post("/news/create-news", upload.fields([
  { name: "image1", maxCount: 1 },
  { name: "image2", maxCount: 1 },
  { name: "image3", maxCount: 1 },
  { name: "image4", maxCount: 1 },
  { name: "image5", maxCount: 1 }
]), NewsController.createNews);

newsRouter.put("/news/update-news/:id", NewsController.updateNews);

newsRouter.patch("/news/like-news/:id", NewsController.likenews);

newsRouter.delete("/news/delete-news/:id", NewsController.deleteNews);

export default newsRouter;
