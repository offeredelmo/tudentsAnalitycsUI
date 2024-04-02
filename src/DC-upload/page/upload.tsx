import { useState } from "react";
import { Outlet } from "react-router-dom";
import AppBarCustom from "../../components/shared/AppBarCustom";
import DrawerCustom from "../../components/shared/DraweCustom";
import { Card, CardActionArea, CardContent, Typography, Box, Button } from "@mui/material";
import Dropzone from "../../components/shared/DropZoneModal";

export const Upload = () => {
    const [open, setOpen] = useState(true);
    const [studyPlanFiles, setStudyPlanFiles] = useState([]);
    const [mapCurricular, setMapCurricular] = useState([]);
    const [subjectsFiles, setSubjectsFiles] = useState([]);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleUploadStudyPlanFiles = () => {
        // Aquí puedes manejar la subida de archivos de Plan de estudios
        console.log(studyPlanFiles);
    };

    const handleUploadMapCurricular = () => {
        // Aquí puedes manejar la subida de archivos de Plan de estudios
        console.log(mapCurricular);
    };

    const handleUploadSubjectsFiles = () => {
        // Aquí puedes manejar la subida de archivos de Materias
        console.log(subjectsFiles);
    };

    return (
         
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 9, display: 'flex', flexDirection: 'row', justifyContent: 'left', gap: 4 }}>
                {/* Contenedor para las Cards */}
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: 900 }}>
                    {/* Card de Plan de estudios */}
                    <Card sx={{ mb: 2, height: 'auto' }}> 
                        <CardActionArea>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Plan de estudios
                                </Typography>
                                <Dropzone setFiles={setStudyPlanFiles} files={studyPlanFiles} />
                                <Button variant="contained" onClick={handleUploadStudyPlanFiles} sx={{ mt: 2 }}>
                                Subir archivos
                            </Button>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    {/* Card de Materias */}
                    <Card sx={{ mb: 2, height: 'auto' }}> 
                        <CardActionArea>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Materias
                                </Typography>
                                <Dropzone setFiles={setSubjectsFiles} files={subjectsFiles} />
                                <Button variant="contained" onClick={handleUploadSubjectsFiles} sx={{ mt: 2 }}>
                                Subir archivos
                            </Button>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>

                {/* Card para Mapa Curricular */}
                <Card sx={{ mb: 2, width: '100%', maxWidth: 900, height: 500}}>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Mapa Curricular
                            </Typography>
                            <Dropzone setFiles={setMapCurricular} files={mapCurricular} />
                            <Button variant="contained" onClick={handleUploadMapCurricular} sx={{ mt: 2 }}>
                                Subir archivos
                            </Button>
                            {/* Contenido para Mapa Curricular */}
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
    );
};
