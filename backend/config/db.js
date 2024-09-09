const mysql = require("mysql2");
require("dotenv").config({ path: "../.env" });

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("Error de conexión: " + err.stack);
    return;
  }
  console.log("Conectado como id " + connection.threadId);
});

// Función para crear una tabla
const createTable = (callback) => {
  const sql = `
    CREATE TABLE IF NOT EXISTS test_table_3 (
      id INT AUTO_INCREMENT PRIMARY KEY,
      description VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  connection.query(sql, (error, results) => {
    if (error) {
      console.error("Error al crear la tabla: " + error.stack);
      callback(error);
      return;
    }
    console.log("Tabla creada o ya existe");
    callback(null, results);
  });
};

// Llama a la función para crear la tabla
createTable((error, results) => {
  if (error) {
    console.error("Error: " + error.message);
  } else {
    console.log("Resultado de la creación de la tabla:", results);
  }

  // Cierra la conexión
  connection.end();
});
