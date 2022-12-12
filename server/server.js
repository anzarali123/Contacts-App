const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const contactRouter = require("./routers/contact.router");
const messageRouter = require("./routers/message.router");
const { notFound, errorHandler } = require("./middlewares/error.middleware");
const cors = require("cors");
const path = require("path");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on PORT ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());

// routes
app.use("/api/contact", contactRouter);
app.use("/api/message", messageRouter);

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// error handling middlewares
app.use(notFound);
app.use(errorHandler);
