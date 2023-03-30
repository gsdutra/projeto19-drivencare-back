import express from "express";
import cors from 'cors';
import router from './routes/index.js';
import dotenv from "dotenv";
import pkg from "pg";
dotenv.config();

const { Pool } = pkg;

const connection = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT

app.listen(PORT, ()=>console.log("Server listening on port "+PORT));