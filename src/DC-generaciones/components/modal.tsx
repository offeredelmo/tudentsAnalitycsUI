import React, { useState } from 'react';
import { Modal, Box, Typography, Paper, IconButton, Tabs, Tab } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { InformacionGeneracion } from './InformacionGeneracion';
import { InformacionGeneracionSkeleton } from './InformacionGeneracionSkeleton';

const ModalComponent = ({ open, handleClose }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [value, setValue] = useState(0);
    const [skeleton, setSkeleton] = useState(false)


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const renderTabContent = (tabIndex: number) => {
        switch (tabIndex) {
            case 0:
                return skeleton ? <InformacionGeneracion /> : <InformacionGeneracionSkeleton/>;
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
                    width: isMobile ? '100%' : '60%',
                    marginLeft: isMobile ? '0%' : '40%',
                    height: '100vh',
                    overflowY: 'auto',
                    paddingTop: "20px"

                }}>
                    <Tabs value={value} onChange={handleChange} variant="fullWidth">
                        <Tab label="Información General" />
                        <Tab label="Reportes" />
                        <Tab label="Gráficas" />
                    </Tabs>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
                        {/* Renderiza el contenido del tab seleccionado */}
                        {renderTabContent(value)}
                    </Box>
                </Paper>
                <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 0, right: 0 }}>
                <CloseIcon />
            </IconButton>
            </Box>
            
        </Modal>
    );
};

export default ModalComponent;
