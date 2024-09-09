const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rutas estáticas
app.use(express.static(path.join(__dirname, "..", "frontend")));

// Rutas para archivos HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/user-auth/login.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/user-auth/register.html"));
});

// Usa las rutas definidas en authRoutes.js
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
