import { useMutation } from "@tanstack/react-query";
import { addMovie } from "../../services/admin/Api";
import { toast } from "react-toastify";

//add movie hook
export const useAddMovie = () => {
  return useMutation({
    mutationFn: addMovie,
    onSuccess: () => {
      toast.success("Movie added successfully!");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Upload failed!");
    },
  });
};
