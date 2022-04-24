import { Avatar, Paper, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import useDebounce from '../../../hooks/useDebounce';
import { NappModal } from './NappModal';
import { v4 as uuidv4 } from 'uuid';
import { Box } from '@mui/system';

interface INappPersonModal {
  buttonText: string;
  buttonSx?: React.CSSProperties;
  buttonSize: 'small' | 'medium' | 'large';
  userListData: any;
  selectedUsers: any;
  setSelectedUsers: (users: any) => void;
}

export const NappPersonModal: React.FC<INappPersonModal> = ({
  buttonText,
  buttonSx,
  buttonSize,
  userListData,
  selectedUsers,
  setSelectedUsers,
}) => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleUserClick = (user: any) => {
    setSelectedUsers((prevUsers: any) => {
      const isUserInArray = prevUsers.some((prevUser: any) => prevUser.id === user.id);
      const newUsers = prevUsers.filter((prevUser: any) => prevUser.id !== user.id);
      return newUsers.concat(isUserInArray ? [] : [user]);
    });
  };

  return (
    <NappModal buttonText={buttonText} buttonSx={buttonSx} buttonSize={buttonSize}>
      <Paper square sx={{ p: '6px' }}>
        <TextField
          placeholder="Search Person"
          variant="filled"
          sx={{ width: '100%' }}
          inputProps={{
            style: {
              height: '12px',
              padding: '10px 12px',
              fontSize: 'smaller',
            },
          }}
          value={value}
          onChange={handleChange}
          focused
        />
      </Paper>

      {userListData
        .filter((user: any) => user.mainText.toLowerCase().includes(debouncedValue.toLowerCase()))
        .map((user: any) => {
          const isUserSelected = selectedUsers.some((selectedUser: any) => selectedUser.id === user.id);
          return (
            <Paper
              elevation={0}
              key={`${uuidv4()}-option`}
              square
              onClick={() => handleUserClick(user)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: isUserSelected ? 'nappPersonModal.addTaskUserModalSelected' : 'background.default',
                p: '0.25rem 0.5rem',
                gap: '10px',
                fontSize: '11.5px',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'nappPersonModal.addTaskUserModalHover',
                },
              }}
            >
              <Avatar alt="Remy Sharp" src={user.avatar.src} sx={{ width: '2rem', height: '2rem' }} />
              <Box>
                <Typography sx={{ fontSize: '0.8rem', color: 'primary.main' }}>{user.mainText}</Typography>
                <Typography sx={{ fontSize: '0.6rem', color: '#727272' }} variant="caption">
                  {user.email}
                </Typography>
              </Box>
            </Paper>
          );
        })}
    </NappModal>
  );
};
