require('dotenv').config();
import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());


// Connection Strings, data from .env file
const db = mysql.createConnection({
  host: process.env.host,
  user: process.env.username,
  password: process.env.password,
  database: process.env.database
});

// URL Test
app.get("/", (req, res) => {
  res.json("hello");
});

// Get blogs posts from DB Table blogs
app.get("/blogs", (req, res) => {
  const query = "SELECT * FROM blogs";
  db.query(query, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// Add blog post controller
app.post("/blogs", (req, res) => {
  const query = "INSERT INTO blogs(`title`, `description`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.description
  ];

  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});


// Delete blog post controller
app.delete("/blogs/:id", (req, res) => {
  const blogID = req.params.id;
  const query = " DELETE FROM blogs WHERE id = ? ";

  db.query(query, [blogID], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// Connection Establishment
app.listen(8800, () => {
  console.log("Connected to backend.");
});
