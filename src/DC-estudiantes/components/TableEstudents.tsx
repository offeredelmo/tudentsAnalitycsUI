import React, { useState } from 'react';
import {
  Avatar,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Button,
  TablePagination
} from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import GradeIcon from '@mui/icons-material/Grade';
import { Link } from "react-router-dom";
import { useEstudiantes } from "../hooks/useEstudiantes";
import { useManejoPaginas } from "../../DC-generaciones/hooks/useManejoPaginas";
import { TableEstudentsSkeleton } from "./TableStudentSkeleton";
import { ToolBarEstudents } from './ToolBarEstudents';

const tableHead: string[] = [
  "",
  "Matricula",
  "Nombre",
  "Status",
  "Rezago",
  "Informacion",
  "Favoritos",
  ""
];

const selectColor = (estatus) => {
  if (estatus.toLowerCase() === "inscrito") return "success";
  if (estatus.toLowerCase() === "baja definitiva") return "error";
  if (estatus.toLowerCase() === "baja academica") return "warning";
  if (estatus.toLowerCase() === "titulado") return "primary";
  return "default";
};


export const TableEstudents = ({ onMatriculaSelect, selectedMatriculas }) => {

  //logica para obtener las matriculas de los checkbox seleccionados
  const handleSelect = (event, matricula) => {
    onMatriculaSelect(matricula, event.target.checked);
  };

  //logica para hacer la paginacion
  const { page, perPage, handleChangePage, handleChangePerPage } = useManejoPaginas();

  //logica del consumo para mostrar los estudiantes
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const { isLoading, isError, isSuccess, data, error, refetch } = useEstudiantes(searchTerm, page, perPage);
  const handleSearch = (matricula: string | null) => {
    setSearchTerm(matricula);
  };


  
  return (
    <>
      <ToolBarEstudents onSearch={handleSearch}></ToolBarEstudents>

      {isLoading ? <TableEstudentsSkeleton /> : null}
      {isError && <p>Error: {error.message}. Please refresh or try again later.</p>}
      {isSuccess && (
        <TableContainer component={Paper} sx={{ height: '71vh', marginTop: '2vh' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {tableHead.map(title => (
                  <TableCell key={title}>{title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.datos.map(estuden => (
                <TableRow key={estuden.id} hover>
                  <TableCell>
                    <Checkbox
                      onChange={(event) => handleSelect(event, estuden.matricula)}
                      checked={selectedMatriculas.includes(estuden.matricula)}
                    />
                  </TableCell>
                  <TableCell>{estuden.matricula}</TableCell>
                  <TableCell>{`${estuden.nombre} ${estuden.apellido_paterno} ${estuden.apellido_materno}`}</TableCell>
                  <TableCell>
                    <Chip
                      avatar={<Avatar>M</Avatar>}
                      label={estuden.estatus}
                      color={selectColor(estuden.estatus)}
                      variant="filled"
                    />
                  </TableCell>
                  <TableCell>{estuden.Rezago ? "Si" : "No"}</TableCell>
                  <TableCell>
                    <Link to={`/director/estudiantes/${estuden.matricula}`}>
                      <IconButton aria-label="information">
                        <InfoOutlinedIcon />
                      </IconButton>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined">Send Form</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10]}
            component="div"
            count={data.total_datos} // Asumiendo que `total` es el total de estudiantes retornado por el servidor
            rowsPerPage={perPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangePerPage}
          />
        </TableContainer>
      )}
    </>
  );
};
