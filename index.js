require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
require("./db/mongoose");
const Article = require("./db/models/article");
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.static(__dirname + "/client/build"));

// app.use((req, res, next) => {
// ;
//   next();
// });

app.get("/article/:code", async (req, res) => {
  try {
    const article = await Article.findOne({ code: req.params.code });
    console.log(article);
    res.json(article);
  } catch (error) {
    res.status(404).json({ error });
  }
});

app.post("/article", async (req, res) => {
  console.log(req.body);
  try {
    const article = await Article.findOne({ code: req.body.code });
    if (!article) {
      const newArticle = new Article({ ...req.body });
      await newArticle.save();
      return res.json({ message: "Successfully added new product" });
    } else {
      article.supply += 1;
      article.save();
      return res.json({ message: "Successfully updated product" });
    }
  } catch (error) {
    console.log(error);

    res.status(400).json({ error });
  }
});
app.get("/articles", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json({ articles });
  } catch (error) {
    res.status(404).json({ error });
  }
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
  console.log();
});

app.listen(port, () => console.log("Listening on http://localhost:" + port));
