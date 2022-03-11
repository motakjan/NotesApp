import { DragDropContext,
  Droppable,
  DropResult,
  Draggable, } from 'react-beautiful-dnd';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, Typography } from '@mui/material';
import { TaskCard } from '../TaskCard/TaskCard';
import { useColorMode } from '../../../context/ColorModeContext';

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

const onDragEnd = (result: DropResult, columns: any, setColumns: any) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const getBGColor = (mode: string, darkColor: string, lightColor: string) => mode === 'dark' ? darkColor : lightColor

export const TaskBoard = () => {
  const [columns, setColumns] = useState(columnsFromBacked);
  const { mode } = useColorMode();

  return (
    <Box
      style={{
        display: 'flex',
        height: '100%',
        minHeight: '65vh',
      }}
    >
      <DragDropContext
        onDragEnd={(result: DropResult) =>
          onDragEnd(result, columns, setColumns)
        }
      >
        {Object.entries(columns).map(([id, column]) => (
          <Box
            key={`${uuidv4()}-column`}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Box
              sx={{
                m: '8px',
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
                    sx={{
                      width: '17.8rem',
                      p: '4px',
                      height: '100%',
                      backgroundColor: snapshot.isDraggingOver
                        ? getBGColor(mode, '#0e2a40', 'lightblue')
                        : getBGColor(mode, '#00101c', '#e2e2e2')
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
                              text={item.text}
                              tags={item.tags}
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
