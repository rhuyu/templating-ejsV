const express = require('express')
const app = express();
const port = 3000;

//EJS is our view engine
app.set("view engine", "ejs");

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  let title = "Home";
  res.render("pages/index", { "title": title });
});

app.get('/about', (req, res) => {
  let title = "About Page";
  res.render("pages/about", { "title": title });
});

app.get('/kdrama', (req, res) => {
  let title = "Kdrama Recommendations";
  res.render("pages/kdrama", { "title": title });
});

app.get('/crochet', (req, res) => {
  let title = "Crochet";
  res.render("pages/crochet", { "title": title });
});

app.get('/games', (req, res) => {
  let title = "Games";
  res.render("pages/games", { "title": title });
});

app.get('/goals', (req, res) => {
  let title = "Future Goals";
  res.render("pages/goals", { "title": title });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
