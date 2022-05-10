import { Avatar, Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import React from 'react';
import { blue } from '@mui/material/colors';

interface IFilterOptions {
  handlePersonClicked: () => void;
  selectedUser: any;
}

export const FilterOptions: React.FC<IFilterOptions> = ({ handlePersonClicked, selectedUser }) => (
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
    <Button
      startIcon={
        selectedUser !== 'Person' ? (
          <Avatar
            sx={{ bgcolor: blue[100], color: blue[600] }}
            alt={selectedUser.fullName}
            src={`http://127.0.0.1:1337/${selectedUser.image}`}
          />
        ) : (
          <AccountCircleIcon />
        )
      }
      sx={{ textTransform: 'none' }}
      variant="text"
      onClick={handlePersonClicked}
    >
      {selectedUser.fullName || 'Person'}
    </Button>
    <Button startIcon={<FilterAltIcon />} sx={{ textTransform: 'none' }} variant="text">
      Filter
    </Button>
    <Button startIcon={<SortIcon />} sx={{ textTransform: 'none' }} variant="text">
      Sort
    </Button>
  </Box>
);
