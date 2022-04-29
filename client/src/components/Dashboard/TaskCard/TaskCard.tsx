import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { createTheme, Divider } from '@mui/material';
import { TaskCardPropsType } from '../../../types/taskCardTypes';
import { CardAction } from './CardActions/CardActions';
import { CardActionsArea } from './CardActions/CardActionsArea';
import { TASK_TYPE_COLORS } from '../../../utils/constVariables';
import { getCurrentTheme } from '../../../assets/theme';
import { useColorMode } from '../../../context/ColorModeContext';

export const TaskCard: React.FC<TaskCardPropsType> = ({ title, type, tags, text }) => {
  const [showActions, setShowActions] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);
  const { mode } = useColorMode();
  const theme = React.useMemo(() => createTheme(getCurrentTheme(mode)), [mode]);

  const handleCardClick = () => {
    setShowActions((prevState: boolean) => !prevState);
    setChecked((prevState: boolean) => !prevState);
  };

  return (
    <Card
      sx={{
        cursor: 'default',
        width: '99%',
        borderLeft: `6px solid ${TASK_TYPE_COLORS[type]}`,
        backgroundColor: theme.palette.custom.cardColor,
      }}
    >
      <CardActionsArea title={title} tags={tags} handleClick={handleCardClick} text={text} />
      <Divider />
      <CardAction showActions={showActions} checked={checked} />
    </Card>
  );
};
