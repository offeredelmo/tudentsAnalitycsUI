import { Box, Button, Card, CardContent, Typography } from "@mui/material"
import { ListChip } from "./ListChip"



export const CardReporte = () => {
    return (
        <>
            <Box paddingTop="30px" sx={{ height: "calc(100% - 14%)", overflowY:"auto",}}>

                <Card sx={{ minWidth: "90%", marginBottom:"10px"}} variant="outlined">
                    <CardContent>
                        <Typography variant="h6" color="primary">Evaluación Semestral de Desempeño Académico</Typography>
                        <br />
                        <Typography variant="subtitle2">
                            Fecha: 30 de mayo del 2002
                        </Typography>
                        <br />
                        <Typography variant="body1" color="text.secondary">
                            Este reporte tiene como finalidad ofrecer un resumen detallado del desempeño académico de asdasd durante el semestre 10. Se ha realizado una evaluación exhaustiva en las diversas materias cursadas, teniendo en cuenta tanto los resultados académicos como el compromiso y la participación en clase.
                        </Typography>
                        <br />
                        <ListChip></ListChip>
                        <br />
                        <Button variant="contained">Descargar reporte</Button>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: "90%" }} variant="outlined">
                    <CardContent>
                        <Typography variant="h6" color="primary">Evaluación Semestral de Desempeño Académico</Typography>
                        <br />
                        <Typography variant="subtitle2">
                            Fecha: 30 de mayo del 2002
                        </Typography>
                        <br />
                        <Typography variant="body1" color="text.secondary">
                            Este reporte tiene como finalidad ofrecer un resumen detallado del desempeño académico de asdasd durante el semestre 10. Se ha realizado una evaluación exhaustiva en las diversas materias cursadas, teniendo en cuenta tanto los resultados académicos como el compromiso y la participación en clase.
                        </Typography>
                        <br />
                        <ListChip></ListChip>
                        <br />
                        <Button variant="contained">Descargar reporte</Button>
                    </CardContent>
                </Card>
              
            </Box>
        </>
    )
}  