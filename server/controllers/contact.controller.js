const Contact = require("../models/contact.model");

async function getAllContacts(req, res) {
  try {
    const result = await Contact.find();
    res.send(result);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
}

async function getContact(req, res) {
  const id = req.params.id;
  try {
    const result = await Contact.findById(id);
    res.send(result);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
}

async function addContact(req, res) {
  const contact = new Contact(req.body);
  try {
    const result = await contact.save();
    res.send(result);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
}

async function deleteContact(req, res) {
  const { id } = req.params;
  try {
    await Contact.findByIdAndDelete(id);
    res.json("Contact deleted successfully");
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
}

module.exports = {
  getAllContacts,
  addContact,
  deleteContact,
  getContact,
};
