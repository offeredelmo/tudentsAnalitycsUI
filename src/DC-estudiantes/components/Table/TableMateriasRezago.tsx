import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { estudent } from "../../pages/EstudianteDashboard";



export const TableMateriasRezago = () => {

    // funcionamiento del despliegue de la fila informacion personal
    const [open, setOpen] = useState(false); // Estado para controlar la apertura del Drawer
    const toggleRow = () => {
        setOpen(!open); // Cambia el estado de apertura del Drawer
    };

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                    <Typography  display="inline-block" >Informacion rezago</Typography>
                </TableCell>
               
            </TableRow>

            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Materia</TableCell>
                                        <TableCell>Cuatrimestre de la materia</TableCell>
                                        <TableCell>Rezago academico</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableCell>

                                    </TableCell>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}



