import React from 'react';
import { ThemeProvider, CssBaseline, Container, createTheme } from '@mui/material';
import DataChecker from './components/DataChecker';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <DataChecker />
      </Container>
    </ThemeProvider>
  );
}

export default App;
