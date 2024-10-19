require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const routes = require("./routes/route");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running in ${port}`);
});
