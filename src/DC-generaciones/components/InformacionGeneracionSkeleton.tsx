import { Box, Skeleton, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import Grafica from "./grafica"



export const InformacionGeneracionSkeleton = () => {
    return (
        <>
            <Box paddingTop="20px" sx={{ width: "100%", height: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                <Box bgcolor={grey[300]} sx={{ width: "90%", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px" }}>
                    <Typography variant="h5">Generacion: 211099</Typography>
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
                                        <Skeleton animation="wave" variant="text" />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle1">
                                            Estudiantes ordinarios
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton animation="wave" variant="text" />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle1">
                                            Estudiantes en rezago
                                        </Typography>

                                    </TableCell>
                                    <TableCell>
                                        <Skeleton animation="wave" variant="text" />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle1">
                                            Mujeres
                                        </Typography>

                                    </TableCell>
                                    <TableCell>
                                        <Skeleton animation="wave" variant="text" />

                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle1">
                                            Hombres
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton animation="wave" variant="text" />

                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box paddingTop="20px" sx={{ width: "90%", marginX: "5%", display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                    <Box bgcolor={grey[300]} sx={{ width: "24%", height: "80px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", borderRadius: "10px" }}>
                        <Box width="100%" textAlign="center" >
                            <Skeleton animation="wave" variant="text" />

                        </Box>
                        <Typography variant="subtitle1">Titulados</Typography>
                    </Box>
                    <Box bgcolor={grey[300]} sx={{ width: "24%", height: "80px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", borderRadius: "10px" }}>
                        <Box width="100%" textAlign="center" >
                            <Skeleton animation="wave" variant="text" />

                        </Box>
                        <Typography variant="subtitle1">Inscritos</Typography>
                    </Box>
                    <Box bgcolor={grey[300]} sx={{ width: "24%", height: "80px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", borderRadius: "10px" }}>
                        <Box width="100%" textAlign="center" >
                            <Skeleton animation="wave" variant="text" />

                        </Box>
                        <Typography variant="subtitle1">Baja academica</Typography>
                    </Box>
                    <Box bgcolor={grey[300]} sx={{ width: "24%", height: "80px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", borderRadius: "10px" }}>

                        <Box width="100%" textAlign="center" >
                            <Skeleton animation="wave" variant="text" />

                        </Box>
                        <Typography variant="subtitle1">Baja definitiva</Typography>
                    </Box>
                </Box>

                <Skeleton animation="wave" variant="text" width="90%" height="300px" />

            </Box>
        </>
    )
}