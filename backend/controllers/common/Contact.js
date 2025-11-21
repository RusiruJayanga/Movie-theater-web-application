import Contact from "../../models/common/Contact.js";

//add contact
//--
export const contactUser = async (req, res) => {
  const { email, content } = req.body;

  //validation
  try {
    if (!email || !content) {
      return res.status(400).json({ message: "All fields are required !" });
    }

    //create contact
    const contact = await Contact.create({
      email,
      content,
    });

    res.status(201).json(contact);
  } catch (error) {
    console.error("Contact add failed !:", error.message);
    res.status(500).json({ message: "Contact add failed !" });
  }
};

//fetch all contact
//--
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Contacts fetching failed !:", error.message);
    res.status(500).json({ message: "Contacts fetching failed !" });
  }
};
