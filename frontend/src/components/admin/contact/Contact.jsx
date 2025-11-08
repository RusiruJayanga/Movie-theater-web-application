import React from "react";
//loading
import Loading from "../../../hooks/common/Loading";
//animation
import { motion, AnimatePresence } from "framer-motion";
//hooks
import { useContact } from "../../../hooks/admin/Contact";

const Contact = () => {
  //contact function
  const { data: contacts, isLoading, isError } = useContact();

  //loading
  if (isLoading) {
    return <Loading />;
  }
  //error
  if (isError) {
    return <p className="font-extralight text-[#bdbdbd]">no data to show</p>;
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
          className="w-[100%] p-[10px] font-light rounded-[20px] bg-[#1a1a1a] text-[#bdbdbd] hover:scale-102 transition duration-300 ease-out "
          key={contact?._id}
        >
          <h4 className="w-[100%] font-medium text-white">{contact?.email}</h4>
          <p className="mt-[5px]">{contact?.content}</p>
        </motion.div>
      ))}
      {/* repeat */}
      {contacts?.length === 0 && (
        <p className="font-extralight text-[#bdbdbd]">no data to show</p>
      )}
    </section>
  );
};

export default Contact;
