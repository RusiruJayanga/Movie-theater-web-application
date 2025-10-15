import { useMutation } from "@tanstack/react-query";
import { addUserInterests } from "../../services/user/Api";
import { getUserInterests } from "../../services/user/Api";
import { toast } from "react-toastify";

//interest add hook
export const useAddUserInterests = () => {
  const token = localStorage.getItem("token");

  return useMutation({
    mutationFn: async (movieId) => {
      if (!token) {
        toast.error("Please login to add interests !");
        throw new Error("No token");
      }
      return addUserInterests({ movieId });
    },
    onSuccess: () => {
      toast.success("Interests added successfully !");
    },
    onError: (error) => {
      if (error.message !== "No token") {
        toast.error("Failed to add interests !");
      }
    },
  });
};

//interest fetch hook
export const useFetchUserInterests = () => {
  return useQuery({
    queryKey: ["userInterests"],
    queryFn: getUserInterests,
    retry: false,
  });
};
