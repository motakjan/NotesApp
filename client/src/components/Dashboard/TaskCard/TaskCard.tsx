import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { Divider, } from '@mui/material';
import { TaskCardPropsType } from '../../../types/taskCardTypes';
import { CardAction } from './CardActions/CardActions';
import { CardActionsArea } from './CardActions/CardActionsArea';
import { PRIORITY_TASK_CARD_COLORS } from '../../../utils/constVariables';

export const TaskCard: React.FC<TaskCardPropsType> = ({ title, priority, tags, text }) => {
  const [showActions, setShowActions] = useState<any>(false);
  const [checked, setChecked] = useState(false);

  const handleCardClick = () => {
    setShowActions((prevState: any) => !prevState)
    setChecked((prevState: any) => !prevState)
  };

  return (
    <Card
      sx={{
        cursor: 'default',
        width: '99%',
        borderLeft: `6px solid ${PRIORITY_TASK_CARD_COLORS[priority]}`,
      }}
    >
      <CardActionsArea 
        title={title}
        tags={tags} 
        handleClick={handleCardClick}
        text={text}
      />
      <Divider />
      <CardAction
        showActions={showActions}
        checked={checked}
      />
    </Card>
  )
}
  

