import React from 'react';
import { ThemeProvider } from 'emotion-theming'
import LandingPage from './Pages/Landing'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage headerTitle="THIS IS THE TITLE" />
    </ThemeProvider>
  );
}

export default App;
