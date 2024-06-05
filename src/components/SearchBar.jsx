import { TextField, Box } from '@mui/material';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Box sx={{ my: 2 }}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
