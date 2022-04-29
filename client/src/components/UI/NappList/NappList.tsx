import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import { NappListActions } from './NappListActions';
/*
data if avatar generate avatar
actions react component
*/

export const NappList: React.FC<any> = ({ setSelectedUsers, data, deletable, more }) => {
  const deleteHandler = (id: string) => {
    setSelectedUsers((prev: any) => prev.filter((item: any) => item.id !== id));
  };
  return (
    <List dense sx={{ width: '100%', bgcolor: 'background.paper', mt: 1 }}>
      {data.map((value: any) => (
        <ListItem
          key={value.id}
          secondaryAction={
            <NappListActions deletable={deletable} deleteHandler={deleteHandler} id={value.id} more={more} />
          }
          disablePadding
        >
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
};
