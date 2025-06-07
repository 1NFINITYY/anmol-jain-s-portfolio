const express = require("express");
const router = express.Router();
const Review = require("../models/Message");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMsg = new Review({ name, email, message });
    await newMsg.save();
    res.status(200).json({ success: true, msg: "Message stored!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: "Server Error" });
  }
});

module.exports = router;
