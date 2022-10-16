import CircleIcon from '@mui/icons-material/Circle';
import { Chip } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { v4 as uuidv4 } from 'uuid';
import { useColorMode } from '../../../../context/ColorModeContext';
import { CardActionsAreaType, TaskCardTagType } from '../../../../types/taskCardTypes';
import { TAG_TYPE_COLORS } from '../../../../utils/constVariables';
import './CardActionsArea.css';

export const CardActionsArea: React.FC<CardActionsAreaType> = ({ title, tags, handleClick, text, updatedAt, size }) => {
  const { mode } = useColorMode();

  return (
    <Box onClick={() => handleClick()} className={`hvr-fade-${mode}`} sx={{ width: '100%' }}>
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
        {size === 'large' && (
          <Typography variant="caption" display="block" gutterBottom>
            {text}
          </Typography>
        )}
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
            size === 'large' &&
            tags.map((tag: TaskCardTagType) => (
              <Chip
                key={`${uuidv4()}-chip`}
                sx={{
                  borderRadius: '5px 5px',
                  height: '20px',
                  padding: '0px 3px',
                }}
                variant="outlined"
                color={TAG_TYPE_COLORS[tag.tagType]}
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
                    {tag.tagText}
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
              {`updated at ${new Date(updatedAt!).toLocaleString()}`}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Box>
  );
};
