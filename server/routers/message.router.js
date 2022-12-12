const {
  getAllMessages,
  addMessage,
} = require("../controllers/message.controller");

const express = require("express");
const router = express.Router();

router.post("/", addMessage);
router.get("/", getAllMessages);

module.exports = router;
