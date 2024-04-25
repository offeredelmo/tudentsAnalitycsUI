import axios from 'axios';

export interface Estudiantes {
    total_datos: number;
    datos: Dato[];
}

export interface Dato {
    id: number;
    matricula: string;
    estatus: string;
    persona_id: number | null;
    nombre: Nombre;
    apellido_paterno: ApellidoPaterno;
    apellido_materno: ApellidoMaterno;
    Rezago: Rezago;
}

export enum Rezago {
    No = "No",
    Sí = "Sí",
}

export enum ApellidoMaterno {
    ApellidoMaternoNoDisponible = "Apellido materno no disponible",
}

export enum ApellidoPaterno {
    ApellidoPaternoNoDisponible = "Apellido paterno no disponible",
}

export enum Nombre {
    MauricioAlejandroOcampoLopez = "Mauricio Alejandro Ocampo Lopez",
    NombreNoDisponible = "Nombre no disponible",
}



export const getEstudiantes = async (matricula: string = "", page: number = 1, perPage: number = 10): Promise<Estudiantes | any > => {
    try {
        const rowData = await axios.get<Estudiantes>(`https://urchin-app-mm9rx.ondigitalocean.app/api/v1/estudiante?page=${page}&page_size=${perPage}`);
        console.log(rowData.data)
        return rowData.data
    } catch (error) {
        console.error("Ocurrió un error al obtener las generaciones:", error);
        throw new Error(`${error}`);
    }
};


