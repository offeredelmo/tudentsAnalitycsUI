import React, { useState } from 'react';
import {
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useGeneraciones } from '../hooks/useGeneraciones';
import { TableGeneracionSkeleton } from './generacionesSkeleton';
import { useManejoPaginas } from '../hooks/useManejoPaginas';
import ModalComponent from './modal';
import { ToolBarGeneraciones } from './ToolBarGeneraciones';
import { useGeneracion } from '../hooks/useGeneracion';




const tableHead = ["Generación", "Fecha de Ingreso", "Fecha de Egreso", "Estudiante con Rezago", "Información"];


export const TableComponent = () => {

  // hook para manejar el paginado
  const { page, perPage, handleChangePage, handleChangePerPage } = useManejoPaginas();

  // // hook para manejar las peticioes 
  const { isLoading, isError, isSuccess, data, error, refetch } = useGeneraciones(page, perPage);


  // logica para abrir y cerrar el modal ypoder obtener la matricula de la generacion
  const [openModal, setOpenModal] = useState(false);
  const [dataGeneracion, setDataGeneracion] = useState<number>(0)

  const getData = (generacion: number) => {
    setDataGeneracion(generacion)
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  //logica para obtener el valor del input y realizar la busqueda de una generacion
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const {
    isLoading: isLoadingG,
    isError: isErrorG,
    isSuccess: isSuccessG,
    data: dataG,
    error: errorG
  } = useGeneracion(parseInt(searchTerm));
  const handleSearch = (matricula: string | null) => {
    setSearchTerm(matricula);
  };



  return (
    <>
      <ToolBarGeneraciones onSearch={handleSearch} />
      {
        (isLoading || isLoadingG) ? <TableGeneracionSkeleton /> : null
      }
      {
        isError ? <p>Ha ocurrido un error: {error.message}. refresca o intentalo mas tarde</p> : null
      }
      {
        isErrorG && (
          <>
            <h1>Error en la búsqueda: {errorG.message}. Intentando recargar...</h1>
            {refetch()}
          </>
        )
      }
      {
        ((isSuccess || isSuccessG)) ?
          <>
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
                  {
                    (searchTerm && isSuccessG ? dataG.results : data.results).map((generacion) => (
                      <TableRow key={generacion.generacion} hover>

                        <TableCell>{generacion.generacion}</TableCell>
                        <TableCell>{generacion.fecha_ingreso}</TableCell>
                        <TableCell>{generacion.fecha_egreso}</TableCell>
                        <TableCell>{generacion.cantidad_estudiantes_con_rezago}</TableCell>
                        <TableCell>
                          <IconButton aria-label="informacion" onClick={() => { getData(Number(generacion.generacion)) }}>
                            <InfoOutlinedIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    )
                    )
                  }
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[10]}
                component="div"
                count={searchTerm && isSuccessG ? dataG.total : data.total}
                rowsPerPage={perPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangePerPage}
              />

            </TableContainer>
            <ModalComponent open={openModal} handleClose={handleCloseModal} generacion={dataGeneracion} />
          </>

          : null
      }
    </>
  );
};
