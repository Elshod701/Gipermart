import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useGetTel = () => {
    return useQuery({
        queryKey: ["tel"],
        queryFn: () => request.get("/tel").then((res) => res.data)
    })
}