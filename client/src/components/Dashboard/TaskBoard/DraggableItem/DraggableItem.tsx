import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { Box } from '@mui/material';
import { TaskCard } from '../../TaskCard/TaskCard';
import { TaskCardTagType } from '../../../../types/taskCardTypes';
import { ITask } from '../../../../types/Dashboard/dashboardTypes';

interface IDraggableItem {
  item: ITask;
  index: number;
}

const DraggableItem: React.FC<IDraggableItem> = ({ item, index }) => (
  <Draggable key={item.id} draggableId={item.id} index={index}>
    {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
    {(provided: DraggableProvided, _snapshot: DraggableStateSnapshot) => (
      <Box
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        sx={{
          userSelect: 'none',
          margin: '0 0 8px 0',
          width: '100%',
          minHeight: '50px',
          textColor: 'white',
          ...provided.draggableProps.style,
        }}
      >
        <TaskCard
          title={item.title}
          text={item.description}
          tags={item.tags as Array<TaskCardTagType>}
          id={item.id}
          updatedAt={item.updatedAt}
          type={item.type}
        />
      </Box>
    )}
  </Draggable>
);

export default DraggableItem;
