import { alpha, Box, createTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { getCurrentTheme } from '../../../assets/theme';
import { useColorMode } from '../../../context/ColorModeContext';

interface INappConfirmModal {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  title: string;
  text: string;
}

export const NappConfirmModal: React.FC<INappConfirmModal> = ({ open, handleClose, handleConfirm, title, text }) => {
  const { mode } = useColorMode();
  const theme = React.useMemo(() => createTheme(getCurrentTheme(mode)), [mode]);
  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: alpha(theme.palette.background.paper, 0.97),
          },
        }}
      >
        <DialogTitle id="confirm-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-dialog-description">{text}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Close
          </Button>
          <Button onClick={handleConfirm} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
