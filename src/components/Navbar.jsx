import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        zIndex: 1301
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: theme === 'light' ? 'black' : 'white' }}>
          InfoBrowse
        </Typography>
        <IconButton
          color="inherit"
          onClick={toggleTheme}
          sx={{
            color: theme === 'light' ? 'black' : 'white',
            '&:hover': {
              color: theme === 'light' ? '#ff9800' : '#ff5722',
            },
          }}
        >
          {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
