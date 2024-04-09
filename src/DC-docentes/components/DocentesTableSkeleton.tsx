import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Avatar, Checkbox, Box, Skeleton } from "@mui/material";
import { Breadcrumbs, Typography } from "@mui/material"

import { ToolBarDocentes } from "./DocentToolBar";

const tableHead: string[] = [
    "",
    "Matricula",
    "Nombre",
    "Rol",
    "Grupos",
    "Informacion"
]

const rows: number[] = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 11, 12, 13]

export const TableDocentesSkeleton = () => {
    return (
        <Box>
            <Typography variant="h3">Docentes </Typography>
            <Breadcrumbs aria-label="breadcrumb">
                <Typography variant="overline" color="text.primary">Docentes</Typography>
                <Typography color="text.primary"></Typography>
            </Breadcrumbs>

            <ToolBarDocentes></ToolBarDocentes>


            <TableContainer component={Paper} sx={{ marginTop: "2vh" }}>
                <Table>
                    <TableHead >
                        <TableRow >
                            {
                                tableHead.map((title, index) => {
                                    return (
                                        <TableCell key={index} >
                                            {title}
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map((docentes, index) => {
                                return (
                                    
                                    <TableRow key={index}>
                                        <TableCell sx={{display:"flex", justifyContent:"center"}}>
                                            <Skeleton animation="wave" variant="rounded" width={20} />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton animation="wave" variant="rounded" />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton animation="wave" variant="rounded" />

                                        </TableCell>
                                        <TableCell>
                                            <Skeleton animation="wave" variant="rounded" />

                                        </TableCell>
                                        <TableCell>
                                            <Skeleton animation="wave" variant="rounded" />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton animation="wave" variant="rounded" />
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>


    )
}
