import React from 'react';
import { ThemeProvider } from 'emotion-theming'
import LandingPage from './Pages/Landing'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
