import { estudent } from "../pages/EstudianteDashboard"
import { TableDatosPersonales } from "./Table/TableDatosPersonales"
import { TableDireccionActual } from "./Table/TableDireccionActual"
import { TableDireccionFamiliar } from "./Table/TableDireccionFamiliar"
import { TableTutor } from "./Table/TableTutor"


export const GroupTableEstudiante = ({estudents}:{estudents:estudent[]}) => {
    return(
        <>
            <TableDatosPersonales estudents={estudents} />
            <TableTutor estudents={estudents}/>
            <TableTutor estudents={estudents} />
            <TableDireccionActual estudents={estudents} />
            <TableDireccionFamiliar estudents={estudents} />
        </>
    )
}