import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB (updated for new Mongoose)
mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// Contact API
app.post("/api/contact", async (req, res) => {
  try {
    const newMessage = new Contact(req.body);
    await newMessage.save();
    res.status(200).json({ success: true, message: "Message saved!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Error saving message" });
  }
});

// Start server
app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
