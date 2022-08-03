import SendIcon from '@mui/icons-material/Send';
import { alpha, Box, Button, createTheme, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { getCurrentTheme } from '../../../assets/theme';
import { useColorMode } from '../../../context/ColorModeContext';

interface INappCommentsModal {
  open: boolean;
  handleClose: () => void;
}

export const NappCommentsModal: React.FC<INappCommentsModal> = ({ open, handleClose }) => {
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
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        <DialogTitle id="confirm-dialog-title">Comments</DialogTitle>

        <Box sx={{ display: 'flex', p: 1, gap: '10px', flexDirection: 'column' }}>
          <Box sx={{ p: 1 }}>
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              placeholder="Add a comment"
              sx={{ width: '100%' }}
            />
            <Box sx={{ display: 'flex', marginTop: '1rem' }}>
              <Button sx={{ width: '5rem' }}>Submit</Button>
              <Button color="error" sx={{ width: '5rem' }}>
                Delete
              </Button>
            </Box>
          </Box>

          <Divider />

          <List sx={{ width: '100%', maxWidth: 520, maxHeight: 450 }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://www.zing.cz/wp-content/uploads/2021/06/mario-hero.jpg"
                  sx={{ width: 35, height: 35 }}
                  variant="rounded"
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                    <Typography variant="subtitle2" component="h2">
                      John Smith
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      component="h2"
                      sx={{ fontSize: 9, color: '#8C8C8C', height: '100%' }}
                    >
                      Today At: 5:24PM
                    </Typography>
                  </Box>
                }
                secondary={
                  <Typography
                    sx={{ display: 'inline', fontSize: '12px' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vel error veritatis consectetur
                    quaerat dolore minima corrupti blanditiis, voluptatem odit.
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="https://cdn.alza.cz/Foto/ImgGalery/Image/luigis-mansion-3-luigi.jpg"
                  sx={{ width: 35, height: 35 }}
                  variant="rounded"
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                    <Typography variant="subtitle2" component="h2">
                      John Smith
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      component="h2"
                      sx={{ fontSize: 9, color: '#8C8C8C', height: '100%' }}
                    >
                      Today At: 5:24PM
                    </Typography>
                  </Box>
                }
                secondary={
                  <Typography
                    sx={{ display: 'inline', fontSize: '12px' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vel error veritatis consectetur
                    quaerat dolore minima corrupti blanditiis, voluptatem odit.
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Cindy Baker"
                  src="https://storage.googleapis.com/hrej2-cz/media/images/zzf83eduha8gr3w60cab14b6356f693350015.jpg"
                  sx={{ width: 35, height: 35 }}
                  variant="rounded"
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                    <Typography variant="subtitle2" component="h2">
                      John Smith
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      component="h2"
                      sx={{ fontSize: 9, color: '#8C8C8C', height: '100%' }}
                    >
                      Today At: 5:24PM
                    </Typography>
                  </Box>
                }
                secondary={
                  <Typography
                    sx={{ display: 'inline', fontSize: '12px' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Dialog>
    </Box>
  );
};
