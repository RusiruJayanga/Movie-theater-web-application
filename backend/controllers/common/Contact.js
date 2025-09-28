import Contact from "../../models/common/Contact.js";

//contact
export const contactUser = async (req, res) => {
  const { email, content } = req.body;

  //validation
  try {
    if (!email || !content) {
      return res.status(400).json({ message: "Please fill all fields !" });
    }

    const contact = await Contact.create({
      email,
      content,
    });

    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
