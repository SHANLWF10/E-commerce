const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello,bro!");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
