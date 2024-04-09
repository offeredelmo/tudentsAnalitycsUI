import { Checkbox, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";

const tableHead = ["Generación", "Fecha de Ingreso", "Fecha de Egreso", "Estudiante con Rezago", "Información", "Favorito"];


export const TableGeneracionSkeleton = () => {


    return (
        <TableContainer component={Paper} sx={{ height: 'auto', marginTop: '2vh' }}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        {tableHead.map((title) => (
                             <TableCell key={title}>{title}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        
                        <TableCell><Skeleton animation="wave" variant="text" /></TableCell>
                        <TableCell><Skeleton animation="wave" variant="text" /></TableCell>
                        <TableCell><Skeleton animation="wave" variant="text" /></TableCell>
                        <TableCell><Skeleton animation="wave" variant="text" /></TableCell>
                        <TableCell>
                            <Skeleton animation="wave" variant="text" />
                        </TableCell>
                        <TableCell>
                            <Skeleton animation="wave" variant="text" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={0}
                rowsPerPage={0}
                page={0}
                onPageChange={()=>{}}
                onRowsPerPageChange={()=>{}}
            />
        </TableContainer>
    );
};