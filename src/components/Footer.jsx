import { Box, Typography, Link, Container, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = ({ theme }) => {
  return (
    <Box
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.background.paper,
        position: 'fixed',
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #ddd',
      }}
    >
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              {'Developed by '}
              <Link color="inherit" href="https://github.com/chiragyadav2003">
                Chirag Yadav
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Link href="https://github.com/chiragyadav2003" color="inherit" sx={{ mx: 1, color: theme === 'light' ? 'black' : 'white' }}>
                <GitHubIcon />
              </Link>
              <Link href="https://www.linkedin.com/in/chirag-yadav-53924922a/" color="inherit" sx={{ mx: 1, color: theme === 'light' ? 'black' : 'white' }}>
                <LinkedInIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
