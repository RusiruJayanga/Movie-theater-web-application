import { useMutation } from "@tanstack/react-query";
import { addBooking } from "../../services/user/Api";
import { toast } from "react-toastify";

//booking hook
export const useAddBooking = () => {
  return useMutation({
    mutationFn: addBooking,
    onSuccess: () => {
      toast.success("Seat added successfully !");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Booking failed !");
    },
  });
};
