// backend/index.js
require('dotenv').config();
const cors = require('cors');
const express = require("express");
const mainRouter = require("./routes/index");


const app = express();
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());

app.use("/api/v1", mainRouter);

app.listen(3000);