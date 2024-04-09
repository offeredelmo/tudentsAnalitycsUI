import axios from 'axios';

// Generated by https://quicktype.io

export interface Generaciones {
    total_results: number;
    data:          Generacion[];
}

export interface Generacion {
    matricula:          string;
    estudiantes_resago: number;
    fecha_ingreso:      string;
    fecha_egreso:       string;
}


export const getGeneraciones = async (page: number = 1, perPage: number = 10): Promise<Generaciones> => {
    try {
        const rowData = await axios.get<Generaciones>(`https://starfish-app-od7mr.ondigitalocean.app/api/v1/estudiantes/generacion/estudiantes?page=${page}&per_page=${perPage}`);
        const data = rowData.data
       
        return data
    } catch (error) {
        console.error("Ocurrió un error al obtener las generaciones:", error);
        throw new Error(`${error}`); 
    }
};


