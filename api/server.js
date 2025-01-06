const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../public")));

app.get("/callback", (req, res) => {
  const code = req.query.code;
  if (code) {
    console.log("Código recebido:", code);
    res.send("Login bem-sucedido! Você pode fechar esta página.");
  } else {
    res.status(400).send("Erro ao realizar login.");
  }
});

module.exports = app;
