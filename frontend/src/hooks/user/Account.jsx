import { useQuery } from "@tanstack/react-query";
import { fetchUserProfile } from "../../services/user/Api";

//fetch account hook
export const useUserProfile = () => {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
    retry: false,
  });
};
