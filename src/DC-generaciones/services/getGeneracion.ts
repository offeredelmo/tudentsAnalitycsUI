import axios from 'axios';
export interface Generacion {
    cantidad: number;
    results:  Result[];
}

export interface Result {
    generacion:                      string;
    cantidad_estudiantes_con_rezago: number;
    fecha_ingreso:                   string;
    fecha_egreso:                    string;
    total_estudiantes_generacion:    number;
}




export const getGeneracion = async (matricula: number): Promise<Generacion> => {
    try {
        console.log(matricula)
        const rowData = await axios.get<Generacion>(`https://urchin-app-mm9rx.ondigitalocean.app/api/v1/cohortes/:${matricula}`);
        const data = rowData.data
        console.log(data)
        return data
    } catch (error) {
        console.error("Ocurrió un error al obtener las generaciones:", error);
        throw new Error(`${error}`);
    }
};


