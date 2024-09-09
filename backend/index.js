const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir archivos estáticos (frontend)
app.use(express.static(path.join(__dirname, "..", "frontend")));

// Rutas de API
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
