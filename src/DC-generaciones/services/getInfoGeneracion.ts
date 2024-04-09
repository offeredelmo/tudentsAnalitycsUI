import axios from 'axios';

// Generated by https://quicktype.io

export interface Infogeneraciones {
    matricula:                    string;
    estudiantes_ordinario:        number;
    total_estudiantes_generacion: number;
    estudiantes_por_estado:       EstudiantesPorEstado;
    estudiantes_por_sexo:         EstudiantesPorSexo;
    estatus_counts:               EstatusCounts;
}

export interface EstatusCounts {
    INSCRITO:        number;
    BAJA_DEFINITIVA: number;
    BAJA_ACADEMICA:  number;
    TITULADO:        number;
}

export interface EstudiantesPorEstado {
    Ordinario:    number;
    Equivalencia: number;
}

export interface EstudiantesPorSexo {
    M: number;
    F: number;
}





export const getInfoGeneraciones = async (matricula: number): Promise<Infogeneraciones> => {
    try {
        const rowData = await axios.get<Infogeneraciones>(`https://starfish-app-od7mr.ondigitalocean.app/api/v1/estudiantes/generacion/resago${matricula}`);
        const data = rowData.data
        return data
    } catch (error) {
        console.error("Ocurrió un error al obtener las generaciones:", error);
        throw new Error(`${error}`); 
    }
};

