import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea,
  CardActions,
  Chip,
  Divider,
  IconButton,
  Tooltip, } from '@mui/material';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import PeopleIcon from '@mui/icons-material/People';
import { Box } from '@mui/system';
import CircleIcon from '@mui/icons-material/Circle';

type TaskCardTagType = {
  name?: string,
  color: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined,
  type: 'tag' | 'filledTag',
}

type TaskCardPropsType = {
  title: string,
  priority: number,
  tags: TaskCardTagType[],
  from: string,
  to: string,
}

const priorityColors = {
  1: 'red',
  2: 'pink',
  3: 'red',
};

export const TaskCard: React.FC<TaskCardPropsType> = ({ title, priority, tags, from, to }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: '16rem',
        borderLeft: `6px solid ${priorityColors[priority]}`,
        margin: '0.5rem',
      }}
    >
      <CardActionArea onClick={() => setShowActions((prevState: any) => !prevState)}>
        <CardContent
          sx={{
            padding: '12px 16px 2px 16px' 
          }}
        >
          <Typography
            gutterBottom
            variant="h6" 
            component="div"
            sx={{
              mb: '0.05rem'
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
          >{from} : {to}am</Typography>
          <Box
            sx={{
              margin: '10px 0px',
              display: 'flex',
              gap: '5px',
              maxWidth: '25rem',
              flexFlow: 'wrap',
            }}
          >
            {tags &&
              tags.map((tag:TaskCardTagType) => <Chip
                sx={{
                  borderRadius: '5px 5px',
                  height: '20px',
                  padding: '0px 3px',
                }}
                variant={tag.type === 'tag' ? 'outlined' : 'filled'}
                color={tag.color}
                size="small"
                icon={tag.type === 'tag' ? <CircleIcon
                  sx={{
                    width: '10px',
                    height: '10px',
                  }}
                /> : <div />}
                label={<Typography
                  variant="caption"
                  gutterBottom
                  sx={{
                    fontSize: '0.6rem'
                  }}
                >{tag.name}</Typography>}
              />)}
          </Box>
        </CardContent>
      </CardActionArea>
      <Divider />
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
    </Card>
  )
}
  

