import axios from 'axios';

export interface Infogeneraciones {
    generacion:                        string;
    total_estudiantes:                 number;
    inscritos:                         number;
    bajas_definitivas:                 number;
    bajas_academicas:                  number;
    titulados:                         number;
    Cantidad_de_Estudiantes_en_rezago: number;
    Estudiantes_ordinarios:            number;
    M:                                 number;
    F:                                 number;
}





export const getInfoGeneraciones = async (matricula: number): Promise<Infogeneraciones> => {
    try {
        const rowData = await axios.get<Infogeneraciones>(`https://urchin-app-mm9rx.ondigitalocean.app/estudiantes_status_materias_reprobatorias/${matricula}`);
        const data = rowData.data
        return data
    } catch (error) {
        console.error("Ocurrió un error al obtener las generaciones:", error);
        throw new Error(`${error}`); 
    }
};

