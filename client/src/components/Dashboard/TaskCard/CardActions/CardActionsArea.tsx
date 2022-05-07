import { Chip } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { CardActionsAreaType, TaskCardTagType } from '../../../../types/taskCardTypes';
import CircleIcon from '@mui/icons-material/Circle';
import './CardActionsArea.css';
import { useColorMode } from '../../../../context/ColorModeContext';
import { v4 as uuidv4 } from 'uuid';

export const CardActionsArea: React.FC<CardActionsAreaType> = ({ title, tags, handleClick }) => {
  const { mode } = useColorMode();

  return (
    <Box onClick={() => handleClick()} className={`hvr-fade-${mode}`}>
      <CardContent
        sx={{
          padding: '12px 16px 2px 16px',
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            mb: '0.05rem',
          }}
        >
          {title}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel reprehenderit quaerat quasi doloribus autem
          velit consequuntur, quo inventore ...
        </Typography>
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
            tags.map((tag: TaskCardTagType) => (
              <Chip
                key={`${uuidv4()}-chip`}
                sx={{
                  borderRadius: '5px 5px',
                  height: '20px',
                  padding: '0px 3px',
                }}
                variant="outlined"
                color="info"
                size="small"
                icon={
                  <CircleIcon
                    sx={{
                      width: '10px',
                      height: '10px',
                    }}
                  />
                }
                label={
                  <Typography
                    variant="caption"
                    gutterBottom
                    sx={{
                      fontSize: '0.6rem',
                    }}
                  >
                    {tag}
                  </Typography>
                }
              />
            ))}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="caption"
              sx={{
                mb: 0,
                color: '#828282',
                fontSize: '0.6rem',
              }}
              gutterBottom
            >
              updated 2022-08-05 15:00
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Box>
  );
};
