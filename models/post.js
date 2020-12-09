const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  image: { type: String, required: true },
  body: { type: Array, required: true },
  likes: { type: Number},
  dislikes: { type: Number },
  comments: { type: Number },
  authorId: { type: String}
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
