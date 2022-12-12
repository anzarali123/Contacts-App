const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const contactRouter = require("./routers/contact.router");
const messageRouter = require("./routers/message.router");
const { notFound, errorHandler } = require("./middlewares/error.middleware");
const cors = require("cors");
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

// error handling middlewares
app.use(notFound);
app.use(errorHandler);
