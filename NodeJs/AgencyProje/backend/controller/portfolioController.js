const Project = require("../model/projectModel");

exports.getAllPortfolios = async (req, res) => {
  let projects = await Project.find({});

  res.render("index", { projects });
};

exports.createPortfolio = async (req, res) => {
  let portfolio = await Project.create({ ...req.body, img: req.file.filename });

  res.status(201).json(portfolio);
};

exports.updatePortfolio = async (req, res) => {
  if (req.file) {
    req.body.img = req.file.filename;
  }
  let portfolio = await Project.findOneAndUpdate({ name: req.body.name }, { ...req.body });

  res.status(200).json({ portfolio });
};
