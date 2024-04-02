import { Avatar, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Skeleton, Box } from "@mui/material"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import GradeIcon from '@mui/icons-material/Grade';
import { Link } from "react-router-dom";


const tableHead: string[] = [
    "Matricula",
    "Nombre",
    "Status",
    "Rezago",
    "Informacion",
    "Favoritos"
]

const rows: number[] = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 11, 12, 13]

export const TableEstudentsSkeleton = () => {


    return (
        <>
            <TableContainer component={Paper} sx={{ height: '71vh', marginTop: '2vh' }}>
                <Table>
                    <TableHead >
                        <TableRow >
                            {
                                tableHead.map((title) => {
                                    return (
                                        <TableCell key={title}>
                                            {title}
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map((row) => {
                                return (
                                    <TableRow key={row} hover>
                                        <TableCell>
                                        
                                            <Box sx={{ width: "20px", marginRight:"5px", display:"inline-block"}}>
                                                <Skeleton animation="wave" variant="rounded" width="20px" />
                                            </Box>
                                            <Box sx={{width:"calc(100% - 25px)", display:"inline-block"}}>
                                                <Skeleton animation="wave" variant="rounded" width="80%" />
                                            </Box>
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
        </>
    )
}