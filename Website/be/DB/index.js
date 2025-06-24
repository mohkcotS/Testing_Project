import { createPool } from "mysql2";
import { config } from "dotenv";
config(); 

const pool = createPool({
    user: process.env.MYSQL_USER,
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE_NAME,
});

const connectToDatabase = async () => {
  try {
    const connection = await pool.promise().getConnection();
    connection.release(); 
    console.log("MySQL Connection Successful");
  } catch (error) {
    console.log("Database Connection Error");
    console.log(error);
    throw error;
  }
};

export { connectToDatabase, pool };