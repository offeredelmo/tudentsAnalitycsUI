import { useQuery } from "@tanstack/react-query"
import { getGeneraciones } from "../services/getGeneraciones";



export const useGeneraciones = (page: number | null, perPage: number | null) => {

    let { isSuccess, isError, isLoading, data, error } = useQuery({
        queryKey: ['decks', page, perPage],
        queryFn: () => getGeneraciones(page, perPage),
        refetchOnWindowFocus: false,
    });

    console.log(isError)
    return {
        isLoading, isError, isSuccess, data, error
    }
}