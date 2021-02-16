const http = require("http");

// const path = require("path");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const commonRoutes = require("./routes/common");

const app = express();
app.use(cors());
app.use(morgan("dev")); //for debuging.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/", commonRoutes);

// // block frontend
// // app.use(express.static("../frontend/buidl"));
// app.use(express.static(path.join(__dirname, "../frontend", "build",)));
// app.get("*", (req, res) => { res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html")); });
// // endblock frontend

// Error handler
app.use((req, res, next) => {
  const error = new Error("Not found.");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  console.log(error.status);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const port = process.PORT || 8000;

const server = http.createServer(app);

server.listen(port);
