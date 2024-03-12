import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useGetSingle = () => {
    const product = useParams();

    return useQuery({
        queryKey: ["laptop"],
        queryFn: () => request.get(`${product.brand}/${product.id}`).then((res) => res.data)
    })
}