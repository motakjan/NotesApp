import { ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import React, { ReactNode } from 'react';

interface IDrawerIcon {
  title: string;
  onClick: () => void;
  icon: ReactNode;
  open: boolean;
}

export const DrawerIcon: React.FC<IDrawerIcon> = ({ title, onClick, icon, open }) => (
  <Tooltip title={title} placement="right-start">
    <ListItemButton onClick={onClick} sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  </Tooltip>
);
