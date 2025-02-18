const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require('cors');


dotenv.config();
connectDB();

app.use(express.json());
app.use(cors({
  origin:"http://localhost:3000",
  methods:["GET","POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials:true
}))


app.get("/", (req, res) => {
  res.send("working...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
