import { useQuery } from "@tanstack/react-query"
import { getGeneracion } from "../services/getGeneracion";

export const useGeneracion = (matricula: number) => {
    let { isSuccess, isError, isLoading, data, error } = useQuery({
        queryKey: ['generacion', matricula],  // Agregando matrícula al queryKey para cacheo específico
        queryFn: () => getGeneracion(matricula),
        refetchOnWindowFocus: false,
        enabled: matricula > 0  // Solo ejecutar la consulta si matrícula es mayor que 0
    });

    return {
        isLoading, isError, isSuccess, data, error
    }
}
