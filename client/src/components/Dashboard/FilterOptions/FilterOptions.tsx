import { Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import React from 'react';

export const FilterOptions: React.FC = () => (
  <Box
    sx={{
      p: '0.5rem 0 0.5rem 10px',
      gap: '0.5rem',
      display: 'flex',
    }}
  >
    <Button startIcon={<SearchIcon />} sx={{ textTransform: 'none' }} variant="text">
      Search
    </Button>
    <Button startIcon={<AccountCircleIcon />} sx={{ textTransform: 'none' }} variant="text">
      Person
    </Button>
    <Button startIcon={<FilterAltIcon />} sx={{ textTransform: 'none' }} variant="text">
      Filter
    </Button>
    <Button startIcon={<SortIcon />} sx={{ textTransform: 'none' }} variant="text">
      Sort
    </Button>
  </Box>
);
