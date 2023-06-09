const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/index");

const PORT = 8080;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
