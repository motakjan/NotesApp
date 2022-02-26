import { CardActionArea, Chip } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { CardActionsAreaType, TaskCardTagType } from '../../../../types/taskCardTypes';
import CircleIcon from '@mui/icons-material/Circle';

export const CardActionsArea:React.FC<CardActionsAreaType> = ({ title,from,to,tags, setShowActions }) => (
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
        {tags && tags.map((tag:TaskCardTagType) => <Chip
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
          /> : <></>}
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
);


