import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import Grafica from "./grafica"
import { Infogeneraciones } from "../services/getInfoGeneracion"



export const InformacionGeneracion = ({contenido}: {contenido: Infogeneraciones}) => {
    return (
        <>
            <Box paddingTop="20px" sx={{ width: "100%", height: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                <Box bgcolor={grey[300]} sx={{ width: "90%", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px" }}>
                    <Typography variant="h5">{contenido.generacion}</Typography>
                </Box>
                <Box sx={{ width: "90%", marginX: "5%" }}>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle1">
                                            Estudiantes de la generacion
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle1">
                                            {contenido.total_estudiantes}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle1">
                                            Estudiantes ordinarios
                                        </Typography>

                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle1">
                                            {contenido.Estudiantes_ordinarios}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle1">
                                            Estudiantes en rezago
                                        </Typography>

                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle1">
                                            {contenido.Cantidad_de_Estudiantes_en_rezago}
                                            {/* cambiar por rezago cuando exista */}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle1">
                                            Mujeres
                                        </Typography>

                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle1">
                                            {contenido.F}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle1">
                                            Hombres
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle1">
                                        {contenido.M}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box paddingTop="20px" sx={{ width: "90%", marginX: "5%", display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                    <Box bgcolor={grey[300]} sx={{ width: "24%", height: "80px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", borderRadius: "10px" }}>
                        <Box width="100%" textAlign="center" >
                            <Typography variant="h5">{contenido.titulados}</Typography>
                        </Box>
                        <Typography variant="subtitle1">Titulados</Typography>
                    </Box>
                    <Box bgcolor={grey[300]} sx={{ width: "24%", height: "80px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", borderRadius: "10px" }}>
                        <Box width="100%" textAlign="center" >
                            <Typography variant="h5">{contenido.inscritos}</Typography>
                        </Box>
                        <Typography variant="subtitle1">Inscritos</Typography>
                    </Box>
                    <Box bgcolor={grey[300]} sx={{ width: "24%", height: "80px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", borderRadius: "10px" }}>
                        <Box width="100%" textAlign="center" >
                            <Typography variant="h5">{contenido.bajas_academicas}</Typography>
                        </Box>
                        <Typography variant="subtitle1">Baja academica</Typography>
                    </Box>
                    <Box bgcolor={grey[300]} sx={{ width: "24%", height: "80px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", borderRadius: "10px" }}>

                        <Box width="100%" textAlign="center" >
                            <Typography variant="h5">{contenido.bajas_definitivas}</Typography>
                        </Box>
                        <Typography variant="subtitle1">Baja definitiva</Typography>
                    </Box>
                </Box>

                {/* {/* <Grafica contenido={contenido}>
                    
                // // </Grafica>  solo falta la grafica */}

            </Box>
        </>
    )
}