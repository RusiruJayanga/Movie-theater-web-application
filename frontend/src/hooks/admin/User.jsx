import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUserProfile } from "../../services/admin/Api";
import { deleteUsersProfile } from "../../services/admin/Api";
import { toast } from "react-toastify";

//users hook
export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUserProfile,
    retry: false,
  });
};

//account delete hook
export const useDeleteAccount = () => {
  //refreshing the data
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUsersProfile,
    onSuccess: () => {
      toast.success("User deleted successfully !");
      queryClient.invalidateQueries(["users"]);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to delete user !");
    },
  });
};
