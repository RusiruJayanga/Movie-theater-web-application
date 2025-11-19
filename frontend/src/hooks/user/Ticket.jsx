import { useQuery } from "@tanstack/react-query";
import { getUserTickets } from "../../services/user/Api";

//fetch tickets hook
export const useFetchUserTickets = () => {
  return useQuery({
    queryKey: ["userTickets"],
    queryFn: getUserTickets,
    retry: false,
  });
};
