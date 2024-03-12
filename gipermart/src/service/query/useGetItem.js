import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useGetItem = () => {
    return useQuery({
        queryKey: ["laptop"],
        queryFn: () => request.get("/laptop").then((res) => res.data)
    })
}
