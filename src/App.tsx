import React from 'react';
import { Theme } from './views';
import { ThemeProvider } from '@mui/material/styles';
import Main from './views';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline/>
      <Main/>
    </ThemeProvider>

  );
}

export default App;
