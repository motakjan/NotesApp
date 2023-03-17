import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { COLUMN_NAMES } from '../../../utils/dashboardHelpers';

interface INappMoveModal {
  open: boolean;
  handleClose: () => void;
  handleConfirm: (target: string) => void;
  from: string;
}

export const NappMoveModal: React.FC<INappMoveModal> = ({ open, handleClose, handleConfirm, from }) => {
  const [columnValue, setColumnValue] = React.useState<string>('');
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Move Task</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2, p: 0.5 }}>
          Select a column name where you want to move this task
        </DialogContentText>
        <FormControl fullWidth>
          <InputLabel id="move-task-select-label">Status</InputLabel>
          <Select
            labelId="move-task-select-label"
            id="move-task-select"
            value={columnValue}
            label="Status"
            onChange={e => setColumnValue(e.target.value)}
          >
            {COLUMN_NAMES.map((name: string) => (
              <MenuItem key={`move-select-${name}`} disabled={name === from} value={name}>
                {name.toUpperCase()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={() => handleConfirm(columnValue)}>Move</Button>
      </DialogActions>
    </Dialog>
  );
};
