import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useGetAllData = (search = "") => {
    return useQuery({
        queryKey: ["allproduct", search],
        queryFn: () =>
            request
                .get(`/allproduct`, { params: { title_like: search } })
                .then((res) => res.data),
    });
};
