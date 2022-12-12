const express = require("express");
const {
  getAllContacts,
  deleteContact,
  addContact,
  getContact,
} = require("../controllers/contact.controller");
const router = express.Router();

router.get("/get/:id", getContact);
router.get("/getall", getAllContacts);
router.post("/add", addContact);
router.delete("/:id", deleteContact);

module.exports = router;
