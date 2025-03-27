const express = require("express");
const client = require("../connection/db");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("../authentication");
require("dotenv").config();

const router = express.Router();

router.post("/create_profile", (req, res) => {
  const { first_name, last_name, phone_number, password, email, role_id } =
    req.body;

  const insertQuery = `
             INSERT INTO profiles (first_name, last_name, phone_number, password, email, role_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
      `;

  client.query(
    insertQuery,
    [first_name, last_name, phone_number, password, email, role_id],
    (err, result) => {
      if (err) {
        console.error("Error executing query", err.stack);
        res.status(500).send(`Error signup`);
      } else {
        res.status(200).json({
          message: "Profile created successfully",
        });
      }
    }
  );
});

module.exports = router;
