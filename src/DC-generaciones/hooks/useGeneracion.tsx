import { useQuery } from "@tanstack/react-query"
import { getGeneraciones } from "../services/getGeneraciones";
import { getGeneracione } from "../services/getGeneracion";



export const useGeneracion = (matricula: number) => {

    let { isSuccess, isError, isLoading, data, error } = useQuery({
        queryKey: ['generacion'],
        queryFn: () => getGeneracione(matricula),
        refetchOnWindowFocus: false,
    });

    return {
        isLoading, isError, isSuccess, data, error
    }
}