import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  content: { type: String, required: true },
  addedDate: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
