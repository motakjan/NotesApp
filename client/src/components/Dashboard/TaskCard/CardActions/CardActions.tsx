import { CardActions, IconButton, Tooltip } from '@mui/material';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import PeopleIcon from '@mui/icons-material/People';
import React from 'react';
import { CardActionPropsType } from '../../../../types/taskCardTypes';


export const CardAction:React.FC<CardActionPropsType> = ({ showActions }) => (
  <CardActions 
    sx={{
      display: showActions ? 'flex' : 'none', padding: '3px 16px'
    }}
  > 
    {/* TODO onClick */}
    <Tooltip title="Open Menu">
      <IconButton>
        <MenuOpenOutlinedIcon fontSize="small" />
      </IconButton>
    </Tooltip>
    {/* TODO onClick */}
    <Tooltip title="Comments">
      <IconButton>
        <CommentOutlinedIcon fontSize="small" />
      </IconButton>
    </Tooltip>
    {/* TODO onClick https://mui.com/components/dialogs/ */}
    <Tooltip title="Users">
      <IconButton>
        <PeopleIcon fontSize="small" />
      </IconButton>
    </Tooltip>
    {/* TODO onClick */}
    <Tooltip title="Check">
      <IconButton>
        <CheckOutlinedIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  </CardActions>
);
