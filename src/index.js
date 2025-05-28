import express from "express";
import cors from "cors"
import dotenv from "dotenv"

import pool from "./config/db.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5002;

app.use(express.json());
app.use(cors());

//Routes 

//Error Handling MiddleWare

//Server Running 

//TESTING DB

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT current_database()");
    res.send(`The db name is: ${result.rows[0].current_database}`);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).send("Failed to connect to DB");
  }
});

app.listen(port,() => {
    console.log('Server is running on port : '+ port);
})
