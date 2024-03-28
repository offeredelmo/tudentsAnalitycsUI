import { Box, Grid } from '@mui/material';
import { TableDocentes } from "./DocentesTable";

export const Busqueda = () => {
  return (
    <Box padding={2} paddingTop='64px' sx={{ flexGrow: 1, overflow: 'auto' }}>
      <Grid xs={12} container spacing={2}>
        <Grid item xs={12}>
          <Box>
            <TableDocentes></TableDocentes>
          </Box>
        </Grid>
      </Grid>
    </Box>


  );
};
