import { useMutation } from "@tanstack/react-query";
import { contact } from "../services/Api";
import { toast } from "react-toastify";

//contact hook
export const useContact = () => {
  return useMutation({
    mutationFn: contact,
    onSuccess: () => {
      toast.success("Message sent successfully !");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Something went wrong !");
    },
  });
};
