import { Box, Button, Card, CardContent, Skeleton, Typography } from "@mui/material"
import { ListChip } from "./ListChip"



export const CardReporteSkeleton = () => {
    return (
        <>
            <Box paddingTop="30px" sx={{ height: "calc(100% - 14%)", overflowY: "auto", }}>

                <Card sx={{ minWidth: "90%", marginBottom: "10px" }} variant="outlined">

                    <CardContent>
                        <Skeleton variant="rounded" animation="wave">

                            <Typography variant="h6" color="primary">Evaluación Semestral de Desempeño Académico</Typography>
                        </Skeleton>

                        <br />
                        <Skeleton variant="rounded" animation="wave">

                            <Typography variant="subtitle2">
                                Fecha: 30 de mayo del 2002
                            </Typography>
                        </Skeleton>

                        <br />
                        <Skeleton variant="rounded" animation="wave">

                            <Typography variant="body1" color="text.secondary">
                                Este reporte tiene como finalidad ofrecer un resumen detallado del desempeño académico de asdasd durante el semestre 10. Se ha realizado una evaluación exhaustiva en las diversas materias cursadas, teniendo en cuenta tanto los resultados académicos como el compromiso y la participación en clase.
                            </Typography>
                        </Skeleton>

                        <br />
                        <Skeleton variant="rounded" animation="wave">

                            <ListChip></ListChip>
                        </Skeleton>

                        <br />
                        <Skeleton variant="rounded" animation="wave">

                            <Button variant="contained">Descargar reporte</Button>
                        </Skeleton>

                    </CardContent>

                </Card>

                <Card sx={{ minWidth: "90%", marginBottom: "10px" }} variant="outlined">

                    <CardContent>
                        <Skeleton variant="rounded" animation="wave">

                            <Typography variant="h6" color="primary">Evaluación Semestral de Desempeño Académico</Typography>
                        </Skeleton>

                        <br />
                        <Skeleton variant="rounded" animation="wave">

                            <Typography variant="subtitle2">
                                Fecha: 30 de mayo del 2002
                            </Typography>
                        </Skeleton>

                        <br />
                        <Skeleton variant="rounded" animation="wave">

                            <Typography variant="body1" color="text.secondary">
                                Este reporte tiene como finalidad ofrecer un resumen detallado del desempeño académico de asdasd durante el semestre 10. Se ha realizado una evaluación exhaustiva en las diversas materias cursadas, teniendo en cuenta tanto los resultados académicos como el compromiso y la participación en clase.
                            </Typography>
                        </Skeleton>

                        <br />
                        <Skeleton variant="rounded" animation="wave">

                            <ListChip></ListChip>
                        </Skeleton>

                        <br />
                        <Skeleton variant="rounded" animation="wave">

                            <Button variant="contained">Descargar reporte</Button>
                        </Skeleton>

                    </CardContent>

                </Card>


                <Card sx={{ minWidth: "90%", marginBottom: "10px" }} variant="outlined">

                    <CardContent>
                        <Skeleton variant="rounded" animation="wave">

                            <Typography variant="h6" color="primary">Evaluación Semestral de Desempeño Académico</Typography>
                        </Skeleton>

                        <br />
                        <Skeleton variant="rounded" animation="wave">

                            <Typography variant="subtitle2">
                                Fecha: 30 de mayo del 2002
                            </Typography>
                        </Skeleton>

                        <br />
                        <Skeleton variant="rounded" animation="wave">

                            <Typography variant="body1" color="text.secondary">
                                Este reporte tiene como finalidad ofrecer un resumen detallado del desempeño académico de asdasd durante el semestre 10. Se ha realizado una evaluación exhaustiva en las diversas materias cursadas, teniendo en cuenta tanto los resultados académicos como el compromiso y la participación en clase.
                            </Typography>
                        </Skeleton>

                        <br />
                        <Skeleton variant="rounded" animation="wave">

                            <ListChip></ListChip>
                        </Skeleton>

                        <br />
                        <Skeleton variant="rounded" animation="wave">

                            <Button variant="contained">Descargar reporte</Button>
                        </Skeleton>

                    </CardContent>

                </Card>





            </Box>
        </>
    )
}  