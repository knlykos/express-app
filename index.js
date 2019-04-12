var express = require("express");
var app = express();

app.set("view engine", "ejs");

// Creamos el index de la página web
// req y res, son paremetros en una función, dentro de otra función, llamada callback. [investiga]
// req, significa request, lo que el navegador envía a nuestro servidor web
// res, significa response, lo que el servidor envía al navegador
app.get("/", function(req, res) {
  
  
  // Este bloque representa la lógica que se puede efectuar,
  // Muchas veces podemos recibir información de un usuario de formularios
  // y esa información necesitamos procesarla,
  // Por ahora concentrate en aprender esto muy basico
  var contador = 2 + 2;
  
  
  
// Investiga objetos javascript { variable: "Hola", contador },
// pasar parametros en funciones
// en este caso estamos pasando un objeto de javascript como parametro
  res.render("index", { variable: "Hola", contador }); 
});

app.get("/estrenos", function(req, res) {
  res.render("estrenos", {});
});

app.listen(3000, function() {
  console.log("Servidor en ejecución");
});
