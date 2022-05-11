import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { blue } from '@mui/material/colors';

interface INappUserPicker {
  open: boolean;
  handleClose: () => void;
  users: any;
  setSelectedUser: (user: any) => void;
}

export const NappUserPicker: React.FC<INappUserPicker> = ({ open, handleClose, users, setSelectedUser }) => (
  <Dialog onClose={handleClose} open={open}>
    <DialogTitle>Dashboard Users</DialogTitle>
    <List sx={{ pt: 0, minWidth: '20rem' }}>
      {users?.map((user: any) => (
        <ListItem button key={user._id} onClick={() => setSelectedUser(user)}>
          <ListItemAvatar>
            <Avatar
              sx={{ bgcolor: blue[100], color: blue[600] }}
              alt={user.fullName}
              src={user.image && `http://127.0.0.1:1337/${user.image}`}
            >
              {`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={user.fullName} />
        </ListItem>
      ))}
    </List>
  </Dialog>
);
