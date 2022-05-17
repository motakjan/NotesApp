import { Avatar, Box, Button, InputAdornment, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CompressIcon from '@mui/icons-material/Compress';
import ExpandIcon from '@mui/icons-material/Expand';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import { blue } from '@mui/material/colors';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import InvertColorsOffIcon from '@mui/icons-material/InvertColorsOff';

interface IFilterOptions {
  handlePersonClicked: () => void;
  selectedUser: any;
  setTaskSize: (size: 'small' | 'medium' | 'large') => void;
  taskSize: string;
  colored: boolean;
  setColored: (colored: boolean) => void;
}

export const FilterOptions: React.FC<IFilterOptions> = ({
  handlePersonClicked,
  selectedUser,
  setTaskSize,
  taskSize,
  colored,
  setColored,
}) => {
  const [searchClicked, setSearchClicked] = useState(false);

  const handleTaskSizeChanged = (
    _event: React.MouseEvent<HTMLElement, MouseEvent>,
    newSize: 'small' | 'medium' | 'large'
  ) => setTaskSize(newSize);

  const handleColorChanged = (_event: React.MouseEvent<HTMLElement, MouseEvent>, color: boolean) => {
    setColored(color);
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
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
        }}
        variant="standard"
        color="primary"
        onFocus={() => setSearchClicked(prev => !prev)}
        onBlur={() => setSearchClicked(prev => !prev)}
        placeholder="Search"
        sx={{
          width: searchClicked ? '12rem' : '6rem',
          transition: 'width 1s',
        }}
      />
      <Button
        startIcon={
          selectedUser !== 'All Users' ? (
            <Avatar
              sx={{ bgcolor: blue[100], color: blue[600] }}
              alt={selectedUser.fullName}
              src={selectedUser.image && `${import.meta.env.VITE_BE_URL}${selectedUser.image}`}
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
        {selectedUser.fullName || 'All Users'}
      </Button>
      <Button startIcon={<FilterAltIcon />} sx={{ textTransform: 'none' }} variant="text">
        Filter
      </Button>
      <Button startIcon={<SortIcon />} sx={{ textTransform: 'none' }} variant="text">
        Sort
      </Button>
      <Box sx={{ marginLeft: 'auto', display: 'flex', gap: '1rem' }}>
        <ToggleButtonGroup size="small" value={taskSize} onChange={handleTaskSizeChanged} exclusive>
          <ToggleButton value="small" key="small">
            <CompressIcon />
          </ToggleButton>
          <ToggleButton value="large" key="large">
            <ExpandIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup size="small" value={colored} onChange={handleColorChanged} exclusive>
          <ToggleButton value={false} key="large">
            <InvertColorsOffIcon />
          </ToggleButton>
          <ToggleButton value={true} key="small">
            <InvertColorsIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};
