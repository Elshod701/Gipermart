import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";
import { useParams } from "react-router-dom";

export const useGetDatakey = () => {
    const { datakey } = useParams();

    return useQuery({
        queryKey: [`${datakey}`],
        queryFn: () => request.get(`/${datakey}`).then((res) => res.data)
    })
}

