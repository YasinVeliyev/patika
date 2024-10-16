require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const http = require("node:http");
const portfolioRouter = require("./routes/portfolio");

app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("../frontend"));

app.use("/api/v1/portfolios", portfolioRouter);

app.get("/", (req, res) => {
  res.status(200).sendFile("../frontend/index.html");
});

const server = http.createServer(app);
mongoose
  .connect(process.env["DB_URI"])
  .then(
    server.listen(6060, () => {
      console.log(`Server running`, server.address());
    })
  )
  .catch((err) => {
    console.error(err);
    process.exit(0);
  });
