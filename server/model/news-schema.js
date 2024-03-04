import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
    unique: true
  },
  timestamp: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
  publisher: {
    type: String,
    require: true,
  },
});

const news = mongoose.model("news", newsSchema);

export default news;
