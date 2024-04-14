



import React from 'react';
import { Grid, TextField, Button, Select, MenuItem, InputLabel, FormControl, Typography } from "@mui/material"

interface EstudianteFormularioProps {
    // Definir props si es necesario
}

const EstudianteFormulario: React.FC<EstudianteFormularioProps> = () => {
    // Asumiendo que tienes un estado o manejo de formularios aquí

    return (
        <form>
            <Grid container spacing={2} padding={5}>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Typography variant="h4">¡ACTUALIZACIÓN DE DATOS!</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6'>Datos personales</Typography>
                    <hr />
                    <TextField fullWidth label="Nombre" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Correo Personal" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Numero de telefono" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Curp" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Género</InputLabel>
                        <Select label="Género">
                            <MenuItem value="male">Masculino</MenuItem>
                            <MenuItem value="female">Femenino</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant='h6'>Datos del tutor</Typography>
                    <hr />
                    <TextField fullWidth label="Nombre" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Correo Personal" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Numero de telefono" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Curp" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Género</InputLabel>
                        <Select label="Género">
                            <MenuItem value="male">Masculino</MenuItem>
                            <MenuItem value="female">Femenino</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant='h6'>Direccion actual</Typography>
                    <hr />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth label="Ciudad" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth label="Colonia" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth label="Codigo Postal" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Numero interior" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Numero Exterior" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Calle 1" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Calle 2" variant="outlined" />
                </Grid>



                <Grid item xs={12}>
                    <Typography variant='h6'>Direccion Familiar</Typography>
                    <hr />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth label="Ciudad" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth label="Colonia" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth label="Codigo Postal" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Numero interior" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Numero Exterior" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Calle 1" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Calle 2" variant="outlined" />
                </Grid>

                <Grid item xs={12}>
                    <Grid item xs={12} md={4}>
                        <Button variant="contained">Guardar datos</Button>

                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
}

export default EstudianteFormulario;
