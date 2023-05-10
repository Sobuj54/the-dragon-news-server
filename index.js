const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");
app.use(cors());

const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("dragon is running properly");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

// showing all the news
app.get("/news", (req, res) => {
  res.send(news);
});

// get a specific news through id
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  // 0 id will  show all news category
  if (id == 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => n.category_id === id);
    res.send(categoryNews);
  }
});

app.listen(port, () => {
  console.log(`running properly : ${port}`);
});
