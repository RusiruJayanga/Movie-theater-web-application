import { useQuery } from "@tanstack/react-query";
import { showTimeDetails } from "../../services/user/Api";

//details hook
export const useShowTime = (movieId) => {
  return useQuery({
    queryKey: ["showTimeDetails", movieId],
    queryFn: () => showTimeDetails(movieId),
    enabled: !!movieId,
  });
};
