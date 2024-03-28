import { Box } from "@mui/material"
import { useState } from "react";

export const App2 = ({ TableComponent }) => { // Recibe TableComponent como una prop  
  return (
    <Box padding={2} paddingTop='64px' sx={{flexGrow: 1, overflow: 'auto'}}>
        <TableComponent></TableComponent>
    </Box>
  )
}
