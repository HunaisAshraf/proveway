const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running in ${port}`);
});
