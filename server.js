const express = require("express");
const app = express();
app.set("view engine", "hbs");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => {
  console.log("server is running");
});
