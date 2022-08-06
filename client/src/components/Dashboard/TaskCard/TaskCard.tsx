import { createTheme, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import React, { useState } from 'react';
import { getCurrentTheme } from '../../../assets/theme';
import { useColorMode } from '../../../context/ColorModeContext';
import { TaskCardPropsType } from '../../../types/taskCardTypes';
import { TASK_TYPE_COLORS } from '../../../utils/constVariables';
import { NappTaskSkeleton } from '../../UI/NappTaskSkeleton/NappTaskSkeleton';
import { CardAction } from './CardActions/CardActions';
import { CardActionsArea } from './CardActions/CardActionsArea';

export const TaskCard: React.FC<TaskCardPropsType> = ({
  title,
  type,
  tags,
  text,
  id,
  updatedAt,
  size,
  colored,
  onMoveClick,
  from,
}) => {
  const [showActions, setShowActions] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);
  const { mode } = useColorMode();
  const theme = React.useMemo(() => createTheme(getCurrentTheme(mode)), [mode]);

  const handleCardClick = () => {
    setShowActions((prevState: boolean) => !prevState);
    setChecked((prevState: boolean) => !prevState);
  };

  if (!title) {
    return <NappTaskSkeleton />;
  }

  return (
    <Card
      sx={{
        cursor: 'default',
        width: '99%',
        borderLeft: '6px solid',
        borderLeftColor: colored ? TASK_TYPE_COLORS[type] : theme.palette.custom.cardBorderColor,
        backgroundColor: theme.palette.custom.cardColor,
      }}
    >
      <CardActionsArea
        title={title}
        tags={tags}
        handleClick={handleCardClick}
        text={text}
        updatedAt={updatedAt}
        size={size}
      />
      <Divider />
      <CardAction showActions={showActions} checked={checked} taskId={id} onMoveClick={onMoveClick} from={from} />
    </Card>
  );
};
