import React, { useState } from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ModalComponent from './modal';
import { Box, Breadcrumbs } from '@mui/material';
import Imformacion from './informacion';
import Reporte from './reporte';

export const TableComponent = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const columns: GridColDef[] = [
    { field: 'generacion', headerName: 'Generación', flex: 1 },
    { field: 'fechaIngreso', headerName: 'Fecha de Ingreso', flex: 1 },
    { field: 'fechaEgreso', headerName: 'Fecha de Egreso', flex: 1 },
    { field: 'estudianteRezago', headerName: 'Estudiante con Rezago', flex: 1 },
    {
      field: 'informacion',
      headerName: 'Información',
      flex: 1,
      renderCell: (params: GridCellParams) => (
        <InfoIcon style={{ cursor: 'pointer' }} onClick={handleOpenModal} />
      ),
    },
    {
      field: 'favorito',
      headerName: 'Favorito',
      flex: 1,
      renderCell: (params: GridCellParams) => (
        params.value === 'Sí' ? <StarIcon color="primary" /> : <StarBorderIcon color="disabled" />
      ),
    },
  ];
  

  const rows = [
    { id: 1, generacion: '211', fechaIngreso: '01/01/2023', fechaEgreso: '01/01/2024', estudianteRezago: '2', informacion: '', favorito: 'Sí' },
  ];

  return (
    <div>
      <Box sx={{ padding: '15px' }}>
        <Typography variant="h3">Generaciones</Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.primary">Estudiantes</Typography>
          <Typography color="text.primary"></Typography>
        </Breadcrumbs>
      </Box>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <TextField variant="outlined" label="Search" size="small" />
        <div>
          <Button variant="outlined" onClick={handleOpenModal}>Reporte</Button> {/* Abre el modal al hacer clic en el botón */}
          <Button variant="outlined" style={{ marginLeft: '10px', backgroundColor: '#2196f3', color: 'white' }}>
            Action
          </Button>          </div>
      </div>
      <div style={{ height: "80vh", width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
        />
      </div>
      <ModalComponent open={openModal} handleClose={handleCloseModal} Contenido={Imformacion} />
    </div>
  );
};
