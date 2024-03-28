import React, { useState } from 'react';
import { Modal, Box, Typography, Paper, IconButton, Tabs, Tab } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Reporte from './reporte';
import Imformacion from './informacion';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ModalComponent = ({ open, handleClose }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [value, setValue] = useState(0);


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const renderTabContent = (tabIndex: number) => {
        switch (tabIndex) {
            case 0:
                return <h1>Hola mundo1</h1>;
            case 1:
                return <h1>Hola mundo2</h1>;
            case 2:
                return <h1>Hola mundo3</h1>;
            default:
                return <Typography>Selecciona una opción</Typography>;
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={{ width: '100vw', height: '100vh' }}>
                <Paper sx={{
                    width: isMobile ? '100%' : '50vw',
                    marginLeft: isMobile ? '0%' : '50%',
                    height: '100vh',
                    overflowY: 'auto',
                    paddingTop: "20px"

                }}>
                    <Tabs value={value} onChange={handleChange} variant="fullWidth">
                        <Tab label="Información General" />
                        <Tab label="Calificaciones" />
                        <Tab label="Reportes" />
                        <Tab label="Gráficas" />
                    </Tabs>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>


                        {/* Renderiza el contenido del tab seleccionado */}
                        {renderTabContent(value)}
                    </Box>
                </Paper>
            </Box>
        </Modal>
    );
};

export default ModalComponent;
