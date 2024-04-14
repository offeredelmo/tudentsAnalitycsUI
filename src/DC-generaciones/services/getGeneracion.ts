import axios from 'axios';
import { Generacion} from './getGeneraciones';




export const getGeneracione = async (matricula: number): Promise<Generacion> => {
    try {
        const rowData = await axios.get<Generacion>(`https://starfish-app-od7mr.ondigitalocean.app/api/v1/estudiantes/generacion/${matricula}`);
        const data = rowData.data
        console.log(data)
        return data
    } catch (error) {
        console.error("Ocurrió un error al obtener las generaciones:", error);
        throw new Error(`${error}`); 
    }
};


