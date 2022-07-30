import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Paper } from '@mui/material';

interface INappModal {
  children: React.ReactNode;
  buttonText: string;
  buttonSx?: React.CSSProperties;
  buttonSize: 'small' | 'medium' | 'large';
  buttonVariant?: 'contained' | 'outlined' | 'text';
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  maxWidth: '700px',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

export const NappModal: React.FC<INappModal> = ({ children, buttonVariant, buttonText, buttonSx, buttonSize }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        color="secondary"
        variant={buttonVariant || 'outlined'}
        onClick={handleOpen}
        sx={buttonSx}
        size={buttonSize}
      >
        {buttonText}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Paper sx={style}>{children}</Paper>
      </Modal>
    </>
  );
};
