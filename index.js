var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  var contador = 2 + 2;
  res.render("index", { variable: "Hola", contador });
});

app.get("/estrenos", function(req, res) {
  res.render("estrenos", {});
});

app.listen(3000, function() {
  console.log("Servidor en ejecución");
});
