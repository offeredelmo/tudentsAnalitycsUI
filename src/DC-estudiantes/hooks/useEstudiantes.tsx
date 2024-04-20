import { useQuery } from "@tanstack/react-query"
import { getEstudiantes } from "../services/getEstudiantes";



export const useEstudiantes = (matricula: string | null ,page: number | null, perPage: number | null) => {

    let { isSuccess, isError, isLoading, data, error, refetch} = useQuery({
        queryKey: ['generaciones', page+1, perPage],
        queryFn: () => getEstudiantes(matricula, page+1, perPage),
        refetchOnWindowFocus: false,
    });

    return {
        isLoading, isError, isSuccess, data, error, refetch
    }
}