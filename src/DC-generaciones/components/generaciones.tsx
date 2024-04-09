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
import { Generaciones } from '../services/getGeneraciones';


const tableHead = ["Generación", "Fecha de Ingreso", "Fecha de Egreso", "Estudiante con Rezago", "Información"];


export const TableComponent = () => {

  const { page, perPage, handleChangePage, handleChangePerPage } = useManejoPaginas();
  const { isLoading, isError, isSuccess, data, error } = useGeneraciones(page, perPage);

  const [openModal, setOpenModal] = useState(false);
  const [dataGeneracion, setDataGeneracion] = useState<number>(0)

   const getData = (generacion: number) => {
     setDataGeneracion(generacion)
     setOpenModal(true);
   }

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  return (
    <>
      {
        isLoading ? <TableGeneracionSkeleton /> : null
      }
      {
        isError ? <p>Ha ocurrido un error: {error.message}. refresca o intentalo mas tarde</p> : null
      }
      {
        isSuccess ?
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
                {data.data.map((generacion) => (
                  <TableRow key={generacion.matricula} hover>

                    <TableCell>{generacion.matricula}</TableCell>
                    <TableCell>{generacion.fecha_ingreso}</TableCell>
                    <TableCell>{generacion.fecha_egreso}</TableCell>
                    <TableCell>{generacion.estudiantes_resago}</TableCell>
                    <TableCell>
                      <IconButton aria-label="informacion" onClick={() => {getData(Number(generacion.matricula))}}>
                        <InfoOutlinedIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[10]}
              component="div"
              count={100}
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
