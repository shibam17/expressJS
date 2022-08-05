const express = require("express"); //get express
const path = require("path");

const app = express(); //use express - app is creates with express

const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath)); // to deploy static website == built in middleware

app.get("/", (req, res) => {
  res.send("hello from express");
});

app.listen(8000, () => {
  console.log("listening at 80000");
});
