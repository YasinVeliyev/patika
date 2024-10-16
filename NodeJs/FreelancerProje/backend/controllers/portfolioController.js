const { PortfolioModel } = require("../models/portfolioModel");
const path = require("node:path");

exports.getAllPortfolios = async (req, res) => {
  const portfolios = await PortfolioModel.find({});

  res.status(200).json(portfolios);
};

exports.addPortfolio = async (req, res) => {
  let img = req.file.filename;
  let { name, description } = req.body;

  PortfolioModel.create({ name, img, description })
    .then((data) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};
