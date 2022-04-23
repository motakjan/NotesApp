import { ListItem, ListItemButton, ListItemAvatar, ListItemText, Avatar, List, IconButton } from '@mui/material';
/*
data if avatar generate avatar
actions react component
*/

export const NappList: React.FC<any> = ({ data, actions }) => (
  <List dense sx={{ width: '100%', bgcolor: 'background.paper', mt: 1 }}>
    {data.map((value: any) => (
      <ListItem key={value.id} secondaryAction={actions} disablePadding>
        <ListItemButton>
          {value.avatar && (
            <ListItemAvatar sx={{ minWidth: 45 }}>
              <Avatar alt={value.avatar.alt} src={value.avatar.src} sx={{ width: 31, height: 31 }} />
            </ListItemAvatar>
          )}

          <ListItemText
            secondaryTypographyProps={{ style: { color: 'gray', fontSize: '11px ' } }}
            primary={value.mainText}
            secondary={value.secondaryText}
          />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);
