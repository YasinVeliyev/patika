const path = require("node:path");
require("dotenv").config();
const express = require("express");
const { mongoose } = require("mongoose");
const multer = require("multer");

const { getAllPortfolios, createPortfolio, updatePortfolio } = require("./controller/portfolioController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/assets/img/portfolio");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app = express();
app.set("views", "../frontend/views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.static("../frontend"));

app
  .route("/")
  .get(getAllPortfolios)
  .post(upload.single("file"), createPortfolio)
  .put(upload.single("file"), updatePortfolio);

mongoose
  .connect("mongodb://localhost:27017/agency_proje")
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error(err));
