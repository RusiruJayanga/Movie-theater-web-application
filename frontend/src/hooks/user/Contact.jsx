import { useMutation } from "@tanstack/react-query";
import { contact } from "../../services/user/Api";
import { toast } from "react-toastify";

//add contact hook
export const useContact = () => {
  return useMutation({
    mutationFn: contact,
    onSuccess: () => {
      toast.success("Message sent successfully");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Contact failed !");
    },
  });
};
