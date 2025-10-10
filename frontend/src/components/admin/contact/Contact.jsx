import React from "react";
//animation
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  //contact
  const new_Contact = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="w-[100%] grid gap-[20px] xl:[grid-template-columns:repeat(auto-fit,_580px)] ">
      {/* repeat */}
      {new_Contact.map((new_contact) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-[100%] p-[10px] font-extralight rounded-[20px] bg-[#1a1a1a] hover:scale-102 transition duration-300 ease-out "
        >
          <h5 className="w-[100%] font-light">rusirujayanga@gmail.com</h5>
          <p className="capitalize mt-[10px] opacity-[0.8]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            dolore delectus incidunt, quos nam iste explicabo, tempore minus
            temporibus rem officiis eum, nulla quae sint nisi atque. Voluptate,
            quaerat at.
          </p>
        </motion.div>
      ))}
      {/* repeat */}
    </section>
  );
};

export default Contact;
