import { Box, Breadcrumbs, Typography } from "@mui/material"
import { useState } from "react";
import { ToolBarGeneraciones } from "../components/ToolBarGeneraciones";

export const App2 = ({ TableComponent }) => { // Recibe TableComponent como una prop 
   
  return (
    <Box padding={2} paddingTop='64px' sx={{flexGrow: 1, overflow: 'auto'}}>
        <Typography variant="h3">Generaciones </Typography>
            <Breadcrumbs aria-label="breadcrumb">
                <Typography color="text.primary">Generaciones</Typography>
                <Typography color="text.primary"></Typography>
            </Breadcrumbs>
          <ToolBarGeneraciones></ToolBarGeneraciones>
          
        <TableComponent>

        </TableComponent>
    </Box>
  )
}
