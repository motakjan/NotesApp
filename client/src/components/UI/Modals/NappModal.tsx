import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Paper } from '@mui/material';

interface INappModal {
  children: React.ReactNode;
  buttonText: string;
  buttonSx?: React.CSSProperties;
  buttonSize: 'small' | 'medium' | 'large';
}

const style = {
  position: 'absolute',
  top: '38%',
  left: '38%',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
};

export const NappModal: React.FC<INappModal> = ({ children, buttonText, buttonSx, buttonSize }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button color="secondary" variant="outlined" onClick={handleOpen} sx={buttonSx} size={buttonSize}>
        {buttonText}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Paper sx={style}>{children}</Paper>
      </Modal>
    </>
  );
};
