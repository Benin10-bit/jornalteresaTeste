import express from "express";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv"

const server = express();

dotenv.config()

server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

server.use(express.json());

server.get("/", (req, res) => {
  res.send("sex");
});

server.listen(1992, () => {
  console.log("Servidor ouvindo na porta 1992");
});
