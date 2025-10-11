import { useQuery } from "@tanstack/react-query";
import { fetchUserProfile } from "../../services/user/Api";

//account hook
export const useUserProfile = () => {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
    retry: false,
  });
};
