const { Router } = require("express");
const multer = require("multer");
const path = require("node:path");
const crypto = require("crypto");
const portfolioController = require("../controllers/portfolioController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../frontend/assets/img/portfolio/");
  },
  filename: (req, file, cb) => {
    cb(null, crypto.randomUUID() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(portfolioController.getAllPortfolios)
  .post(upload.single("file"), portfolioController.addPortfolio);

module.exports = router;
