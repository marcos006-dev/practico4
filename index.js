const express = require("express");
const morgan = require("morgan");
require("./connection");

const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("port", process.env.PORT || 4000);

app.use(require("./routes/students.routes"));

app.listen(4000, () => {
  console.log("Servidor corriendo puerto", app.get("port"));
});
