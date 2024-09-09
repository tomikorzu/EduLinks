const bcrypt = require("bcrypt");
const db = require("../config/db"); // Importar la conexión a la base de datos

// Función para registrar al usuario
const registerUser = (req, res) => {
  const { name, surname, username, email, password } = req.body;

  console.log("Datos recibidos para registro:", req.body);
  

  // Verifica si los campos necesarios están presentes
  if (!name || !surname || !username || !email || !password) {
    console.log("Faltan campos requeridos.");
    return res
      .status(400)
      .json({ success: false, message: "Todos los campos son obligatorios" });
  }

  // Hashear la contraseña antes de guardarla
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Error al hashear la contraseña:", err);
      return res
        .status(500)
        .json({ success: false, message: "Error al hashear la contraseña" });
    }

    console.log("Contraseña hasheada correctamente:", hashedPassword);

    // Consulta SQL para insertar el usuario
    const sql = `INSERT INTO users (name, surname, username, email, password) VALUES (?, ?, ?, ?, ?)`;

    // Ejecutar la consulta para insertar el usuario
    db.query(
      sql,
      [name, surname, username, email, hashedPassword],
      (error, results) => {
        if (error) {
          console.error("Error al insertar usuario:", error);
          return res
            .status(500)
            .json({ success: false, message: "Error al registrar el usuario" });
        }

        console.log("Usuario registrado exitosamente:", results);
        res.json({ success: true, message: "Usuario registrado exitosamente" });
      }
    );
  });
};

module.exports = {
  registerUser,
};
