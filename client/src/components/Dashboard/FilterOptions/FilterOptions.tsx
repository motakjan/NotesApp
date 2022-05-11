import { Avatar, Box, Button, InputAdornment, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useRef, useState } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CompressIcon from '@mui/icons-material/Compress';
import ExpandIcon from '@mui/icons-material/Expand';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import { blue } from '@mui/material/colors';

interface IFilterOptions {
  handlePersonClicked: () => void;
  selectedUser: any;
  setTaskSize: (size: 'small' | 'medium' | 'large') => void;
  taskSize: string;
}

export const FilterOptions: React.FC<IFilterOptions> = ({
  handlePersonClicked,
  selectedUser,
  setTaskSize,
  taskSize,
}) => {
  const handleTaskSizeChanged = (_event: React.MouseEvent<HTMLElement>, newSize: 'small' | 'medium' | 'large') =>
    setTaskSize(newSize);
  const [searchClicked, setSearchClicked] = useState(false);
  const searchInputRef = useRef();

  const handleSearchClicked = () => {
    searchInputRef.current.focus();
    setSearchClicked(true);
  };

  return (
    <Box
      sx={{
        p: '0.5rem 0 0.5rem 10px',
        gap: '0.5rem',
        display: 'flex',
      }}
    >
      <TextField
        id="input-with-icon-textfield"
        inputRef={searchInputRef}
        onClick={handleSearchClicked}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
        }}
        variant="standard"
        color="primary"
        placeholder="Search"
        sx={{
          width: searchClicked ? '12rem' : '6rem',
          transition: 'width 1s',
        }}
        autoFocus
      />
      <Button
        startIcon={
          selectedUser !== 'Person' ? (
            <Avatar
              sx={{ bgcolor: blue[100], color: blue[600] }}
              alt={selectedUser.fullName}
              src={selectedUser.image && `http://127.0.0.1:1337/${selectedUser.image}`}
            >
              {`${selectedUser.firstName.charAt(0)}${selectedUser.lastName.charAt(0)}`}
            </Avatar>
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
      <ToggleButtonGroup size="small" value={taskSize} onChange={handleTaskSizeChanged} exclusive>
        <ToggleButton value="small" key="small">
          <CompressIcon />
        </ToggleButton>
        <ToggleButton value="large" key="large">
          <ExpandIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
