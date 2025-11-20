import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchSessions,
  resetSession,
  deleteSession,
} from "../../services/admin/Api";
import { toast } from "react-toastify";

//fetch sessions hook
export const useSessions = () => {
  return useQuery({
    queryKey: ["sessions"],
    queryFn: fetchSessions,
    retry: false,
  });
};

//reset session hook
export const useResetSession = () => {
  //refreshing the data
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: resetSession,
    onSuccess: () => {
      toast.success("Session reset successfully");
      queryClient.invalidateQueries(["Sessions"]);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Reset failed !");
    },
  });
};

//delete session hook
export const useDeleteSession = () => {
  //refreshing the data
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSession,
    onSuccess: () => {
      toast.success("Session deleted successfully");
      queryClient.invalidateQueries(["Sessions"]);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Delete failed !");
    },
  });
};
