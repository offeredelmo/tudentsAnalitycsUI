import {Stack, TextField} from "@mui/material"

export const ToolBarGeneraciones = () => {

    

    return (
        <Stack direction="row" spacing={2} justifyContent="start"  sx={{ marginTop: '2vh', padding: 0, flexWrap: 'nowrap' }}>
               <TextField id="outlined-search" label="Matricula" type="search" />
        </Stack>
    )
}