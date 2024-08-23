const express = require("express");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  app.send("Hello!");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
