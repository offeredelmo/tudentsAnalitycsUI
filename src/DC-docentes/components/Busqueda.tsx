import { Box, Grid } from '@mui/material';
import { TableDocentes } from "./DocentesTable";
import { useState } from 'react';
import { TableDocentesSkeleton } from './DocentesTableSkeleton';

export const Busqueda = () => {

  const [skeleton, setSkeleton] = useState(true)

  return (
    <Box padding={2} paddingTop='64px' sx={{ flexGrow: 1, overflow: 'auto' }}>
      <Grid xs={12} container spacing={2}>
        <Grid item xs={12}>
          <Box>
            {
              skeleton ? <TableDocentes></TableDocentes> : <TableDocentesSkeleton></TableDocentesSkeleton>
            }
          </Box>
        </Grid>
      </Grid>
    </Box>


  );
};
