import { useQuery } from "@tanstack/react-query";
import { fetchContact } from "../../services/admin/Api";

//fetch contact hook
export const useContact = () => {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: fetchContact,
    retry: false,
  });
};
