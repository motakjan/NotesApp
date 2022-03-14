import { Box, Button, IconButton, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import React from 'react';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import RefreshIcon from '@mui/icons-material/Refresh';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export const FilterOptions: React.FC = () => {
  const [cardSize, setCardSize] = React.useState<string | null>('small');

  const handleCardSizeChange = (_event: React.MouseEvent<HTMLElement>, newCardSize: string | null) => {
    setCardSize(newCardSize);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'end',
        p: '0.8rem 0.5rem',
      }}
    >
      <Box
        sx={{
          marginRight: '1rem',
          display: 'inline',
        }}
      >
        <Tooltip title="Refresh">
          <IconButton>
            <RefreshIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Filter">
          <IconButton>
            <FilterAltIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <ToggleButtonGroup
        value={cardSize}
        exclusive
        onChange={handleCardSizeChange}
        aria-label="text alignment"
        sx={{
          marginRight: '1rem',
        }}
      >
        <ToggleButton value="small" size="small" aria-label="left aligned">
          Small
        </ToggleButton>
        <ToggleButton value="large" size="small" aria-label="centered">
          Large
        </ToggleButton>
      </ToggleButtonGroup>

      <Button size="small" variant="contained" disableElevation color="secondary" startIcon={<ManageSearchIcon />}>
        Filter Tasks
      </Button>
    </Box>
  );
};
