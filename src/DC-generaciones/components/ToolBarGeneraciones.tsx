import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

interface ToolBarGeneracionesProps {
  onSearch: (matricula: string | null) => void;
}

export const ToolBarGeneraciones = ({ onSearch }: ToolBarGeneracionesProps) => {
    const [matricula, setMatricula] = useState<string>('');

    const handleMatriculaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMatricula(event.target.value);
    };

    const handleSearch = () => {
        onSearch(matricula || null);
    };

    return (
        <Stack direction="row" spacing={2} justifyContent="start" sx={{ marginTop: '2vh', padding: 0, flexWrap: 'nowrap' }}>
            <TextField 
                id="outlined-search" 
                label="Cohorte" 
                type="search" 
                value={matricula}
                onChange={handleMatriculaChange}
            />
            <Button variant="contained" onClick={handleSearch}>Buscar</Button>
        </Stack>
    );
};
