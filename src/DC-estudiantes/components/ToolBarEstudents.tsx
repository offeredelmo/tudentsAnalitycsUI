import { Autocomplete, Button, MenuItem, Stack, TextField, IconButton } from "@mui/material"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useState } from "react";

const currencies = [
    {
        value: 'Todos',
        label: 'Todos',
    },
    {
        value: 'Inscrito',
        label: 'Inscrito',
    },
    {
        value: 'Baja definitiva',
        label: 'Baja definitiva',
    },
    {
        value: 'Baja academica',
        label: 'Baja academica',
    },
    {
        value: 'Titulado',
        label: 'Titulado',
    },
];
interface ToolBarGeneracionesProps {
    onSearch: (matricula: string | null) => void;
  }

export const ToolBarEstudents = ({ onSearch }: ToolBarGeneracionesProps) => {
    const [matricula, setMatricula] = useState<string>('');

    const handleMatriculaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMatricula(event.target.value);
    };

    const handleSearch = () => {
        onSearch(matricula || null);
    };
    return (
        <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ marginTop: '2vh', padding: 0, flexWrap: 'nowrap' }}>
            <Stack direction="row" spacing={3} alignContent="center" justifyContent="center" >
                <TextField
                    id="outlined-search"
                    label="Cohorte"
                    type="search"
                    value={matricula}
                    onChange={handleMatriculaChange}
                />
                <IconButton aria-label="" onClick={() => { }}>
                    <FilterAltIcon></FilterAltIcon>
                </IconButton>
            </Stack>


            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                {/* <Button variant="contained" size="medium"  onClick={onGenerateReport}>Agregar Reporte</Button> */}
                <Button variant="contained" size="medium">Enviar Formulario a todos los estudiantes</Button>
            </Stack>

        </Stack>
    )
}