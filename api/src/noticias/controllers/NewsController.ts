import type { NextFunction, Request, Response } from "express";
import type RequestDataDTO from "./dtos/RequestNewsDTO.js";
import NewsService from "../services/NewsService.js";

export default class NewsController {
  public static async showNews(req: Request, res: Response) {
    try {
      const news = await NewsService.getAllNews();
      res.status(200).json(news);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({
          message: "Erro ao obter notícias",
          error: error.message,
        });
      } else {
        res.status(500).json({
          message: "Erro ao obter notícias",
          error: "Erro desconhecido",
        });
      }
    }
  }

  public static async showNewsById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;

    try {
      const news = await NewsService.getNewsById(id?.toString() || "");
      res.status(200).json(news);
    } catch (error) {
      return next(error);
    }
  }

  public static async createNews(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const body: RequestDataDTO = req.body;
      const files = req.files as Express.Multer.File[];
      const news = await NewsService.createNews(
        body.title,
        body.summary,
        body.body,
        body.author,
        body.newstype,
        files
      );

      res.status(201).json(news);
    } catch (error) {
      return next(error);
    }
  }

  public static async updateNews(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    const body: RequestDataDTO = req.body;

    try {
      const news = await NewsService.updateNews(
        id?.toString() || "",
        body.title,
        body.summary,
        body.body,
        body.author,
        body.newstype
      );
      res.status(200).json(news);
    } catch (error) {
      return next(error);
    }
  }

  public static async likenews(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;

    try {
      const news = await NewsService.likenews(id?.toString() || "");
      res.status(200).json(news);
    } catch (error) {
      return next(error);
    }
  }

  public static async deleteNews(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;

    try {
      await NewsService.deleteNews(id?.toString() || "");
      res.status(200).json({ message: "Notícia deletada com sucesso" });
    } catch (error) {
      return next(error);
    }
  }
}
