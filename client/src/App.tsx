import React from 'react';
import './assets/global.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Fab } from '@mui/material';
import { yellow, deepPurple } from '@mui/material/colors';
import { routes } from './config/routes';
import { Home } from './pages/Home';
import { Panel } from './pages/Panel';
import CssBaseline from '@mui/material/CssBaseline';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const DefaultTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: yellow[700],
    },
    secondary: {
      main: deepPurple[700],
    },
  },
  typography: {
    fontFamily: "font-family: 'Montserrat', sans-serif",
    h1: {
      fontFamily: "'Xanh Mono', monospace",
    }
  }
});

function App() {
  return (
    <Container maxWidth="xl" sx={{ marginTop: '2rem' }}>
      <ThemeProvider theme={DefaultTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path={routes.panel} element={<Panel />} />
            <Route path={routes.home} element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Fab sx={{ position: 'fixed', right: '4vw', bottom: '4vh' }} color="secondary" aria-label="change-mode">
          <LightModeIcon />
          <DarkModeIcon sx={{ display: 'none' }} />
        </Fab>
      </ThemeProvider>
    </Container >
  );
}

export default App;
