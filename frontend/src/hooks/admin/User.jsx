import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchUserProfile,
  banUsersProfile,
  activeUsersProfile,
} from "../../services/admin/Api";
import { toast } from "react-toastify";

//fetch users hook
export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUserProfile,
    retry: false,
  });
};

//user account ban hook
export const useBanAccount = () => {
  //refreshing the data
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: banUsersProfile,
    onSuccess: () => {
      toast.success("User banned successfully");
      queryClient.invalidateQueries(["users"]);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Ban failed !");
    },
  });
};

//user account active hook
export const useActiveProfile = () => {
  //refreshing the data
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: activeUsersProfile,
    onSuccess: () => {
      toast.success("User activated successfully");
      queryClient.invalidateQueries(["users"]);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Activate failed !");
    },
  });
};
