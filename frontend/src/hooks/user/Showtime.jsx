import { useQuery } from "@tanstack/react-query";
import { getShowTime, showTimeDetails } from "../../services/user/Api";

//fetch showtimes hook
export const useShowTimeList = () => {
  return useQuery({
    queryKey: ["showTimes"],
    queryFn: getShowTime,
    retry: false,
  });
};

//fetch showtime details hook
export const useShowTime = (movieId) => {
  return useQuery({
    queryKey: ["showTimeDetails", movieId],
    queryFn: () => showTimeDetails(movieId),
    enabled: !!movieId,
  });
};
