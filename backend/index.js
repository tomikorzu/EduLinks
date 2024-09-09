const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "..", "frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/user-auth/login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/user-auth/register.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
