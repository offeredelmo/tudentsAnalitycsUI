import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

export const ToolBarGeneraciones = () => {
    // Inicializa el estado de 'matricula' con un string vacío
    const [matricula, setMatricula] = useState(null); 
    
    // Maneja el cambio en el campo de entrada actualizando el estado
    const handleMatriculaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMatricula(event.target.value);
    };
    
    // Función para manejar el clic en el botón de buscar
    const handleSearch = () => {
        console.log(matricula); // Aquí puedes hacer lo que necesites con el valor de 'matricula'
    };

    return (
        <Stack direction="row" spacing={2} justifyContent="start" sx={{ marginTop: '2vh', padding: 0, flexWrap: 'nowrap' }}>
            <TextField 
                id="outlined-search" 
                label="Matricula" 
                type="search" 
                value={matricula} // Vincula el valor del estado al campo de entrada
                onChange={handleMatriculaChange} // Actualiza el estado cuando cambia el valor del campo
            />
            <Button variant="contained" onClick={handleSearch}>Buscar</Button>
        </Stack>
    );
};
