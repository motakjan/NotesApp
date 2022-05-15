import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const NappSnackbar: React.FC<any> = ({ handleSave, handleClose, mode, open }) => {
  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleSave}>
        Save
      </Button>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <Snackbar
        variant={mode}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
        message="Dashboard layout changed"
        action={action}
      />
    </>
  );
};
