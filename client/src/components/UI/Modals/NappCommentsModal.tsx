import { Box, Button, createTheme, DialogContent, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
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

const COMMENTS_DATA = [
  {
    _id: '1',
    img: 'https://www.zing.cz/wp-content/uploads/2021/06/mario-hero.jpg',
    name: 'John Smithson',
    date: 'Today At: 5:24PM',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vel error veritatis consecteturquaerat dolore minima corrupti blanditiis, voluptatem odit.',
  },
  {
    _id: '2',
    img: 'https://www.zing.cz/wp-content/uploads/2021/06/mario-hero.jpg',
    name: 'John Smithson',
    date: 'Today At: 5:24PM',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vel error veritatis consecteturquaerat dolore minima corrupti blanditiis, voluptatem odit.',
  },
  {
    _id: '3',
    img: 'https://www.zing.cz/wp-content/uploads/2021/06/mario-hero.jpg',
    name: 'John Smithson',
    date: 'Today At: 5:24PM',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vel error veritatis consecteturquaerat dolore minima corrupti blanditiis, voluptatem odit.',
  },
  {
    _id: '4',
    img: 'https://www.zing.cz/wp-content/uploads/2021/06/mario-hero.jpg',
    name: 'John Smithson',
    date: 'Today At: 5:24PM',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vel error veritatis consecteturquaerat dolore minima corrupti blanditiis, voluptatem odit.',
  },
  {
    _id: '5',
    img: 'https://www.zing.cz/wp-content/uploads/2021/06/mario-hero.jpg',
    name: 'John Smithson',
    date: 'Today At: 5:24PM',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vel error veritatis consecteturquaerat dolore minima corrupti blanditiis, voluptatem odit.',
  },
];

export const NappCommentsModal: React.FC<INappCommentsModal> = ({ open, handleClose }) => {
  const [message, setMessage] = React.useState<string>('');
  const { mode } = useColorMode();
  const theme = React.useMemo(() => createTheme(getCurrentTheme(mode)), [mode]);

  const handleAddComment = () => {
    console.log(message);
  };

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
      >
        <Box
          sx={{
            p: 2,
            borderRadius: 0,
          }}
        >
          <TextField
            id="outlined-multiline-static"
            label="Comment"
            placeholder="Add a comment"
            onChange={e => setMessage(e.target.value)}
            value={message}
            sx={{ width: '100%', mt: 2 }}
          />
          <Box sx={{ display: 'flex', marginTop: '1rem' }}>
            <Button sx={{ width: '5rem' }} onClick={handleAddComment}>
              Submit
            </Button>
            <Button color="error" sx={{ width: '5rem' }} onClick={() => setMessage('')}>
              Clear
            </Button>
          </Box>
        </Box>
        <Divider />
        <DialogContent
          sx={{
            display: 'flex',
            p: 1,
            gap: '10px',
            flexDirection: 'column',
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              width: '6px',
              backgroundColor: theme.palette.custom.notificationScroll,
              borderRadius: '10px',
              overflowY: 'hidden',
            },
          }}
        >
          <Box>
            <List sx={{ width: '100%', maxWidth: 520, maxHeight: 450, p: 1 }}>
              {COMMENTS_DATA.map(comment => (
                <Box key={comment._id}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={comment.img} sx={{ width: 35, height: 35 }} variant="rounded" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                          <Typography variant="subtitle2" component="h2">
                            {comment.name}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            component="h2"
                            sx={{ fontSize: 9, color: '#8C8C8C', height: '100%' }}
                          >
                            {comment.date}
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
                          {comment.description}
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider component="li" />
                </Box>
              ))}
            </List>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
