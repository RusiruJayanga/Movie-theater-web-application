import React from "react";
//loading
import Loading from "../../../hooks/common/Loading";
//animation
import { motion, AnimatePresence } from "framer-motion";
//hooks
import { useContact } from "../../../hooks/admin/Contact";

const Contact = () => {
  //contact function
  const { data: contacts, isLoading } = useContact();

  //loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="w-[100%] grid gap-[20px] xl:[grid-template-columns:repeat(auto-fit,_580px)] ">
      {/* repeat */}
      {contacts?.map((contact) => (
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
          key={contact?._id}
        >
          <h5 className="w-[100%] font-light">{contact?.email}</h5>
          <p className="capitalize mt-[10px] opacity-[0.8]">
            {contact?.content}
          </p>
        </motion.div>
      ))}
      {/* repeat */}
      {contacts?.length === 0 && (
        <p className="font-extralight opacity-[0.8] ">no data to show</p>
      )}
    </section>
  );
};

export default Contact;
