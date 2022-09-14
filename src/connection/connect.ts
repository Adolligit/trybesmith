import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

mysql.createPool({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_HOST,
  password: process.env.MYSQL_HOST,
});

export default mysql;