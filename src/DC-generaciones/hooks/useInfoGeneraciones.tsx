import { useQuery } from "@tanstack/react-query"
import { getInfoGeneraciones } from "../services/getInfoGeneracion";



export const useInfoGeneracioenesGeneraciones = (generacion: number, open: boolean) => {

    let { isSuccess, isError, isLoading, data, error } = useQuery({
        queryKey: ['infoGeneracion', generacion],
        queryFn: () => getInfoGeneraciones(generacion),
        refetchOnWindowFocus: false,
    });

    console.log(isError)
    return {
        isLoading, isError, isSuccess, data, error
    }
}