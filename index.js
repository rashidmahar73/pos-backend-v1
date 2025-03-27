const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
// Configure CORS
const corsOptions = {
  origin: "http://localhost:3000", // Allow requests from this origin
  methods: "GET,POST,PUT,DELETE", // Specify the allowed HTTP methods (optional)
  allowedHeaders: "Content-Type,Authorization", // Specify the allowed headers (optional)
};

app.use(cors(corsOptions));
app.use(express.json());

const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const profileRoute = require("./routes/profile");

app.use("/profile", profileRoute);

// final
// users,
// investors
// investor table-------investor data [name,cnic]------get api[id,name,cnic]
// users-----addinvestor----[1,2,3]-----condition userId
