import { Box, Breadcrumbs, Typography } from "@mui/material"

export const App2 = ({ TableComponent }) => {

  return (
    <Box padding={2} paddingTop='64px' sx={{ flexGrow: 1, overflow: 'auto' }}>
      <Typography variant="h3">Cohorte </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="text.primary">Cohortes</Typography>
        <Typography color="text.primary"></Typography>
      </Breadcrumbs>

      <TableComponent>

      </TableComponent>
    </Box>
  )
}
