import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import newsRouter from "./src/noticias/routes/NewsRouter.js";
import { ExceptionHandler } from "./src/middlewares/errors/ExceptionHandler.js";
import cookieParser from "cookie-parser";
import { userRouter } from "./src/users/routes/UserRouter.js";
import { meRouter } from "./src/users/routes/me.js";

const server = express();

dotenv.config();

server.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "DELETE", "POST", "OPTIONS", "PUT"],
  })
);

server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(newsRouter);
server.use(userRouter);
server.use(meRouter);

server.get("/", (req, res) => {
  res.send("sex");
});

server.use(ExceptionHandler);

server.listen(1992, () => {
  console.log("Servidor ouvindo na porta 1992");
});
