import React from 'react';
import './assets/global.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { yellow, deepPurple } from '@mui/material/colors';

import { AddChore } from './components/AddChore/';

const outerTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[700],
    },
    secondary: {
      main: yellow[700],
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={outerTheme}>
        <header className="App-header">
          <AddChore></AddChore>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
