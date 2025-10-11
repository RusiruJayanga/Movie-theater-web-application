import { useQuery } from "@tanstack/react-query";
import { fetchUserProfile } from "../../services/admin/Api";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUserProfile,
    retry: false,
  });
};
