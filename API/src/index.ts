import express from "express";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("🎲 Conectado ao MongoDB!");

    const app = express();
    const port = 3001;

    app.listen(port, () => {
      console.log(
        `🚀 O Server tá voando, mermão! Na porta http://localhost:${port}`
      );
    });
  })
  .catch(() => console.log("Erro ao conectar ao MongoDB!"));
