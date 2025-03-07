import { Box} from "@mui/material"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import AppBarCustom from "./shared/components/AppBarCustom";
import DrawerCustom from "./shared/components/DraweCustom";





export const Dashboard = () => {
    const [open, setOpen] = useState(true); // Estado para controlar la apertura del Drawer

    const toggleDrawer = () => {
        setOpen(!open); // Cambia el estado de apertura del Drawer
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBarCustom open={open} toggleDrawer={toggleDrawer}></AppBarCustom>
            <DrawerCustom open={open} toggleDrawer={toggleDrawer}></DrawerCustom>
            <Outlet />
        </Box>
    )
}