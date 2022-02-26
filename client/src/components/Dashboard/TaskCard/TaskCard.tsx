import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { Divider, } from '@mui/material';
import { TaskCardPropsType } from '../../../types/taskCardTypes';
import { CardAction } from './CardActions/CardActions';
import { CardActionsArea } from './CardActions/CardActionsArea';
import { PRIORITY_TASK_CARD_COLORS } from '../../../utils/constVariables';

export const TaskCard: React.FC<TaskCardPropsType> = ({ title, priority, tags, from, to }) => {
  const [showActions, setShowActions] = useState<any>(false);
  return (
    <Card
      sx={{
        maxWidth: '16rem',
        borderLeft: `6px solid ${PRIORITY_TASK_CARD_COLORS[priority]}`,
        margin: '0.5rem',
      }}
    >
      <CardActionsArea 
        title={title}
        tags={tags} 
        from={from}  
        to={to}
        setShowActions={setShowActions}
      />
      <Divider />
      <CardAction showActions={showActions} />
    </Card>
  )
}
  

