const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const uri = process.env.DATABASE_URI;

const app = express();
app.use(cors())

mongoose.Promise = global.Promise;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

app.use(bodyParser.json());

const artRoute = require("./routes/art");
const bookRoute = require("./routes/books");

app.use("/api/art", artRoute);
app.use("/api/books", bookRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
