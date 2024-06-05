import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import { Container, Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [themeMode, setThemeMode] = useState('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar toggleTheme={toggleTheme} theme={themeMode} />
        <Container component="main" sx={{ mt: 10, mb: 10 }}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ItemList searchTerm={searchTerm} />
        </Container>
        <Footer theme={themeMode} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
