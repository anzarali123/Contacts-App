const Message = require("../models/message.model");
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

async function getAllMessages(req, res) {
  try {
    const result = await Message.find().sort({ createdAt: -1 });
    res.send(result);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
}

async function addMessage(req, res) {
  const { firstName, lastName, mobileNumber } = req.body.details;
  const OTP = +req.body.otp;
  const name = `${firstName} ${lastName}`;
  const data = { name, mobileNumber, OTP };
  console.log(mobileNumber);
  const message = new Message(data);
  try {
    await sendMessage(OTP, mobileNumber);
    const result = await message.save();
    res.send(result);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
}

async function sendMessage(OTP, mobileNumber) {
  try {
    await client.messages.create({
      body: `Hi! your OTP is ${OTP}`,
      from: "+17207945257",
      to: `${mobileNumber}`,
    });
  } catch (error) {
    throw new Error();
  }
}
module.exports = { getAllMessages, addMessage };
