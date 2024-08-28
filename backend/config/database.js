import mysql from "mysql2";
import 'dotenv/config'

// create the connection to database

const db = mysql.createConnection({
    host: process.env.hostDb,
    user: process.env.userDb,
    password: process.env.pwdDb,
    database: process.env.dbName,
    multipleStatements: true,
    connectionLimit: 30,

});


db.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default db;