import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "movies_db",
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error("Errore MySQL:", err.message);
  } else {
    console.log("Connesso a MySQL");
  }
});

export default connection;
