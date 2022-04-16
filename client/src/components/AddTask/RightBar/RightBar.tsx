import {
  Typography,
  Box,
  Divider,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
  List,
  Button,
  IconButton,
} from '@mui/material';
import { Control } from 'react-hook-form';
import { DropzoneFileInput } from '../../UI/Dropzone/DropzoneFileInput';
import { NappPersonModal } from '../../UI/Modals/NappPersonModal';
import { ShadowedContainer } from '../../UI/ShadowedContainer/ShadowedContainer';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface IRightBar {
  control: Control<any>;
}

export const RightBar: React.FC<IRightBar> = ({ control }) => (
  <Box>
    <ShadowedContainer sx={{ minHeight: 'fit-content', mt: 2 }}>
      <Typography component="h2" variant="subtitle1">
        Add People
      </Typography>
      <Divider />
      <List dense sx={{ width: '100%', bgcolor: 'background.paper', mt: 1 }}>
        {[0, 1, 2, 3].map(value => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Box>
                  <IconButton aria-label="delete" size="large" color="error">
                    <DeleteForeverIcon fontSize="small" />
                  </IconButton>
                  <IconButton aria-label="more" size="large">
                    <MoreHorizIcon fontSize="small" />
                  </IconButton>
                </Box>
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${value + 1}`}
                    src={`https://avatars.dicebear.com/api/big-ears-neutral/${value + 1}.svg`}
                  />
                </ListItemAvatar>
                <ListItemText
                  secondaryTypographyProps={{ style: { color: 'gray', fontSize: '11px ' } }}
                  id={labelId}
                  primary={`Line item ${value + 1}`}
                  secondary={`Role ${value + 1}`}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <NappPersonModal buttonText="Select People" buttonSx={{ width: '100%', marginTop: 2 }} buttonSize="small" />
    </ShadowedContainer>
    <ShadowedContainer sx={{ minHeight: 'fit-content', mt: 2, maxHeight: '30rem', overflow: 'auto' }}>
      <Typography component="h2" variant="subtitle1">
        Additional Files
      </Typography>
      <Divider />
      <DropzoneFileInput control={control} name="dropzone" />
    </ShadowedContainer>
  </Box>
);
