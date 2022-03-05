import { CardActions, IconButton, Slide, Tooltip } from '@mui/material';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import PeopleIcon from '@mui/icons-material/People';
import React from 'react';
import { CardActionPropsType } from '../../../../types/taskCardTypes';


export const CardAction:React.FC<CardActionPropsType> = ({ showActions, checked }) => (
  <Slide
    direction="right"
    in={checked}
    mountOnEnter
    unmountOnExit
  >
    <CardActions 
      sx={{
        display: showActions ? 'flex' : 'none', padding: '3px 16px'
      }}
    > 
      {/* TODO onClick */}
      <Tooltip title="Open Menu">
        <IconButton
          sx={{
            padding: '5px 2px'
          }}
        >
          <MenuOpenOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      {/* TODO onClick */}
      <Tooltip title="Comments">
        <IconButton
          sx={{
            padding: '5px 2px'
          }}
        >
          <CommentOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      {/* TODO onClick https://mui.com/components/dialogs/ */}
      <Tooltip title="Users">
        <IconButton
          sx={{
            padding: '5px 2px'
          }}
        >
          <PeopleIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      {/* TODO onClick */}
      <Tooltip title="Check">
        <IconButton
          sx={{
            padding: '5px 2px'
          }}
        >
          <CheckOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </CardActions>
  </Slide>
  
);
