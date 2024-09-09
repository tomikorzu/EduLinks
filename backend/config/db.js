const mysql = require("mysql2");
require("dotenv").config({ path: "../.env" });

console.log("Cargando configuración...");

// Crear conexión a MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

console.log("Conectando a la base de datos...");

connection.connect((err) => {
  if (err) {
    console.error("Error de conexión: " + err.stack);
    return;
  }
  console.log("Conectado como id " + connection.threadId);
});

// Función para crear la tabla de usuarios
const createUsersTable = (callback) => {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      surname VARCHAR(100) NOT NULL,
      username VARCHAR(100) UNIQUE NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  console.log("Ejecutando SQL para crear tabla de usuarios...");

  connection.query(sql, (error, results) => {
    if (error) {
      console.error("Error al crear la tabla: " + error.stack);
      callback(error);
      return;
    }
    console.log("Tabla de usuarios creada o ya existe");
    callback(null, results);
  });
};

// Llama a la función para crear la tabla de usuarios
createUsersTable((error, results) => {
  if (error) {
    console.error("Error: " + error.message);
  } else {
    console.log("Resultado de la creación de la tabla de usuarios:", results);
  }

  // Cierra la conexión
  console.log("Cerrando la conexión a la base de datos...");
  connection.end();
});
