import { useQuery } from "@tanstack/react-query"
import { getGeneraciones } from "../services/getGeneraciones";



export const useGeneraciones = (page: number | null, perPage: number | null) => {

    let { isSuccess, isError, isLoading, data, error } = useQuery({
        queryKey: ['generaciones', page+1, perPage],
        queryFn: () => getGeneraciones(page+1, perPage),
        refetchOnWindowFocus: false,
    });

    return {
        isLoading, isError, isSuccess, data, error
    }
}