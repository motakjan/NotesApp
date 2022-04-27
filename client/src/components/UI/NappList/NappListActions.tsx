import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export const NappListActions: React.FC<any> = ({ deletable, more, deleteHandler, id }) => {
  return (
    <Box>
      {deletable && (
        <IconButton onClick={() => deleteHandler(id)} aria-label="delete" size="large" color="error">
          <DeleteForeverIcon fontSize="small" />
        </IconButton>
      )}
      {more && (
        <IconButton aria-label="more" size="large">
          <MoreHorizIcon fontSize="small" />
        </IconButton>
      )}
    </Box>
  );
};
