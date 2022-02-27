import { DragDropContext, Draggable, Droppable, DropResult, } from 'react-beautiful-dnd';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, Typography } from '@mui/material';
import { TaskCard } from '../TaskCard/TaskCard';
import { onDashboardTaskDragEnd } from '../../../utils/helpers';

const itemsFromBackend = [
  {
    id: uuidv4(),
    title: 'First Task',
    tags: [
      {
        name: 'Testing',
        color: 'info',
        type: 'tag',
      },
      {
        name: 'Testing',
        color: 'warning',
        type: 'filledTag',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Second Task',
    tags: [],
  },
  {
    id: uuidv4(),
    title: 'Third Task',
    tags: [
      {
        name: 'Working',
        color: 'error',
        type: 'tag',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Third Task',
    tags: [
      {
        name: 'Working',
        color: 'error',
        type: 'tag',
      },
    ],
  },
  
  {
    id: uuidv4(),
    title: 'Third Task',
    tags: [
      {
        name: 'Working',
        color: 'error',
        type: 'tag',
      },
    ],
  },
  
  {
    id: uuidv4(),
    title: 'Third Task',
    tags: [
      { 
        name: 'Working',
        color: 'error',
        type: 'tag',
      },
    ],
  },
  
  {
    id: uuidv4(),
    title: 'Third Task',
    tags: [
      {
        name: 'Working',
        color: 'error',
        type: 'tag',
      },
    ],
  },
];

const columnsFromBacked = {
  [uuidv4()]: {
    name: 'Requested',
    items: itemsFromBackend,
  },
  [uuidv4()]: {
    name: 'Todo',
    items: [],
  },
  [uuidv4()]: {
    name: 'In Progress',
    items: [],
  },

  [uuidv4()]: {
    name: 'Done',
    items: [],
  },
};


export const TaskBoard = () => {
  const [columns, setColumns] = useState(columnsFromBacked);
  return (
    <Box
      style={{
        display: 'flex',
        height: '100%', 
        minHeight: '65vh'
      }}
    >
      <DragDropContext
        onDragEnd={(result: DropResult) =>
          onDashboardTaskDragEnd(result, columns, setColumns)
        }
      >
        {Object.entries(columns).map(([id, column]) => (
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Box
              style={{
                margin: 8,
                height: '100%',
              }}
            >
              <Typography variant="h5">{column.name}</Typography>
              <Droppable
                droppableId={id}
                key={id}
              >
                {(provided: any, snapshot: any) => (
                  <Box
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      width: '16rem',
                      padding: 4,
                      height: '100%',
                      backgroundColor: snapshot.isDraggingOver
                        ? 'lightblue'
                        : '#e9e9e9',
                    }}
                  >
                    {column.items.map((item: any, index: number) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
                        {(provided: any, _snapshot: any) => (
                          <Box
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            style={{
                              userSelect: 'none',
                              margin: '0 0 8px 0',
                              width: '100%',
                              zIndex: 20,
                              position: 'relative',
                              minHeight: '50px',
                              textColor: 'white',
                              ...provided.draggableProps.style,
                            }}
                          >
                            <TaskCard
                              title={item.title}
                              tags={item.tags}
                              from="9:00"
                              to="10:30"
                              priority={2}
                            />
                          </Box>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>
            </Box>
          </Box>
        ))}
      </DragDropContext>
    </Box>
  );
};
