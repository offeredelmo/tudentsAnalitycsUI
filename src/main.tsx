import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline } from '@mui/material';
import  LogIn  from './pages/inicio/LogIn.tsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SignIn } from './pages/inicio/SignIn.tsx';
import {Upload} from './pages/archivos/upload.tsx'
import { Dropzone } from './components/DropZoneModal.tsx'
import { EstudiantesMain } from './pages/estudiantes/EstudiantesMain.tsx';
import { Dashboard } from './pages/Dashboard.tsx';
// import { App } from './App.tsx';
import { EstudianteDashboard } from './pages/estudiantes/EstudianteDashboard.tsx';
// import Dropzone from 'react-dropzone';



const darkTheme = createTheme({
  palette: {
    mode: 'light',//se puede usar 'light'
  },
});

const App = () => {
  const [files, setFiles] = useState([]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn/>,
  },
  {
    path: "/upload",
    element: <Upload/>,
  },
  {
    path: "/sigin",
    element: <Dropzone setFiles={setFiles} files={files} />,
  },

  {
    path: "/director/",
    element: <Dashboard/>,
    children: [
      {
        path: "estudiantes/main",
        element: <EstudiantesMain/>,
      },
      {
        path: "estudiantes/:id",
        element: <EstudianteDashboard/>,
      },
    ]
  },
]);

return (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);
};

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <App />
</React.StrictMode>
);