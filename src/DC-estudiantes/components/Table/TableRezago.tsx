import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { estudent } from "../../pages/EstudianteDashboard";
import { TableMateriasRezago } from "./TableMateriasRezago";



export const TableRezago = () => {

    // funcionamiento del despliegue de la fila informacion personal
    const [openRow, setOpenRow] = useState(false); // Estado para controlar la apertura del Drawer
    const toggleRow = () => {
        setOpenRow(!openRow); // Cambia el estado de apertura del Drawer
    };

    const [resago, setResago] = useState(true)

    return (
        <>
                    <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                            <TableCell >
                                <IconButton
                                    aria-label="expand row"
                                    size="small"
                                    onClick={toggleRow}
                                >
                                    {openRow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                                <Typography display="inline-block" variant="subtitle1" >Informacion Rezago</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }}  >
                                <Collapse in={openRow} timeout="auto" unmountOnExit>
                                        <Table size="small" aria-label="purchases">
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell  width='50%'>Cuatrimestre ordinario</TableCell>
                                                    <TableCell  width='50%'>10</TableCell>
                                                </TableRow>
                                             
                                                <TableRow>
                                                    <TableCell  width='50%'>Cuatrimestre actual</TableCell>
                                                    <TableCell  width='50%'>12</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell  width='50%'>Rezago academico</TableCell>
                                                    <TableCell  width='50%'>12</TableCell>
                                                </TableRow>
                                                {
                                                    resago ? <TableMateriasRezago/> : null
                                                }
                                            </TableBody>
                                        </Table>

                                </Collapse>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </>
    )
}



