const Mongoose = require("mongoose");

const ArticleSchema = new Mongoose.Schema({
  code: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  supply: {
    type: Number,
    default: 1
  }
  // prodNumber: { type: Number, required: true }
});

const Article = Mongoose.model("article", ArticleSchema);
module.exports = Article;
