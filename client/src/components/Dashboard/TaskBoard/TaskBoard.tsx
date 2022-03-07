import { DragDropContext,
  Droppable,
  DropResult,
  Draggable, } from 'react-beautiful-dnd';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, Typography } from '@mui/material';
import { TaskCard } from '../TaskCard/TaskCard';
import { useColorMode } from '../../../context/ColorModeContext';
import { onDragEnd, getBGColor, columnsFromBacked } from '../../../utils/dashboardHelpers';

export const TaskBoard = () => {
  const [columns, setColumns] = useState(columnsFromBacked);
  const { mode } = useColorMode();

  return (
    <Box
      style={{
        display: 'flex',
        height: '100%',
        minHeight: '65vh',
        minWidth: '100rem',
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
              minWidth: '16.66666%',
            }}
          >
            <Box
              sx={{
                m: '8px',
                height: '100%',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: 'small'
                }}
              >{column.name}</Typography>
              <Droppable
                droppableId={id}
                key={id}
              >
                {(provided: any, snapshot: any) => (
                  <Box
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    sx={{
                      height: '100%',
                      minWidth: '100%',
                      p: '10px',
                      backgroundColor: snapshot.isDraggingOver
                        ? getBGColor(mode, '#0e2a40', 'lightblue')
                        : getBGColor(mode, '#00101c', '#e2e2e2'),
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
