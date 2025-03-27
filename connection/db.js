const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "pos-backend-v1",
  password: "rashid_007",
  port: 5432,
});

client
  .connect()
  .then(() => {
    console.log("Connected to the postgresql database");
  })
  .catch((err) => {
    console.log(err, "error connecting the database");
  });

module.exports = client; // Export the client
