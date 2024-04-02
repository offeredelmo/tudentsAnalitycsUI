import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';




import { SignIn } from './User/pages/SignIn.tsx';
import { Dashboard } from './Dashboard.tsx';
import { EstudiantesMain } from './DC-estudiantes/pages/EstudiantesMain.tsx';
import { EstudianteDashboard } from './DC-estudiantes/pages/EstudianteDashboard.tsx';
import { TableComponent } from './DC-generaciones/components/generaciones.tsx';
import { Busqueda } from './DC-docentes/components/Busqueda.tsx';
import InformacionDocente from './DC-docentes/components/InformacionDocente.tsx';
import { App2 } from './DC-generaciones/pages/generaciones.tsx';
import LogIn from './User/pages/LogIn.tsx';

const darkTheme = createTheme({
  palette: {
    mode: 'light',//se puede usar 'light'
  },
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/sigin",
    element: <SignIn />,
  },

  {

    path: "/director/",
    element: <Dashboard />,
    children: [
      {
        path: "estudiantes/main",
        element: <EstudiantesMain />,
      },
      {
        path: "estudiantes/:id",
        element: <EstudianteDashboard />,

      },
      {
        path: "generaciones",
        element: <App2 TableComponent={TableComponent} />,
      },
      {
        path: "docentes/main",
        element: <Busqueda />,
      },
      {
        path: "docentes/informacion",
        element: <InformacionDocente />,

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,

)
