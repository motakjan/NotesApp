import {
  alpha,
  Box,
  ClickAwayListener,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Popper,
  Typography,
} from '@mui/material';
import React from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CleanHandsIcon from '@mui/icons-material/CleanHands';

const data = [
  {
    _id: '1',
    title: 'Brunch this weekend?',
    content: ' - I will be in your neighborhood doing errands this…',
    user: {
      _id: '1',
      firstName: 'Tom',
      lastName: 'Smith',
      image: 'https://avatars.dicebear.com/api/micah/yaroas.svg',
    },
    createdAt: 'test',
  },
  {
    _id: '2',
    title: 'Newest notification',
    content: ' - I will be in your neighborhood doing errands this and hopefully something else…',
    user: {
      _id: '2',
      firstName: 'Jan',
      lastName: 'Motak',
      image: 'https://avatars.dicebear.com/api/micah/mtaok.svg',
    },
    createdAt: 'test',
  },
  {
    _id: '3',
    title: 'Oldest notification',
    content: ' - I will be in young else…',
    user: {
      _id: '3',
      firstName: 'Peter',
      lastName: 'Peterson',
      image: 'https://avatars.dicebear.com/api/micah/peterson.svg',
    },
    createdAt: 'test',
  },
  {
    _id: '4',
    title: 'Notification',
    content: ' - I will be in your neighborhood',
    user: {
      _id: '4',
      firstName: 'Lucas',
      lastName: 'Poroshenko',
      image: 'https://avatars.dicebear.com/api/micah/mtaok.svg',
    },
    createdAt: 'test',
  },
];

export const NotificationsPopper: React.FC<any> = ({ open, id, anchorEl, theme, setAnchorEl }) => (
  <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end" style={{ zIndex: 4000 }}>
    <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
      <Paper
        sx={{
          p: 1,
          borderRadius: '7px',
          bgcolor: alpha(theme.palette.background.paper, 0.97),
          overflowY: 'scroll',
          maxHeight: '20rem',
          minWidth: '20rem',

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
        elevation={2}
      >
        <Box sx={{ p: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ mb: 0 }} gutterBottom>
            Notifications
          </Typography>
          <Box>
            <IconButton aria-label="notifications-clear" size="small" disabled={data.length === 0}>
              <CleanHandsIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="notifications-settings" size="small">
              <SettingsOutlinedIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>

        <Divider />
        <List sx={{ width: '100%', maxWidth: 310 }} dense>
          {data.map((notification: any) => (
            <>
              <ListItem
                key={notification._id}
                alignItems="flex-start"
                sx={{ cursor: 'pointer', '&:hover': { backgroundColor: theme.palette.custom.notificationItemHover } }}
              >
                <ListItemText
                  primary={notification.title}
                  secondary={
                    <>
                      <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                        {`${notification.user.firstName} ${notification.user.lastName}`}
                      </Typography>
                      {notification.content}
                    </>
                  }
                />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Paper>
    </ClickAwayListener>
  </Popper>
);
