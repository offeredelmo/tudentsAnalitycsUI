import { Box, Breadcrumbs, Typography } from "@mui/material"
import { useState } from "react";
import { BasicModal } from "../components/ModalReport";
import { ToolBarEstudents } from "../components/ToolBarEstudents";
import { TableEstudents } from "../components/TableEstudents";
import { TableEstudentsSkeleton } from "../components/TableStudentSkeleton";

export interface estudent {
    matricula: string,
    nombre: string,
    apellidoPaterno: string
    apellidoMaterno: string
    estatus: string,
    rezago: boolean,
    favorito: boolean,
    datosPersonales: {
        numeroTelefono: string,
        curp: string,
        sexo: string
    }
    datosTutor: {
        nombre: string,
        apellidoPaterno: string
        apellidoMaterno: string
        numeroTelefono: string,
        curp: string,
        sexo: string
    }
    direccionActual: {
        ciudad: string,
        colonia: string,
        codigoPostal: string,
        numeroExterior: string,
        numeroInterior: string
        calle1: string
        calle2: string
    }
    direccionFamiliar: {
        ciudad: string,
        colonia: string,
        codigoPostal: string,
        numeroExterior: string,
        numeroInterior: string
        calle1: string
        calle2: string
    }
}

export const estudents: estudent[] = [
    {
        matricula: "211099",
        nombre: "mario alfredo",
        apellidoPaterno: "mendez",
        apellidoMaterno: "diaz",
        estatus: "Inscrito",
        rezago: true,
        favorito: true,
        datosPersonales: {
            numeroTelefono: "2292134429",
            curp: "amsndbaskjdja092",
            sexo: "Hombre"
        },
        datosTutor: {
            nombre: "sergio",
            apellidoPaterno: "mendez",
            apellidoMaterno: "marquez",
            numeroTelefono: "0987654321",
            curp: "alskdakuwnxjkw",
            sexo: "Hombre"
        },
        direccionActual: {
            ciudad: "Ocosingo",
            colonia: "Centro",
            codigoPostal: "29950",
            numeroExterior: "11",
            numeroInterior: "",
            calle1: "primera oriente",
            calle2: "segunda poniente"
        },
        direccionFamiliar: {
            ciudad: "Ocosingo",
            colonia: "Centro",
            codigoPostal: "29950",
            numeroExterior: "11",
            numeroInterior: "",
            calle1: "primera oriente",
            calle2: "segunda poniente"
        }

    }
]

export const EstudiantesMain = () => {

    // logica para obtener las matriculas seleccionadas
    const [selectedMatriculas, setSelectedMatriculas] = useState<string[]>([]);


    const handleSelectMatricula = (matricula: string, isSelected: boolean) => {
        if (isSelected) {
            setSelectedMatriculas(prev => [...prev, matricula]);
        } else {
            setSelectedMatriculas(prev => prev.filter(m => m !== matricula));
        }
    };

    const handleGenerateReport = () => {
        console.log(selectedMatriculas);
        if (selectedMatriculas.length != 0) {
            handleOpen() //abrir modal
        }

        //hacer el post a la api
        setSelectedMatriculas([])
    };

    // logica pal modal
    const [open, setOpen]: any = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    return (
        <Box padding={2} paddingTop='64px' sx={{ flexGrow: 1, overflow: 'auto' }}>
            <Typography variant="h3">Estudiantes </Typography>
            <Breadcrumbs aria-label="breadcrumb">
                <Typography color="text.primary">Estudiantes</Typography>
                <Typography color="text.primary"></Typography>
            </Breadcrumbs>
            <TableEstudents onMatriculaSelect={handleSelectMatricula} selectedMatriculas={selectedMatriculas}></TableEstudents> :

            <BasicModal open={open} handleClose={handleClose} matriculas={selectedMatriculas}></BasicModal>
        </Box>
    )
}